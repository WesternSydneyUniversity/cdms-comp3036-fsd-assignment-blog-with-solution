import { posts } from "@repo/ui/data";
import { AppLayout } from "../components/Layout/AppLayout";
import { Main } from "../components/Main";

export default function Home() {
  return (
    <AppLayout>
      <Main posts={posts.filter((p) => p.active)} />
    </AppLayout>
  );
}
