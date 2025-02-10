import { isLoggedIn } from "@/utils/auth";
import { client } from "@repo/db/client";
import type { Post } from "@repo/db/data";
import { toUrlPath } from "@repo/utils/url";
import { NextResponse, type NextRequest } from "next/server";

export async function PATCH(req: NextRequest) {
  if (!(await isLoggedIn())) {
    return new Response("Unauthorized", { status: 401 });
  }
  const { id, ...rest } = (await req.json()) as Post;

  await client.db.post.update({
    where: { id },
    data: rest,
  });

  return NextResponse.json({ message: "Post updated" }, { status: 200 });
}

export async function PUT(req: NextRequest) {
  if (!(await isLoggedIn())) {
    return new Response("Unauthorized", { status: 401 });
  }
  const { id, ...post } = (await req.json()) as Post;

  const newPost = await client.db.post.create({
    data: {
      ...post,
      urlId: toUrlPath(post.title),
      views: 0,
    },
  });

  return NextResponse.json(
    { message: "Post created", post: newPost },
    { status: 200 },
  );
}
