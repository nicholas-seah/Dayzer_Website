const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const latestScenario = await prisma.info_scenarioid_scenarioname_mapping.findFirst({
    orderBy: { scenarioid: 'desc' },
    select: { scenarioid: true },
  });
  if (latestScenario) {
    console.log('Most recent scenarioid:', latestScenario.scenarioid);
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