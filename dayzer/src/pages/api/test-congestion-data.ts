import type { APIRoute } from 'astro';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET: APIRoute = async ({ request }) => {
  try {
    console.log('=== Testing Congestion Data Availability ===');
    
    // Get latest scenarioid
    const latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
      orderBy: { scenarioid: 'desc' },
      select: { scenarioid: true },
    });
    const scenarioid = latestScenario?.scenarioid;
    
    console.log('Using scenarioid:', scenarioid);
    
    if (!scenarioid) {
      return new Response(JSON.stringify({ error: 'No scenario found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Test 1: Check if binding_constraints_report table exists and has any data
    const allBindingConstraints = await prisma.$queryRaw`
      SELECT COUNT(*) as total_count
      FROM binding_constraints_report 
      WHERE scenarioid = ${scenarioid}
    ` as any[];
    
    // Test 2: Check unique unitids in binding_constraints_report
    const uniqueUnits = await prisma.$queryRaw`
      SELECT DISTINCT itemid, COUNT(*) as count
      FROM binding_constraints_report 
      WHERE scenarioid = ${scenarioid}
      GROUP BY itemid
      ORDER BY count DESC
      LIMIT 10
    ` as any[];
    
    // Test 3: Check if unit 66038 exists in results_units
    const unit66038InResults = await prisma.$queryRaw`
      SELECT COUNT(*) as count
      FROM results_units 
      WHERE unitid = 66038 AND scenarioid = ${scenarioid}
    ` as any[];
    
    // Test 4: Check some data from results_units for any unit
    const sampleResultsUnits = await prisma.$queryRaw`
      SELECT DISTINCT unitid, COUNT(*) as count
      FROM results_units 
      WHERE scenarioid = ${scenarioid}
      GROUP BY unitid
      ORDER BY count DESC
      LIMIT 5
    ` as any[];

    const result = {
      scenarioid,
      tests: {
        totalBindingConstraints: allBindingConstraints[0]?.total_count || 0,
        uniqueUnitsInBindingConstraints: uniqueUnits,
        unit66038InResultsUnits: unit66038InResults[0]?.count || 0,
        sampleUnitsInResultsUnits: sampleResultsUnits,
      }
    };

    console.log('Test results:', result);

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