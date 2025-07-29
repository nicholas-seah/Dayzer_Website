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

interface MarginalUnitData {
  unitid: number;
  unitname: string;
  unittype: string;
  hour: number;
  energyCost: number;
}

interface MECData {
  date: string;
  topHoursMEC: number;
  bottomHoursMEC: number;
  topHoursUnit: string;
  bottomHoursUnit: string;
  isLastWeek: boolean;
  topHoursDetails: MarginalUnitData[];
  bottomHoursDetails: MarginalUnitData[];
  topHours: number[];
  bottomHours: number[];
}

interface MECResponse {
  scenarioId: number;
  data: MECData[];
  dateRanges: {
    lastWeek: string;
    thisWeek: string;
  };
}

export const GET: APIRoute = async ({ request }) => {
  try {
    console.log('=== MCE Overview API ===');
    
    // Get most recent scenario (same logic as other APIs)
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

    // Define date ranges using same logic as weekly congestion
    const today = new Date();
    
    // This Week: Today through Today + 6 days (7 day span forward)
    const thisWeekStart = new Date(today);
    thisWeekStart.setHours(0, 0, 0, 0);
    const thisWeekEnd = new Date(today);
    thisWeekEnd.setDate(today.getDate() + 6);
    thisWeekEnd.setHours(23, 59, 59, 999);
    
    // Last Week: (Today - 7) through yesterday (7 day span backward)
    const lastWeekStart = new Date(today);
    lastWeekStart.setDate(today.getDate() - 7);
    lastWeekStart.setHours(0, 0, 0, 0);
    const lastWeekEnd = new Date(today);
    lastWeekEnd.setDate(today.getDate() - 1);
    lastWeekEnd.setHours(23, 59, 59, 999);

    console.log('This week:', thisWeekStart.toISOString(), 'to', thisWeekEnd.toISOString());
    console.log('Last week:', lastWeekStart.toISOString(), 'to', lastWeekEnd.toISOString());

    // Calculate This Week MCE data
    const thisWeekResults = await calculateWeeklyMEC(
      scenario.scenarioid, 
      thisWeekStart, 
      thisWeekEnd,
      false // isLastWeek = false
    );

    // Calculate Last Week MCE data
    const lastWeekResults = await calculateWeeklyMEC(
      scenario.scenarioid, 
      lastWeekStart, 
      lastWeekEnd,
      true // isLastWeek = true
    );

    const allData = [...lastWeekResults, ...thisWeekResults];

    const result: MECResponse = {
      scenarioId: scenario.scenarioid,
      data: allData,
      dateRanges: {
        thisWeek: `${thisWeekStart.toISOString().split('T')[0]} to ${thisWeekEnd.toISOString().split('T')[0]}`,
        lastWeek: `${lastWeekStart.toISOString().split('T')[0]} to ${lastWeekEnd.toISOString().split('T')[0]}`
      }
    };

    console.log('MCE calculation completed');

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('MCE calculation error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to calculate MCE overview', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

async function calculateWeeklyMEC(
  scenarioId: number, 
  startDate: Date, 
  endDate: Date,
  isLastWeek: boolean
): Promise<MECData[]> {
  
  console.log('Calculating weekly MCE for scenario:', scenarioId);
  
  // Step 1: Fetch LMP data from results_units (unitid = 66038) - same as weekly congestion
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

  // Step 3: For each day, identify top/bottom hours and get marginal unit data
  const results: MECData[] = [];

  for (const [dateString, dailyLmpData] of Object.entries(lmpDataByDate)) {
    if (dailyLmpData.length !== 24) {
      console.warn(`Incomplete data for ${dateString}: ${dailyLmpData.length} hours`);
      continue;
    }

    // Sort by LMP to find top 2 and bottom 2 hours (same as weekly congestion)
    const sortedByLMP = [...dailyLmpData].sort((a, b) => b.lmp - a.lmp);
    const topHours = [sortedByLMP[0].Hour, sortedByLMP[1].Hour]; // Highest LMP
    const bottomHours = [sortedByLMP[22].Hour, sortedByLMP[23].Hour]; // Lowest LMP

    console.log(`${dateString}: Top hours: ${topHours}, Bottom hours: ${bottomHours}`);

    // Step 4: Get marginal unit data for these specific hours
    const targetDate = new Date(dateString);
    const allTargetHours = [...topHours, ...bottomHours];

    // Query marginal_units_report with margintype = 'm'
    const marginalUnitsRaw = await prisma.$queryRaw`
      SELECT mur.unitid, mur.unitname, mur."Date", mur."Hour"
      FROM "output_db"."marginal_units_report" mur
      WHERE mur.scenarioid = ${scenarioId}
        AND mur."Date" = ${targetDate}
        AND mur."Hour" = ANY(${allTargetHours})
        AND mur.margintype = 'm'
    ` as any[];

    // Convert BigInt values
    const marginalUnits = marginalUnitsRaw.map((row: any) => ({
      unitid: Number(row.unitid),
      unitname: row.unitname,
      date: new Date(row.Date),
      hour: Number(row.Hour)
    }));

    if (marginalUnits.length === 0) {
      console.warn(`No marginal units found for ${dateString}`);
      continue;
    }

    // Step 5: Get energy costs from results_units
    const unitIds = [...new Set(marginalUnits.map(u => u.unitid))];
    const energyCostsRaw = await prisma.$queryRaw`
      SELECT unitid, "Date", "Hour", energy
      FROM "output_db"."results_units"
      WHERE scenarioid = ${scenarioId}
        AND unitid = ANY(${unitIds})
        AND "Date" = ${targetDate}
        AND "Hour" = ANY(${allTargetHours})
    ` as any[];

    // Convert BigInt values
    const energyCosts = energyCostsRaw.map((row: any) => ({
      unitid: Number(row.unitid),
      Date: new Date(row.Date),
      Hour: Number(row.Hour),
      energy: Number(row.energy || 0)
    }));

    // Step 6: Get unit types from generation_unit_characteristics
    const unitCharacteristicsRaw = await prisma.$queryRaw`
      SELECT unitid, unittype
      FROM "output_db"."generation_unit_characteristics"
      WHERE scenarioid = ${scenarioId}
        AND unitid = ANY(${unitIds})
    ` as any[];

    // Convert BigInt values
    const unitCharacteristics = unitCharacteristicsRaw.map((row: any) => ({
      unitid: Number(row.unitid),
      unittype: row.unittype
    }));

    // Create lookup maps
    const energyCostMap = new Map();
    energyCosts.forEach(cost => {
      const key = `${cost.unitid}-${cost.Hour}`;
      energyCostMap.set(key, cost.energy);
    });

    const unitTypeMap = new Map();
    unitCharacteristics.forEach(char => {
      unitTypeMap.set(char.unitid, char.unittype);
    });

    // Step 7: Build marginal unit data with energy costs and unit types
    const marginalUnitsWithCosts: MarginalUnitData[] = marginalUnits.map(unit => {
      const costKey = `${unit.unitid}-${unit.hour}`;
      const energyCost = energyCostMap.get(costKey) || 0;
      const unitType = unitTypeMap.get(unit.unitid) || 'Unknown';

      return {
        unitid: unit.unitid,
        unitname: unit.unitname,
        unittype: unitType,
        hour: unit.hour,
        energyCost: energyCost
      };
    });

    // Step 8: Find max energy costs for top and bottom hours
    const topHoursUnits = marginalUnitsWithCosts.filter(u => topHours.includes(u.hour));
    const bottomHoursUnits = marginalUnitsWithCosts.filter(u => bottomHours.includes(u.hour));

    // Find maximum energy cost for top hours
    const topMaxCost = topHoursUnits.length > 0 ? Math.max(...topHoursUnits.map(u => u.energyCost)) : 0;
    const topMaxUnit = topHoursUnits.find(u => u.energyCost === topMaxCost);
    const topHoursWithMaxCost = topHoursUnits.filter(u => u.energyCost === topMaxCost);

    // Find maximum energy cost for bottom hours
    const bottomMaxCost = bottomHoursUnits.length > 0 ? Math.max(...bottomHoursUnits.map(u => u.energyCost)) : 0;
    const bottomMaxUnit = bottomHoursUnits.find(u => u.energyCost === bottomMaxCost);
    const bottomHoursWithMaxCost = bottomHoursUnits.filter(u => u.energyCost === bottomMaxCost);

    // Step 9: Add to results
    results.push({
      date: dateString,
      topHoursMEC: topMaxCost,
      bottomHoursMEC: bottomMaxCost,
      topHoursUnit: topMaxUnit?.unittype || 'Unknown',
      bottomHoursUnit: bottomMaxUnit?.unittype || 'Unknown',
      isLastWeek: isLastWeek,
      topHoursDetails: topHoursWithMaxCost,
      bottomHoursDetails: bottomHoursWithMaxCost,
      topHours: topHours,
      bottomHours: bottomHours
    });

    console.log(`${dateString}: Top MEC = $${topMaxCost}, Bottom MEC = $${bottomMaxCost}`);
  }

  console.log(`Processed ${results.length} days of MCE data`);
  return results;
} 