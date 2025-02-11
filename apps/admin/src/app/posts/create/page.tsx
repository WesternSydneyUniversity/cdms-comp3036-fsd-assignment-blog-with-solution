import { Header } from "@/components/Header";
import { AppLayout } from "@/components/Layout/AppLayout";
import { Content } from "@/components/Layout/Content";
import { PostForm } from "@/components/Posts/PostForm";

export default async function Page() {
  return (
    <AppLayout>
      <Content>
        <Header />
        <PostForm />
      </Content>
    </AppLayout>
  );
}
