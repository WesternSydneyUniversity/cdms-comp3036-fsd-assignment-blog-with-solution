import { posts } from "@/components/data";
import { AppLayout } from "@/components/Layout/AppLayout";
import { Main } from "@/components/Main";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  const filteredPosts = posts.filter(
    (post) =>
      post.title.match(new RegExp(q, "i")) ||
      post.content.match(new RegExp(q, "i")),
  );

  return (
    <AppLayout query={q}>
      <Main posts={filteredPosts} />
    </AppLayout>
  );
}
