import { AppLayout } from "@/components/Layout/AppLayout";
import { Main } from "@/components/Main";
import { Post } from "@prisma/client";
import { client } from "@repo/db/client";
// import { posts } from "@repo/db/data";

export default async function Home({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  // ASSIGNMENT 2

  // const filteredPosts = posts.filter(
  //   (post) =>
  //     post.active &&
  //     post.tags.split(",").map((t) => toUrlPath(t)).includes(name.toLowerCase()),
  // );

  // ASSIGNMENT 3

  const filteredPosts = (await client.db.$queryRaw`SELECT p.*, 
      COUNT(l.userIP) AS likes 
    FROM post p
    LEFT JOIN like l ON l.postId = p.id
    WHERE p.active=true AND LOWER(replace(p.tags, ' ', '-')) LIKE '%' || ${name} || '%'
    GROUP BY  p.id
  `) as Array<Post & { likes: number }>;

  return (
    <AppLayout>
      <Main posts={filteredPosts} />
    </AppLayout>
  );
}
