import { posts } from "@/components/data";
import { AppLayout } from "@/components/Layout/AppLayout";
import { Main } from "@/components/Main";

export default async function Page({
  params,
}: {
  params: Promise<{ year: string; month: string }>;
}) {
  const { year, month } = await params;
  const filteredPosts = posts.filter(
    (post) =>
      post.date.getMonth() === parseInt(month) - 1 &&
      post.date.getFullYear() === parseInt(year),
  );

  return (
    <AppLayout>
      <Main posts={filteredPosts} />
    </AppLayout>
  );
}
