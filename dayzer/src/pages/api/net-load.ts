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
    // Get parameters from query
    const url = new URL(request.url);
    const requestedScenarioid = url.searchParams.get('scenarioid');
    
    let scenarioid: number | null = null;
    
    if (requestedScenarioid) {
      scenarioid = parseInt(requestedScenarioid, 10);
    } else {
      // Find the most recent scenarioid with "CAISO_WEEK" in the name
      let latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
        where: {
          scenarioname: {
            contains: 'CAISO_WEEK'
          }
        },
        orderBy: { scenarioid: 'desc' },
        select: { scenarioid: true },
      });
      
      // If no CAISO_WEEK scenario found, fall back to most recent overall
      if (!latestScenario) {
        latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
          orderBy: { scenarioid: 'desc' },
          select: { scenarioid: true },
        });
      }
      
      scenarioid = latestScenario?.scenarioid || null;
    }
    
    if (!scenarioid) {
      return new Response(
        JSON.stringify({ scenarioid: null, data: [] }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Get total demand from zone_demand table
    const demandResults = await prisma.zone_demand.findMany({
      where: {
        scenarioid,
      },
      orderBy: [
        { Date: 'asc' },
        { Hour: 'asc' }
      ],
      select: {
        Date: true,
        Hour: true,
        demandmw: true,
      },
    });

    console.log('Raw zone_demand count:', demandResults.length);

    // Aggregate total demand by datetime
    const demandByDatetime: { [key: string]: number } = {};
    demandResults.forEach((row: { Date: Date; Hour: number; demandmw: number | null }) => {
      const datetime = new Date(row.Date);
      datetime.setHours(row.Hour, 0, 0, 0);
      const datetimeKey = datetime.toISOString();
      
      if (!demandByDatetime[datetimeKey]) {
        demandByDatetime[datetimeKey] = 0;
      }
      
      demandByDatetime[datetimeKey] += (row.demandmw || 0) / 1000; // Convert MW to GW
    });

    // Get renewable generation from results_units table (solar and wind)
    const renewableResults = await prisma.results_units.findMany({
      where: {
        scenarioid,
        OR: [
          { fuelname: 'sun' },
          { fuelname: 'Sun' },
          { fuelname: 'wind' },
          { fuelname: 'Wind' }
        ]
      },
      orderBy: [
        { Date: 'asc' },
        { Hour: 'asc' }
      ],
      select: {
        Date: true,
        Hour: true,
        fuelname: true,
        generationmw: true,
      },
    });

    console.log('Raw renewable results count:', renewableResults.length);

    // Aggregate renewable generation by datetime
    const renewableByDatetime: { [key: string]: number } = {};
    renewableResults.forEach((row: { Date: Date; Hour: number; fuelname: string | null; generationmw: number | null }) => {
      const datetime = new Date(row.Date);
      datetime.setHours(row.Hour, 0, 0, 0);
      const datetimeKey = datetime.toISOString();
      
      if (!renewableByDatetime[datetimeKey]) {
        renewableByDatetime[datetimeKey] = 0;
      }
      
      renewableByDatetime[datetimeKey] += (row.generationmw || 0) / 1000; // Convert MW to GW
    });

    // Combine demand and renewable data to calculate net load
    const processedData = Object.keys(demandByDatetime)
      .map(datetime => {
        const totalDemand = demandByDatetime[datetime];
        const renewableGeneration = renewableByDatetime[datetime] || 0;
        const netLoad = totalDemand - renewableGeneration;
        
        return {
          datetime,
          totalDemand,
          renewableGeneration,
          netLoad,
        };
      })
      .sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime());

    console.log('Processed net load data count:', processedData.length);
    console.log('First 3 processed records:', processedData.slice(0, 3));

    return new Response(JSON.stringify({ 
      scenarioid, 
      data: processedData 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch data from database' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}; 