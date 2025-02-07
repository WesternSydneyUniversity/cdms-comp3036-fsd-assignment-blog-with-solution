import { Header } from "@/components/Header";
import { AppLayout } from "@/components/Layout/AppLayout";
import { Content } from "@/components/Layout/Content";
import { PostForm } from "@/components/Posts/PostForm";
import { posts } from "@repo/db/data";
import { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

export default async function Page({
  params,
}: {
  params: Promise<{ urlid: string }>;
}) {
  const { urlid } = await params;

  const post = posts.find((post) => post.urlId === urlid);

  return (
    <AppLayout>
      {post ? (
        <Content>
          <Header />
          <PostForm post={post} />
        </Content>
      ) : (
        <div className="text-center">Post not found</div>
      )}
    </AppLayout>
  );
}
