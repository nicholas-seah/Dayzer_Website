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

export const GET: APIRoute = async () => {
  try {
    // Find the most recent scenarioid
    const latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
      orderBy: { scenarioid: 'desc' },
      select: { scenarioid: true },
    });
    const scenarioid = latestScenario?.scenarioid;
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
      select: { Date: true, generationmw: true },
    });

    // Calculate daily averages of generationmw
    const dailyAverages = zoneDemandData.reduce((acc: Record<string, { sum: number; count: number }>, curr: { Date: Date; generationmw: number | null }) => {
      const date = curr.Date.toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = { sum: 0, count: 0 };
      }
      acc[date].sum += curr.generationmw || 0;
      acc[date].count += 1;
      return acc;
    }, {});

    const result = (Object.entries(dailyAverages) as [string, { sum: number; count: number }][]).map(([date, { sum, count }]) => ({
      date,
      generationmw: count > 0 ? sum / count : 0,
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