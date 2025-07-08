import type { APIRoute } from 'astro';
import { PrismaClient } from '@prisma/client';
// Note: This import will work after running prisma generate for secondary schema
// import { PrismaClient as SecondaryPrismaClient } from '../../../prisma/generated/secondary';

// Primary database client
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Secondary database client (uncomment after generation)
// const globalForSecondaryPrisma = globalThis as unknown as {
//   secondaryPrisma: SecondaryPrismaClient | undefined;
// };
// const secondaryPrisma = globalForSecondaryPrisma.secondaryPrisma ?? new SecondaryPrismaClient();
// if (process.env.NODE_ENV !== 'production') {
//   globalForSecondaryPrisma.secondaryPrisma = secondaryPrisma;
// }

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const scenarioid = url.searchParams.get('scenarioid') || '12345';

    // Query primary database (your current database)
    const primaryData = await prisma.results_units.findMany({
      where: {
        scenarioid: parseInt(scenarioid),
        unitid: 56154, // Your current unit
      },
      select: {
        Date: true,
        Hour: true,
        generationmw: true,
        lmp: true,
      },
      take: 100, // Limit for example
    });

    // Query secondary database (uncomment after setup)
    // const secondaryData = await secondaryPrisma.example_table.findMany({
    //   where: {
    //     // Add your filtering conditions
    //   },
    //   select: {
    //     date: true,
    //     value: true,
    //     name: true,
    //   },
    // });

    // Combine data from both databases
    const combinedData = primaryData.map(primary => {
      // Create datetime key for matching
      const datetime = new Date(primary.Date);
      datetime.setHours(primary.Hour, 0, 0, 0);
      const datetimeKey = datetime.toISOString();

      // Find matching secondary data (example logic)
      // const matchingSecondary = secondaryData.find(secondary => 
      //   secondary.date.toISOString() === datetimeKey
      // );

      return {
        datetime: datetimeKey,
        primaryGeneration: primary.generationmw,
        primaryLMP: primary.lmp,
        // secondaryValue: matchingSecondary?.value || null,
        // secondaryName: matchingSecondary?.name || null,
      };
    });

    return new Response(JSON.stringify({
      scenarioid: parseInt(scenarioid),
      data: combinedData,
      // metadata: {
      //   primaryRecords: primaryData.length,
      //   secondaryRecords: secondaryData.length,
      //   combinedRecords: combinedData.length,
      // }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Database error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch combined data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}; 