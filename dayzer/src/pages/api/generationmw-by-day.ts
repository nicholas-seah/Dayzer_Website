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

    // Query the zone_demand table for the latest scenarioid
    const zoneDemandData = await prisma.zone_demand.findMany({
      where: { scenarioid },
      select: { Date: true, demandmw: true },
    });

    // Calculate daily averages of demandmw
    const dailyAverages = zoneDemandData.reduce((acc: Record<string, { sum: number; count: number }>, curr: { Date: Date; demandmw: number | null }) => {
      const date = curr.Date.toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = { sum: 0, count: 0 };
      }
      acc[date].sum += curr.demandmw || 0;
      acc[date].count += 1;
      return acc;
    }, {});

    const result = Object.entries(dailyAverages).map(([date, { sum, count }]) => ({
      date,
      demandmw: count > 0 ? sum / count : 0,
    }));

    return new Response(JSON.stringify({ scenarioid, data: result }), {
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