import type { APIRoute } from 'astro';
import { PrismaClient } from '@prisma/client';

// Use a singleton pattern for Prisma client
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export const GET: APIRoute = async ({ request }) => {
  try {
    console.log('=== Congestion Plot API Debug ===');
    
    // Get parameters from query
    const url = new URL(request.url);
    const requestedScenarioid = url.searchParams.get('scenarioid');
    
    let scenarioid: number | null = null;
    
    if (requestedScenarioid) {
      scenarioid = parseInt(requestedScenarioid, 10);
      console.log('Using requested scenarioid:', scenarioid);
    } else {
      // Find the most recent scenarioid
      const latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
        orderBy: { scenarioid: 'desc' },
        select: { scenarioid: true },
      });
      scenarioid = latestScenario?.scenarioid || null;
      console.log('Found latest scenarioid:', scenarioid);
    }
    
    if (!scenarioid) {
      console.log('No scenarioid found!');
      return new Response(
        JSON.stringify({ error: 'No scenario found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Starting database queries...');

    // Query 1: binding_constraints_report
    console.log('Query 1: binding_constraints_report');
    const bindingConstraints = await prisma.$queryRaw`
      SELECT Date, Hour, constraintid, congestion 
      FROM binding_constraints_report 
      WHERE itemid = 66038 AND scenarioid = ${scenarioid}
    ` as any[];
    console.log('Binding constraints found:', bindingConstraints.length);

    // Query 2: transmission_constraint_characteristics  
    console.log('Query 2: transmission_constraint_characteristics');
    const constraintMapping = await prisma.$queryRaw`
      SELECT constraintid, constraintname, constrainttype 
      FROM transmission_constraint_characteristics 
      WHERE scenarioid = ${scenarioid}
    ` as any[];
    console.log('Constraint mappings found:', constraintMapping.length);

    // Query 3: results_constraints
    console.log('Query 3: results_constraints');
    const shadowPrices = await prisma.$queryRaw`
      SELECT Date, Hour, constraintid, shadowprice 
      FROM results_constraints 
      WHERE scenarioid = ${scenarioid}
    ` as any[];
    console.log('Shadow prices found:', shadowPrices.length);

    // Query 4: results_units
    console.log('Query 4: results_units');
    const resultsUnit = await prisma.$queryRaw`
      SELECT Date, Hour, congestion 
      FROM results_units 
      WHERE unitid = 66038 AND scenarioid = ${scenarioid}
    ` as any[];
    console.log('Results units found:', resultsUnit.length);

    if (bindingConstraints.length === 0) {
      console.log('No binding constraints data found for unitid 66038 and scenarioid', scenarioid);
      return new Response(JSON.stringify({ 
        scenarioid, 
        data: [],
        metadata: { constraintNames: [], constraintDetails: {} },
        debug: {
          bindingConstraints: 0,
          constraintMapping: constraintMapping.length,
          shadowPrices: shadowPrices.length,
          resultsUnit: resultsUnit.length
        }
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('Processing data...');

    // Create mapping objects for faster lookups
    const constraintMap = new Map();
    constraintMapping.forEach((constraint: any) => {
      constraintMap.set(constraint.constraintid, {
        constraintname: constraint.constraintname,
        constrainttype: constraint.constrainttype,
      });
    });

    const shadowPriceMap = new Map();
    shadowPrices.forEach((sp: any) => {
      const key = `${sp.Date.toISOString()}-${sp.Hour}-${sp.constraintid}`;
      shadowPriceMap.set(key, sp.shadowprice);
    });

    // First merge: Add constraint names to binding constraints
    const constraintsData = bindingConstraints.map((bc: any) => {
      const constraintInfo = constraintMap.get(bc.constraintid);
      const shadowPriceKey = `${bc.Date.toISOString()}-${bc.Hour}-${bc.constraintid}`;
      const shadowPrice = shadowPriceMap.get(shadowPriceKey) || 0;
      
      return {
        Date: bc.Date,
        Hour: bc.Hour,
        constraintid: bc.constraintid,
        congestion: bc.congestion || 0,
        constraintname: constraintInfo?.constraintname || `Constraint ${bc.constraintid}`,
        constrainttype: constraintInfo?.constrainttype || 'Unknown',
        shadowprice: shadowPrice,
        shiftFactor: shadowPrice !== 0 ? (bc.congestion || 0) / shadowPrice : 0,
        datetime: new Date(bc.Date.getTime() + (bc.Hour * 60 * 60 * 1000)).toISOString(),
      };
    });

    // Group by datetime and constraint name
    const datetimeMap = new Map();
    constraintsData.forEach((item: any) => {
      if (!datetimeMap.has(item.datetime)) {
        datetimeMap.set(item.datetime, {});
      }
      datetimeMap.get(item.datetime)[item.constraintname] = {
        congestion: item.congestion,
        shiftFactor: item.shiftFactor,
        shadowprice: item.shadowprice,
      };
    });

    // Get total congestion from results_units
    const totalCongestionMap = new Map();
    resultsUnit.forEach((ru: any) => {
      const datetime = new Date(ru.Date.getTime() + (ru.Hour * 60 * 60 * 1000)).toISOString();
      totalCongestionMap.set(datetime, ru.congestion || 0);
    });

    // Get unique constraint names
    const constraintNames = [...new Set(constraintsData.map((item: any) => item.constraintname))];
    console.log('Unique constraint names:', constraintNames);

    // Build final result array
    const resultData = Array.from(datetimeMap.keys())
      .sort()
      .map((datetime: string) => {
        const constraintData = datetimeMap.get(datetime);
        const totalCongestion = totalCongestionMap.get(datetime) || 0;
        
        const row: any = {
          datetime: datetime,
          'Total Congestion': totalCongestion,
        };

        let sumConstraints = 0;
        (constraintNames as string[]).forEach((constraintName: string) => {
          const congestionValue = constraintData[constraintName]?.congestion || 0;
          row[constraintName] = congestionValue;
          sumConstraints += congestionValue;
        });

        // Calculate "Other" category
        row['Other'] = Math.max(0, totalCongestion - sumConstraints);

        return row;
      });

    console.log('Final result data points:', resultData.length);

    // Add metadata for the chart
    const metadata = {
      constraintNames: constraintNames,
      constraintDetails: constraintsData.reduce((acc: any, item: any) => {
        if (!acc[item.constraintname]) {
          acc[item.constraintname] = {};
        }
        acc[item.constraintname][item.datetime] = {
          shiftFactor: item.shiftFactor,
          shadowprice: item.shadowprice,
        };
        return acc;
      }, {}),
    };

    console.log('=== API Success ===');
    return new Response(JSON.stringify({ 
      scenarioid, 
      data: resultData,
      metadata: metadata,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('=== Database error in congestion-plot API ===');
    console.error('Error details:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch congestion data from database',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}; 