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
      // Find the most recent scenarioid
      const latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
        orderBy: { scenarioid: 'desc' },
        select: { scenarioid: true },
      });
      scenarioid = latestScenario?.scenarioid || null;
    }
    
    if (!scenarioid) {
      return new Response(
        JSON.stringify({ error: 'No scenario found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const results = await prisma.results_units.findMany({
      where: {
        scenarioid: scenarioid,
        unitid: 66038,
      },
      orderBy: [{ Date: 'asc' }, { Hour: 'asc' }],
      select: {
        Date: true,
        Hour: true,
        energy: true,
        congestion: true,
        losses: true,
      },
    });

    const data = results.map((row: any) => {
      const date = new Date(row.Date);
      const hour = String(row.Hour).padStart(2, '0');
      return {
        datetime: `${date.toISOString().slice(0, 10)}T${hour}:00`,
        Energy: row.energy,
        Congestion: row.congestion,
        Loss: row.losses,
        LMP: row.energy + row.congestion + row.losses,
      };
    });

    return new Response(JSON.stringify(data), {
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