import { Prisma, PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
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
  async posts(options: Prisma.PostFindManyArgs) {
    const posts = await this.db.post.findMany({
      where: options.where,
      orderBy: options.orderBy,
      include: {
        _count: {
          select: { Likes: true },
        },
      },
    });
    return posts.map((p) => ({
      ...p,
      likes: p._count.Likes,
    }));
  },
  async post(options: Prisma.PostFindManyArgs) {
    const post = await this.db.post.findFirst({
      where: options.where,
      orderBy: options.orderBy,
      include: {
        _count: {
          select: { Likes: true },
        },
      },
    });
    if (post) {
      return {
        ...post,
        likes: post._count.Likes,
      };
    }
    return null;
  },
};
