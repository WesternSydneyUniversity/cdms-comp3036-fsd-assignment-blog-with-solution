import { client } from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id } = await req.json();

  // Try to get IP from headers (works on Vercel and many other hosts)
  const forwardedFor = req.headers.get("x-forwarded-for");

  // If multiple IPs exist in the header, the first one is the client's IP
  const ip = forwardedFor?.split(",")[0] || "Unknown";

  // get the post
  const post = await client.db.like.findFirst({
    where: { postId: id, userIP: ip },
  });

  if (post) {
    console.log("👎🏽 Dislike from: " + ip);
    await client.db.like.delete({
      where: { postId_userIP: { postId: id, userIP: ip } },
    });
  } else {
    console.log("👍🏽 Like from: " + ip);
    await client.db.like.create({ data: { postId: id, userIP: ip } });
  }

  return NextResponse.json({
    likes: await client.db.like.count({ where: { postId: id } }),
  });
}
