import { BlogDetail } from "@/components/Blog/Detail";
import { posts } from "@/components/data";
import { AppLayout } from "@/components/Layout/AppLayout";

export default async function Page({
  params,
}: {
  params: Promise<{ urlId: string }>;
}) {
  const { urlId } = await params;
  const filteredPost = posts.find(
    (post) => post.urlId.toLowerCase() === urlId.toLowerCase(),
  );

  return (
    <AppLayout>
      {filteredPost ? <BlogDetail post={filteredPost} /> : "Article not found"}
    </AppLayout>
  );
}
