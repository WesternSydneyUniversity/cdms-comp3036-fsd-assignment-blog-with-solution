import { Header } from "@/components/Header";
import { AppLayout } from "@/components/Layout/AppLayout";
import { Content } from "@/components/Layout/Content";
import { PostForm } from "@/components/Posts/PostForm";
import { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

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
