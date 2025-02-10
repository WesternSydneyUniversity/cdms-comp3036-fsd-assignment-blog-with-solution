import { BlogDetail } from "@/components/Blog/Detail";
import { AppLayout } from "@/components/Layout/AppLayout";
import { client } from "@repo/db/client";

export default async function Page({
  params,
}: {
  params: Promise<{ urlId: string }>;
}) {
  const { urlId } = await params;

  // ASSIGNMENT 3
  await client.db.post.update({
    where: {
      urlId: urlId,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });

  // ASSIGNMENT 2

  // const filteredPost = posts.find(
  //   (post) => post.active && post.urlId.toLowerCase() === urlId.toLowerCase(),
  // );

  // ASSIGNMENT 3
  const filteredPost = await client.post({
    where: {
      active: true,
      urlId: {
        equals: urlId,
      },
    },
  });

  return (
    <AppLayout>
      {filteredPost ? <BlogDetail post={filteredPost} /> : "Article not found"}
    </AppLayout>
  );
}
