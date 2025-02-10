import { AppLayout } from "@/components/Layout/AppLayout";
import { Main } from "@/components/Main";
import { Post } from "@prisma/client";
import { client } from "@repo/db/client";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  // ASSIGNMENT 2

  // const filteredPosts = posts.filter(
  //   (post) =>
  //     (post.active && post.title.match(new RegExp(q, "i"))) ||
  //     post.content.match(new RegExp(q, "i")),
  // );

  // ASSIGNMENT 3

  const filteredPosts = (await client.db.$queryRaw`
    SELECT p.*, 
          COUNT(l.userIP) AS likes 
    FROM post p
    LEFT JOIN like l ON l.postId = p.id
    WHERE p.active=true 
      AND (
        LOWER(p.title) LIKE LOWER('%' || ${q} || '%') 
        OR LOWER(p.content) LIKE LOWER('%' || ${q} || '%') 
      )
    GROUP BY p.id
  `) as Array<Post & { likes: number }>;

  return (
    <AppLayout query={q}>
      <Main posts={filteredPosts} />
    </AppLayout>
  );
}
