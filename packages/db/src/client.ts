import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const createClient = () => {
  if (global.prisma) {
    return global.prisma;
  }

  const URL =
    process.env.VITEST || process.env.E2E
      ? process.env.TEST_DATABASE_URL
      : process.env.DATABASE_URL;

  const prisma = new PrismaClient({
    datasourceUrl: URL,
  });

  console.log("Connected to database");
  console.log(URL);

  global.prisma = prisma;
  return prisma;
};

export const client = {
  get db() {
    return createClient();
  },
};
