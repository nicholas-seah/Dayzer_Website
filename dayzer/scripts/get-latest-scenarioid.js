const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Find the most recent scenarioid with "CAISO_WEEK" in the name
  let latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
    where: {
      scenarioname: {
        contains: 'CAISO_WEEK'
      }
    },
    orderBy: { scenarioid: 'desc' },
    select: { scenarioid: true },
  });
  
  // If no CAISO_WEEK scenario found, fall back to most recent overall
  if (!latestScenario) {
    latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
      orderBy: { scenarioid: 'desc' },
      select: { scenarioid: true },
    });
  }
  
  if (latestScenario) {
    console.log('Most recent CAISO_WEEK scenarioid:', latestScenario.scenarioid);
  } else {
    console.log('No scenarioid found.');
  }
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
}); 