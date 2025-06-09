import type { APIRoute } from 'astro';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const requestedScenarioid = url.searchParams.get('scenarioid');
    
    let scenarioid: number | null = null;
    
    if (requestedScenarioid) {
      scenarioid = parseInt(requestedScenarioid, 10);
    } else {
      const latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
        orderBy: { scenarioid: 'desc' },
        select: { scenarioid: true },
      });
      scenarioid = latestScenario?.scenarioid || null;
    }
    
    if (!scenarioid) {
      return new Response(JSON.stringify({ error: 'No scenario found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Step 1: Check raw zone_demand data
    const demandCount = await prisma.zone_demand.count({
      where: { scenarioid }
    });

    const sampleDemandData = await prisma.zone_demand.findMany({
      where: { scenarioid },
      take: 5,
      select: {
        Date: true,
        Hour: true,
        demandmw: true,
        zoneid: true,
      },
    });

    // Step 2: Check zone mapping data
    const zoneMappingCount = await prisma.info_zoneid_zonename_mapping.count({
      where: { scenarioid }
    });

    const zoneMappings = await prisma.info_zoneid_zonename_mapping.findMany({
      where: { scenarioid },
      select: {
        zoneid: true,
        zonename: true,
      },
    });

    // Step 3: Check unique zones in demand data
    const uniqueZonesInDemand = await prisma.zone_demand.findMany({
      where: { scenarioid },
      select: { zoneid: true },
      distinct: ['zoneid'],
    });

    // Step 4: Check date range
    const dateRange = await prisma.zone_demand.aggregate({
      where: { scenarioid },
      _min: { Date: true },
      _max: { Date: true },
    });

    return new Response(JSON.stringify({
      scenarioid,
      debug: {
        demandRecordCount: demandCount,
        sampleDemandData,
        zoneMappingCount,
        zoneMappings,
        uniqueZonesInDemand: uniqueZonesInDemand.map((z: { zoneid: number }) => z.zoneid),
        dateRange: {
          min: dateRange._min.Date,
          max: dateRange._max.Date
        }
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Debug error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}; 