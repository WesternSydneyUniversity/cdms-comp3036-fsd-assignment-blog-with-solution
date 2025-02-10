import { TheHomeView } from "@/components/Layout/TheHomeView";
import { isLoggedIn } from "@/utils/auth";
import { client } from "@repo/db/client";
import { LoginScreen } from "@repo/ui/login";

export default async function Home() {
  if (!(await isLoggedIn())) {
    return <LoginScreen />;
  }

  const posts = await client.posts({});
  return <TheHomeView posts={posts} />;
}
