import type { Post } from "@repo/db/data";
import { BlogListItem } from "./ListItem";

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-primary text-pretty text-4xl font-semibold tracking-tight">
            From the blog
          </h2>
          <p className="text-secondary mt-2 text-lg/8">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-20 space-y-20">
            {posts.length === 0 && (
              <div className="text-primary text-lg">0 Posts</div>
            )}
            {posts.map((post) => (
              <BlogListItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
