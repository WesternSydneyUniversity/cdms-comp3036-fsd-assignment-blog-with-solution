// import { posts } from "@repo/db/data";
import { client } from "@repo/db/client";
import { AppLayout } from "../components/Layout/AppLayout";
import { Main } from "../components/Main";

export default async function Home() {
  // BEFORE 3: const posts = posts.filter((p) => p.active)
  const posts = await client.posts({
    where: { active: true },
    orderBy: { date: "desc" },
  });

  return (
    <AppLayout>
      <Main posts={posts} />
    </AppLayout>
  );
}
