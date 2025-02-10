"use client";

import { HeartIcon } from "@heroicons/react/24/outline";
import type { Post } from "@repo/db/data";
import { useState } from "react";
export function LikeButton({ post }: { post: Post }) {
  const [likes, setLikes] = useState(post.likes);

  return (
    <button
      data-test-id="like-button"
      className="flex cursor-pointer items-center gap-x-1"
      onClick={async () => {
        const result = await (
          await fetch(`/api/likes`, {
            method: "POST",
            body: JSON.stringify({ id: post.id }),
          })
        ).json();
        setLikes(result.likes);
      }}
    >
      <HeartIcon color="red" width={20} /> {likes} likes
    </button>
  );
}
