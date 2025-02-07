/* eslint-disable @next/next/no-img-element */
import type { Post } from "@repo/ui/data";
import Link from "next/link";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article
          key={post.id}
          className="flex gap-4 rounded-lg border border-white/10 p-4"
        >
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-32 rounded-md object-cover"
          />

          <div>
            <Link href={`/post/${post.urlId}`}>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
            </Link>
            <div className="mt-2 text-gray-600">
              <p>
                Posted on{" "}
                {new Date(post.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}{" "}
                &middot; {post.category}
              </p>
              <p>#{post.tags.join(", #")}</p>
            </div>
            <button
              onClick={() =>
                alert(
                  `Post ${post.id} is ${post.active ? "active" : "inactive"}`,
                )
              }
              className={`mt-2 rounded px-4 py-2 ${
                post.active
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {post.active ? "Active" : "Inactive"}
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
