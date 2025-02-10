import { AppLayout } from "@/components/Layout/AppLayout";
import { Main } from "@/components/Main";
import { client } from "@repo/db/client";

export default async function Page({
  params,
}: {
  params: Promise<{ year: string; month: string }>;
}) {
  const { year, month } = await params;

  // ASSIGNMENT 2
  // const filteredPosts = posts.filter(
  //   (post) =>
  //     post.active &&
  //     post.date.getMonth() === parseInt(month) - 1 &&
  //     post.date.getFullYear() === parseInt(year),
  // );

  // ASSIGNMENT 3
  const startDate = new Date(parseInt(year), parseInt(month) - 1, 1); // 2025-02-01
  const endDate = new Date(parseInt(year), parseInt(month), 1); // 2025-03-01
  const filteredPosts = await client.posts({
    where: {
      active: true,
      date: {
        gte: startDate,
        lt: endDate,
      },
    },
    orderBy: { date: "desc" },
  });

  return (
    <AppLayout>
      <Main posts={filteredPosts} />
    </AppLayout>
  );
}
