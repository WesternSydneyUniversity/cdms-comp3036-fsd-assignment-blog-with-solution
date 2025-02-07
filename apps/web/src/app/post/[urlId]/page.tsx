import { BlogDetail } from "@/components/Blog/Detail";
import { AppLayout } from "@/components/Layout/AppLayout";
import { posts } from "@repo/db/data";

export default async function Page({
  params,
}: {
  params: Promise<{ urlId: string }>;
}) {
  const { urlId } = await params;
  const filteredPost = posts.find(
    (post) => post.active && post.urlId.toLowerCase() === urlId.toLowerCase(),
  );

  return (
    <AppLayout>
      {filteredPost ? <BlogDetail post={filteredPost} /> : "Article not found"}
    </AppLayout>
  );
}
