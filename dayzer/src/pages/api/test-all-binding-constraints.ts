import type { APIRoute } from 'astro';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET: APIRoute = async ({ request }) => {
  try {
    console.log('=== Testing All Binding Constraints Data ===');
    
    // Test 1: Check if binding_constraints_report has ANY data at all
    const totalBindingConstraints = await prisma.$queryRaw`
      SELECT COUNT(*)::int as total_count
      FROM binding_constraints_report
    ` as any[];
    
    // Test 2: Check which scenarioids have binding constraint data
    const scenariosWithBindingConstraints = await prisma.$queryRaw`
      SELECT scenarioid, COUNT(*)::int as count
      FROM binding_constraints_report
      GROUP BY scenarioid
      ORDER BY count DESC
      LIMIT 5
    ` as any[];
    
    // Test 3: Check which units have binding constraint data
    const unitsWithBindingConstraints = await prisma.$queryRaw`
      SELECT itemid, COUNT(*)::int as count
      FROM binding_constraints_report
      GROUP BY itemid
      ORDER BY count DESC
      LIMIT 10
    ` as any[];
    
    // Test 4: Get available scenarioids from info table
    const availableScenarios = await prisma.info_scenarioid_scenarioname_mapping.findMany({
      orderBy: { scenarioid: 'desc' },
      take: 5,
      select: {
        scenarioid: true,
        scenarioname: true,
      },
    });

    const result = {
      tests: {
        totalBindingConstraintsInDatabase: totalBindingConstraints[0]?.total_count || 0,
        scenariosWithBindingConstraints: scenariosWithBindingConstraints,
        unitsWithBindingConstraints: unitsWithBindingConstraints,
        availableScenarios: availableScenarios,
      }
    };

    console.log('Binding constraints test results:', result);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Binding constraints test error:', error);
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