import { AppLayout } from "@/components/Layout/AppLayout";
import { Main } from "@/components/Main";
import type { Post } from "@prisma/client";
// import { posts } from "@repo/db/data";
import { client } from "@repo/db/client";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  // ASSIGNMENT 2
  // const filteredPosts = posts.filter(
  //   (post) => post.active && post.category.toLowerCase() === name.toLowerCase(),
  // );
  // ASSIGNMENT 3
  // const filteredPosts2 = await client.posts({
  //   where: { active: true, category: { contains: name } },
  //   orderBy: { date: "desc" },
  // });

  const filteredPosts = (await client.db.$queryRaw`SELECT p.*, 
      COUNT(l.userIP) AS likes 
    FROM post p
    LEFT JOIN like l ON l.postId = p.id
    WHERE p.active=true AND p.category LIKE ${name}
    GROUP BY  p.id
  `) as Array<Post & { likes: number }>;

  return (
    <AppLayout>
      <Main posts={filteredPosts} />
    </AppLayout>
  );
}
