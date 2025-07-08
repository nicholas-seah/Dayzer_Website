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
    // Get all scenarios with "CAISO_WEEK" in the name
    const caisoWeekScenarios = await prisma.info_scenarioid_scenarioname_mapping.findMany({
      where: {
        scenarioname: {
          contains: 'CAISO_WEEK'
        }
      },
      select: {
        scenarioid: true,
        simulation_date: true,
        scenarioname: true,
      },
      orderBy: {
        scenarioid: 'desc' // Order by scenarioid desc as fallback
      }
    });

    console.log('=== DEBUG: All CAISO_WEEK scenarios ===');
    console.log('Total scenarios found:', caisoWeekScenarios.length);
    
    // Look for July 1st scenario specifically
    const july1Scenario = caisoWeekScenarios.find(s => s.scenarioname === 'CAISO_WEEK202507010500R');
    console.log('July 1st scenario found:', july1Scenario);
    
    // Show scenarios with null simulation_date
    const nullDateScenarios = caisoWeekScenarios.filter(s => !s.simulation_date);
    console.log('Scenarios with null simulation_date:', nullDateScenarios.length);
    if (nullDateScenarios.length > 0) {
      console.log('Null date scenarios:', nullDateScenarios.map(s => s.scenarioname));
    }

    // Filter out scenarios without simulation_date and format the response
    const availableScenarios = caisoWeekScenarios
      .filter(scenario => scenario.simulation_date)
      .map(scenario => ({
        scenarioid: scenario.scenarioid,
        simulation_date: scenario.simulation_date!,  // ! because we filtered out nulls above
        scenarioname: scenario.scenarioname,
      }))
      .sort((a, b) => {
        // Sort by simulation_date descending (most recent first)
        // We know these are not null because we filtered them out above
        const dateA = new Date(a.simulation_date as string);
        const dateB = new Date(b.simulation_date as string);
        return dateB.getTime() - dateA.getTime();
      });

    console.log('=== DEBUG: After filtering ===');
    console.log('Available scenarios after filtering:', availableScenarios.length);
    
    // Check if July 1st made it through filtering
    const july1Available = availableScenarios.find(s => s.scenarioname === 'CAISO_WEEK202507010500R');
    console.log('July 1st in available scenarios:', july1Available);

    // Find the most recent scenario as the default (first in sorted array)
    const defaultScenario = availableScenarios.length > 0 ? availableScenarios[0] : null;

    console.log('Available scenarios count:', availableScenarios.length);
    console.log('Default scenario selected:', defaultScenario);
    console.log('First 3 scenarios by date:', availableScenarios.slice(0, 3));

    return new Response(JSON.stringify({
      scenarios: availableScenarios,
      defaultScenario: defaultScenario,
      count: availableScenarios.length
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Available scenarios API error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch available scenarios',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}; 