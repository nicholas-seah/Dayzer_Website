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
    console.log('=== Debug LMP for 7/25 ===');
    
    // Get most recent scenario
    const latestScenarioResultRaw = await prisma.$queryRaw`
      SELECT scenarioid, scenarioname, simulation_date
      FROM "output_db"."info_scenarioid_scenarioname_mapping"
      ORDER BY scenarioid DESC
      LIMIT 1
    ` as any[];

    if (!latestScenarioResultRaw || latestScenarioResultRaw.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No scenarios found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Convert BigInt scenarioid
    const latestScenario = {
      ...latestScenarioResultRaw[0],
      scenarioid: Number(latestScenarioResultRaw[0].scenarioid)
    };
    console.log('Using scenario:', latestScenario);

    // First, let's see what dates are available in this scenario (more comprehensive)
    const availableDates = await prisma.$queryRaw`
      SELECT DISTINCT "Date", COUNT(*) as hour_count
      FROM "output_db"."results_units"
      WHERE scenarioid = ${latestScenario.scenarioid} AND unitid = 66038
      GROUP BY "Date"
      ORDER BY "Date" ASC
      LIMIT 20
    ` as any[];

    console.log('Available dates in current scenario:', availableDates);

    // Try different ways to query for 7/25 - UPDATE TO 2025!
    const targetDate = new Date('2025-07-25');
    const targetDateString = '2025-07-25';
    
    console.log('JavaScript Date object:', targetDate.toISOString());
    console.log('Target date string:', targetDateString);

    // Method 1: Using Date object (this probably won't work due to schema)
    const lmpResults1 = await prisma.results_units.findMany({
      where: {
        scenarioid: latestScenario.scenarioid,
        unitid: 66038,
        Date: targetDate,
      },
      select: {
        Date: true,
        Hour: true,
        energy: true,
        congestion: true,
        losses: true,
      },
      orderBy: [{ Hour: 'asc' }],
    });

    console.log(`Method 1 (Date object): Found ${lmpResults1.length} hours`);

    // Method 2: Using raw SQL with proper schema and date string
    const lmpResults2Raw = await prisma.$queryRaw`
      SELECT "Date", "Hour", energy, congestion, losses
      FROM "output_db"."results_units"
      WHERE scenarioid = ${latestScenario.scenarioid} 
        AND unitid = 66038 
        AND "Date" = ${targetDateString}::date
      ORDER BY "Hour" ASC
    ` as any[];

    // Convert BigInt values to numbers
    const lmpResults2 = lmpResults2Raw.map((row: any) => ({
      ...row,
      Hour: Number(row.Hour),
      energy: Number(row.energy || 0),
      congestion: Number(row.congestion || 0),
      losses: Number(row.losses || 0)
    }));

    console.log(`Method 2 (Raw SQL with schema): Found ${lmpResults2.length} hours`);

    // Method 3: Using date range for entire day with proper schema
    const startOfDay = new Date('2025-07-25T00:00:00.000Z');
    const endOfDay = new Date('2025-07-25T23:59:59.999Z');
    
    const lmpResults3 = await prisma.results_units.findMany({
      where: {
        scenarioid: latestScenario.scenarioid,
        unitid: 66038,
        Date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      select: {
        Date: true,
        Hour: true,
        energy: true,
        congestion: true,
        losses: true,
      },
      orderBy: [{ Hour: 'asc' }],
    });

    console.log(`Method 3 (Date range): Found ${lmpResults3.length} hours`);

    // Method 4: Show some raw data around 7/25 to see what's there (with schema) - UPDATE TO 2025!
    const rawSampleRaw = await prisma.$queryRaw`
      SELECT "Date", "Hour", energy, congestion, losses
      FROM "output_db"."results_units"
      WHERE scenarioid = ${latestScenario.scenarioid} 
        AND unitid = 66038 
        AND "Date" >= '2025-07-24'::date 
        AND "Date" <= '2025-07-26'::date
      ORDER BY "Date", "Hour" ASC
      LIMIT 10
    ` as any[];

    // Convert BigInt values to numbers for raw sample
    const rawSample = rawSampleRaw.map((row: any) => ({
      ...row,
      Hour: Number(row.Hour),
      energy: Number(row.energy || 0),
      congestion: Number(row.congestion || 0),
      losses: Number(row.losses || 0)
    }));

    console.log('Raw sample data around 7/25/2025:', rawSample);

    // Convert BigInt values in availableDates as well
    const availableDatesConverted = availableDates.map((row: any) => ({
      Date: row.Date,
      hour_count: Number(row.hour_count)
    }));

    // Use whichever method found data
    let actualData = lmpResults2.length > 0 ? lmpResults2 : 
                    lmpResults1.length > 0 ? lmpResults1 : 
                    lmpResults3.length > 0 ? lmpResults3 : [];

    const result: any = {
      debugInfo: {
        scenarioId: latestScenario.scenarioid,
        scenarioName: latestScenario.scenarioname,
        targetJSDate: targetDate.toISOString(),
        targetDateString: targetDateString,
        note: "Updated to search for 2025-07-25 since scenario contains 2025 data",
        availableDates: availableDatesConverted.slice(0, 10),
        rawSampleData: rawSample,
        queryResults: {
          method1_dateObject: lmpResults1.length,
          method2_rawSQL: lmpResults2.length, 
          method3_dateRange: lmpResults3.length
        }
      }
    };

    if (actualData.length === 0) {
      return new Response(JSON.stringify(result, null, 2), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Process and sort the data
    const processedData = actualData.map(row => ({
      hour: row.Hour,
      energy: row.energy || 0,
      congestion: row.congestion || 0,
      losses: row.losses || 0,
      lmp: (row.energy || 0) + (row.congestion || 0) + (row.losses || 0)
    }));

    // Sort by LMP (descending)
    const sortedByLMP = [...processedData].sort((a, b) => b.lmp - a.lmp);

    result.data = {
      date: '2025-07-25',
      totalHours: processedData.length,
      hoursChronological: processedData,
      hoursByLMP: sortedByLMP,
      topHours: {
        highest: { hour: sortedByLMP[0]?.hour, lmp: sortedByLMP[0]?.lmp },
        secondHighest: { hour: sortedByLMP[1]?.hour, lmp: sortedByLMP[1]?.lmp }
      },
      bottomHours: {
        secondLowest: { hour: sortedByLMP[22]?.hour, lmp: sortedByLMP[22]?.lmp },
        lowest: { hour: sortedByLMP[23]?.hour, lmp: sortedByLMP[23]?.lmp }
      }
    };

    console.log('Successfully found data!');
    console.log('Top 2 hours:', result.data.topHours);
    console.log('Bottom 2 hours:', result.data.bottomHours);

    return new Response(JSON.stringify(result, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Debug LMP error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to debug LMP data', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}; 