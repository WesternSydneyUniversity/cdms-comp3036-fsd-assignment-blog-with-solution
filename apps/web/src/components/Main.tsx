import type { Post } from "@repo/ui/data";
import BlogList from "./Blog/List";

export function Main({ posts }: { posts: Post[] }) {
  return (
    <main className="py-10">
      <div className="px-8 sm:px-6">
        <BlogList posts={posts} />
      </div>
    </main>
  );
}
