"use client";

import type { Post } from "@repo/db/data";
import Link from "next/link";
import { useState } from "react";

export function PostItem({ post }: { post: Post }) {
  const [active, setActive] = useState(post.active);

  return (
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
          <p>#{post.tags.split(",").join(", #")}</p>
        </div>
        <button
          onClick={() => {
            fetch("/api/posts", {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: post.id,
                active: !active,
              }),
            }).then(() => setActive(!active));
          }}
          className={`mt-2 cursor-pointer rounded px-4 py-2 ${
            active ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {active ? "Active" : "Inactive"}
        </button>
      </div>
    </article>
  );
}
