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

interface HourlyLMPData {
  Date: Date;
  Hour: number;
  lmp: number;
}

interface CongestionData {
  Date: Date;
  Hour: number;
  constraintid: number;
  congestion: number;
  constraintname: string;
}

interface DayCongestionResult {
  date: string;
  topHours: {
    hours: number[];
    constraintName: string;
    avgCongestion: number;
  };
  bottomHours: {
    hours: number[];
    constraintName: string;
    avgCongestion: number;
  };
}

interface WeeklyCongestionResponse {
  scenarioId: number;
  thisWeek: DayCongestionResult[];
  lastWeek: DayCongestionResult[]; // Future implementation
  dateRanges: {
    thisWeek: string;
    lastWeek: string;
  };
}

export const GET: APIRoute = async ({ request }) => {
  try {
    console.log('=== Weekly Congestion API ===');
    
    // Get most recent scenario (same logic as TB2.6)
    const latestScenarioRaw = await prisma.$queryRaw`
      SELECT scenarioid, scenarioname, simulation_date
      FROM "output_db"."info_scenarioid_scenarioname_mapping"
      ORDER BY scenarioid DESC
      LIMIT 1
    ` as any[];

    if (!latestScenarioRaw || latestScenarioRaw.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No scenarios found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Convert BigInt scenarioid
    const scenario = {
      ...latestScenarioRaw[0],
      scenarioid: Number(latestScenarioRaw[0].scenarioid)
    };
    console.log('Using scenario:', scenario);

    // Define date ranges using TB2.6 logic (dynamic based on today)
    const today = new Date();
    
    // This Week: Today through Today + 6 days (7 day span forward)
    const thisWeekStart = new Date(today);
    thisWeekStart.setHours(0, 0, 0, 0); // Start of day
    const thisWeekEnd = new Date(today);
    thisWeekEnd.setDate(today.getDate() + 6); // Today + 6 days
    thisWeekEnd.setHours(23, 59, 59, 999); // End of day
    
    // Last Week: (Today - 7) through yesterday (7 day span backward)
    const lastWeekStart = new Date(today);
    lastWeekStart.setDate(today.getDate() - 7);
    lastWeekStart.setHours(0, 0, 0, 0); // Start of day
    const lastWeekEnd = new Date(today);
    lastWeekEnd.setDate(today.getDate() - 1); // Yesterday
    lastWeekEnd.setHours(23, 59, 59, 999); // End of yesterday

    console.log('This week (dynamic):', thisWeekStart.toISOString(), 'to', thisWeekEnd.toISOString());
    console.log('Last week (dynamic):', lastWeekStart.toISOString(), 'to', lastWeekEnd.toISOString());

    // Calculate This Week congestion data
    const thisWeekResults = await calculateWeeklyCongestion(
      scenario.scenarioid, 
      thisWeekStart, 
      thisWeekEnd
    );

    // Calculate Last Week congestion data (now enabled with dynamic dates)
    const lastWeekResults = await calculateWeeklyCongestion(
      scenario.scenarioid, 
      lastWeekStart, 
      lastWeekEnd
    );

    const result = {
      scenarioId: scenario.scenarioid,
      thisWeek: thisWeekResults,
      lastWeek: lastWeekResults,
      dateRanges: {
        thisWeek: `${thisWeekStart.toISOString().split('T')[0]} to ${thisWeekEnd.toISOString().split('T')[0]}`,
        lastWeek: `${lastWeekStart.toISOString().split('T')[0]} to ${lastWeekEnd.toISOString().split('T')[0]}`
      }
    };

    console.log('Weekly congestion calculation completed');

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Weekly congestion calculation error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to calculate weekly congestion', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

async function calculateWeeklyCongestion(
  scenarioId: number, 
  startDate: Date, 
  endDate: Date
): Promise<DayCongestionResult[]> {
  
  console.log('Calculating weekly congestion for scenario:', scenarioId);
  
  // Step 1: Fetch LMP data from results_units (unitid = 66038)
  const lmpResultsRaw = await prisma.$queryRaw`
    SELECT "Date", "Hour", lmp
    FROM "output_db"."results_units"
    WHERE scenarioid = ${scenarioId}
      AND unitid = 66038
      AND "Date" >= ${startDate}
      AND "Date" <= ${endDate}
    ORDER BY "Date" ASC, "Hour" ASC
  ` as any[];

  // Convert BigInt values to numbers
  const lmpResults = lmpResultsRaw.map((row: any) => ({
    ...row,
    Hour: Number(row.Hour),
    lmp: Number(row.lmp || 0)
  }));

  console.log('LMP data count:', lmpResults.length);

  if (lmpResults.length === 0) {
    return [];
  }

  // Step 2: Process LMP data and group by day
  const lmpDataByDate: { [dateString: string]: HourlyLMPData[] } = {};
  
  lmpResults.forEach((row: any) => {
    const dateKey = new Date(row.Date).toISOString().split('T')[0];
    
    if (!lmpDataByDate[dateKey]) {
      lmpDataByDate[dateKey] = [];
    }
    
    lmpDataByDate[dateKey].push({
      Date: new Date(row.Date),
      Hour: row.Hour,
      lmp: row.lmp
    });
  });

  console.log('LMP data grouped by date:', Object.keys(lmpDataByDate).map(date => `${date}: ${lmpDataByDate[date].length} hours`));

  // Step 3: Fetch constraint mapping for names
  const constraintMappingRaw = await prisma.$queryRaw`
    SELECT constraintid, constraintname 
    FROM "output_db"."transmission_constraint_characteristics"
    WHERE scenarioid = ${scenarioId}
  ` as any[];

  // Convert BigInt constraintid
  const constraintMapping = constraintMappingRaw.map((row: any) => ({
    constraintid: Number(row.constraintid),
    constraintname: row.constraintname
  }));

  const constraintNameMap = new Map();
  constraintMapping.forEach((item: any) => {
    constraintNameMap.set(item.constraintid, item.constraintname);
  });

  // Step 4: For each day, identify hours and find most impactful constraints
  const results: DayCongestionResult[] = [];

  for (const [dateString, dailyLmpData] of Object.entries(lmpDataByDate)) {
    if (dailyLmpData.length !== 24) {
      console.warn(`Incomplete data for ${dateString}: ${dailyLmpData.length} hours`);
      continue;
    }

    // Sort by LMP to find top 2 and bottom 2 hours
    const sortedByLMP = [...dailyLmpData].sort((a, b) => b.lmp - a.lmp);
    const topHours = [sortedByLMP[0].Hour, sortedByLMP[1].Hour]; // Highest LMP
    const bottomHours = [sortedByLMP[22].Hour, sortedByLMP[23].Hour]; // Lowest LMP

    console.log(`${dateString}: Detailed LMP breakdown:`);
    console.log(`  All 24 hours sorted by LMP (descending):`);
    sortedByLMP.forEach((hour, index) => {
      const position = index === 0 ? ' (HIGHEST)' : 
                     index === 1 ? ' (2ND HIGHEST)' : 
                     index === 22 ? ' (2ND LOWEST)' : 
                     index === 23 ? ' (LOWEST)' : '';
      console.log(`    Hour ${hour.Hour}: LMP=$${hour.lmp.toFixed(2)}${position}`);
    });
    console.log(`  → Top hours (highest LMP): ${topHours}`);
    console.log(`  → Bottom hours (lowest LMP): ${bottomHours}`);

    // Step 5: Get congestion data for these specific hours
    const targetDate = new Date(dateString);
    const allTargetHours = [...topHours, ...bottomHours];

    const congestionDataRaw = await prisma.$queryRaw`
      SELECT "Date", "Hour", constraintid, congestion 
      FROM "output_db"."binding_constraints_report"
      WHERE itemid = 66038 
        AND scenarioid = ${scenarioId}
        AND "Date" = ${targetDate}
        AND "Hour" = ANY(${allTargetHours})
    ` as any[];

    // Convert BigInt values to numbers
    const congestionData = congestionDataRaw.map((row: any) => ({
      Date: new Date(row.Date),
      Hour: Number(row.Hour),
      constraintid: Number(row.constraintid),
      congestion: Number(row.congestion || 0)
    }));

    // Process congestion data with constraint names
    const processedCongestionData: CongestionData[] = congestionData.map((item: any) => ({
      Date: item.Date,
      Hour: item.Hour,
      constraintid: item.constraintid,
      congestion: item.congestion,
      constraintname: constraintNameMap.get(item.constraintid) || `Constraint ${item.constraintid}`
    }));

    // Step 6: Calculate constraint averages for top hours
    const topHoursCongestion = processedCongestionData.filter(item => 
      topHours.includes(item.Hour)
    );
    const topConstraintAvgs = calculateConstraintAverages(topHoursCongestion);
    const topMostImpactful = findMostImpactfulConstraint(topConstraintAvgs);

    // Step 7: Calculate constraint averages for bottom hours  
    const bottomHoursCongestion = processedCongestionData.filter(item => 
      bottomHours.includes(item.Hour)
    );
    const bottomConstraintAvgs = calculateConstraintAverages(bottomHoursCongestion);
    const bottomMostImpactful = findMostImpactfulConstraint(bottomConstraintAvgs);

    // Step 8: Add to results
    results.push({
      date: dateString,
      topHours: {
        hours: topHours.sort(),
        constraintName: topMostImpactful.name,
        avgCongestion: topMostImpactful.avgCongestion
      },
      bottomHours: {
        hours: bottomHours.sort(),
        constraintName: bottomMostImpactful.name,
        avgCongestion: bottomMostImpactful.avgCongestion
      }
    });
  }

  console.log(`Processed ${results.length} days of congestion data`);
  return results;
}

function calculateConstraintAverages(congestionData: CongestionData[]): Map<string, { sum: number, count: number, avg: number }> {
  const constraintStats = new Map();

  congestionData.forEach(item => {
    const name = item.constraintname;
    if (!constraintStats.has(name)) {
      constraintStats.set(name, { sum: 0, count: 0, avg: 0 });
    }
    
    const stats = constraintStats.get(name);
    stats.sum += item.congestion;
    stats.count += 1;
    stats.avg = stats.sum / stats.count;
  });

  return constraintStats;
}

function findMostImpactfulConstraint(constraintAvgs: Map<string, { avg: number }>): { name: string, avgCongestion: number } {
  let mostImpactful = { name: 'No constraints', avgCongestion: 0 };
  let maxAbsValue = 0;

  constraintAvgs.forEach((stats, name) => {
    const absValue = Math.abs(stats.avg);
    if (absValue > maxAbsValue) {
      maxAbsValue = absValue;
      mostImpactful = {
        name: name,
        avgCongestion: stats.avg // Return actual value, not absolute
      };
    }
  });

  return mostImpactful;
} 