"use client";

import type { Post } from "@repo/db/data";
import { useState } from "react";
import { Filter } from "../Filter/Filter";
import { Header } from "../Header";
import { PostList } from "../Posts/PostList";
import { Content } from "./Content";

export function TheHomeView({ posts: dbPosts }: { posts: Post[] }) {
  const [posts, setPosts] = useState(dbPosts);

  return (
    <Content>
      <Header />
      <Filter posts={dbPosts} setPosts={setPosts} />
      <PostList posts={posts} />
    </Content>
  );
}
