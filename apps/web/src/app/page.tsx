import { posts } from "@repo/db/data";
import { AppLayout } from "../components/Layout/AppLayout";
import { Main } from "../components/Main";

export default function Home() {
  return (
    <AppLayout>
      <Main posts={posts.filter((p) => p.active)} />
    </AppLayout>
  );
}
