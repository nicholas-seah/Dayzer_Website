import type { APIRoute } from 'astro';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET: APIRoute = async ({ request }) => {
  try {
    console.log('=== Testing Unit 66038 Data ===');
    
    // Find the most recent scenarioid with "CAISO_WEEK" in the name
    let latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
      where: {
        scenarioname: {
          contains: 'CAISO_WEEK'
        }
      },
      orderBy: { scenarioid: 'desc' },
      select: { 
        scenarioid: true,
        simulation_date: true 
      },
    });
    
    // If no CAISO_WEEK scenario found, fall back to most recent overall
    if (!latestScenario) {
      latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
        orderBy: { scenarioid: 'desc' },
        select: { 
          scenarioid: true,
          simulation_date: true 
        },
      });
    }
    
    const scenarioid = latestScenario?.scenarioid;
    const simulation_date = latestScenario?.simulation_date;
    
    console.log('Using scenarioid:', scenarioid);
    
    if (!scenarioid) {
      return new Response(JSON.stringify({ error: 'No scenario found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Test 1: Check if unit 66038 exists in binding_constraints_report
    const unit66038InBinding = await prisma.$queryRaw`
      SELECT COUNT(*)::int as count
      FROM binding_constraints_report 
      WHERE itemid = 66038 AND scenarioid = ${scenarioid}
    ` as any[];
    
    // Test 2: Check if unit 66038 exists in results_units
    const unit66038InResults = await prisma.$queryRaw`
      SELECT COUNT(*)::int as count
      FROM results_units 
      WHERE unitid = 66038 AND scenarioid = ${scenarioid}
    ` as any[];
    
    // Test 3: Sample some data from binding_constraints_report for unit 66038
    const sampleBindingData = await prisma.$queryRaw`
      SELECT "Date", "Hour", constraintid, congestion 
      FROM binding_constraints_report 
      WHERE itemid = 66038 AND scenarioid = ${scenarioid}
      ORDER BY "Date", "Hour"
      LIMIT 5
    ` as any[];

    // Test 4: Sample some data from results_units for unit 66038
    const sampleResultsData = await prisma.$queryRaw`
      SELECT "Date", "Hour", energy, congestion, losses 
      FROM results_units 
      WHERE unitid = 66038 AND scenarioid = ${scenarioid}
      ORDER BY "Date", "Hour"
      LIMIT 5
    ` as any[];

    const result = {
      scenarioid,
      simulation_date,
      unit66038: {
        bindingConstraintsCount: unit66038InBinding[0]?.count || 0,
        resultsUnitsCount: unit66038InResults[0]?.count || 0,
        sampleBindingData: sampleBindingData,
        sampleResultsData: sampleResultsData,
      }
    };

    console.log('Unit 66038 test results:', result);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Test endpoint error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Database test failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}; 