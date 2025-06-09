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
    const requestedZoneid = url.searchParams.get('zoneid');
    
    let scenarioid: number | null = null;
    
    if (requestedScenarioid) {
      scenarioid = parseInt(requestedScenarioid, 10);
    } else {
      // Find the most recent scenarioid
      const latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
        orderBy: { scenarioid: 'desc' },
        select: { scenarioid: true },
      });
      scenarioid = latestScenario?.scenarioid || null;
    }
    
    if (!scenarioid) {
      return new Response(
        JSON.stringify({ scenarioid: null, data: [], zones: [] }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Get zone name mappings for this scenario
    const zoneNameMappings = await prisma.info_zoneid_zonename_mapping.findMany({
      where: {
        scenarioid,
      },
      select: {
        zoneid: true,
        zonename: true,
      },
    });

    // Create a map from zoneid to zonename
    const zoneIdToName = new Map(
      zoneNameMappings.map((mapping: { zoneid: number; zonename: string }) => [mapping.zoneid, mapping.zonename])
    );

    // Build the query conditions
    const whereConditions: any = {
      scenarioid,
    };
    
    // If a specific zone is requested, filter by it
    if (requestedZoneid) {
      whereConditions.zoneid = parseInt(requestedZoneid, 10);
    }

    const results = await prisma.results_zones.findMany({
      where: whereConditions,
      orderBy: [
        { Date: 'asc' },
        { Hour: 'asc' },
        { zoneid: 'asc' }
      ],
      select: {
        Date: true,
        Hour: true,
        zoneid: true,
        energy: true,
        congestion: true,
        losses: true,
      },
    });

    console.log('Raw results_zones count:', results.length);
    console.log('First 3 results_zones records:', results.slice(0, 3));

    // If no specific zone requested, return zones list
    if (!requestedZoneid) {
      const uniqueZoneIds = Array.from(new Set(results.map((r: { zoneid: number }) => r.zoneid)));
      
      // Filter to only include the specific zones requested
      const allowedZoneNames = [
        "Pacific Gas & Electric",
        "San Diego Gas & Electric", 
        "Southern CA Edison",
        "Valley Electric Association"
      ];
      
      const zones = uniqueZoneIds
        .map((zoneid) => ({
          id: zoneid,
          name: (zoneIdToName.get(zoneid) || `Zone_${zoneid}`) as string
        }))
        .filter((zone) => allowedZoneNames.includes(zone.name))
        .sort((a, b) => a.name.localeCompare(b.name));

      return new Response(JSON.stringify({ 
        scenarioid, 
        zones,
        data: [] // Empty data when no zone is selected
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Process data for the selected zone
    const processedData = results.map((row: { Date: Date; Hour: number; zoneid: number; energy: number | null; congestion: number | null; losses: number | null }) => {
      // Create a datetime by combining date and hour
      const datetime = new Date(row.Date);
      datetime.setHours(row.Hour, 0, 0, 0);
      
      const energy = row.energy || 0;
      const congestion = row.congestion || 0;
      const losses = row.losses || 0;
      const totalLMP = energy + congestion + losses;
      
      return {
        datetime: datetime.toISOString(),
        zoneid: row.zoneid,
        zonename: zoneIdToName.get(row.zoneid) || `Zone_${row.zoneid}`,
        energy,
        congestion,
        losses,
        totalLMP,
      };
    });

    return new Response(JSON.stringify({ 
      scenarioid, 
      data: processedData,
      zones: [] // Empty zones array when returning specific zone data
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