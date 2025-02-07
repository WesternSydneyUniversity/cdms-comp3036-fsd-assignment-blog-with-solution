import { AppLayout } from "@/components/Layout/AppLayout";
import { Main } from "@/components/Main";
import { posts } from "@repo/ui/data";
import { toUrlPath } from "@repo/utils/url";

export default async function Home({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const filteredPosts = posts.filter(
    (post) =>
      post.active &&
      post.tags.map((t) => toUrlPath(t)).includes(name.toLowerCase()),
  );

  return (
    <AppLayout>
      <Main posts={filteredPosts} />
    </AppLayout>
  );
}
