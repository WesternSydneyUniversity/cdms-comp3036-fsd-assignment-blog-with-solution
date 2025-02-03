import BlogList from "./Blog/List";
import type { Post } from "./data";

export function Main({ posts }: { posts: Post[] }) {
  return (
    <main className="py-10">
      <div className="px-8 sm:px-6">
        <BlogList posts={posts} />
      </div>
    </main>
  );
}
