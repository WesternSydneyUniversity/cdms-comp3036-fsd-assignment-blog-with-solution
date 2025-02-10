// import { posts, type Post } from "../components/data";

export async function tags(posts: { tags: string; active?: boolean }[]) {
  return posts
    .filter((p) => p.active)
    .reduce(
      (acc, post) => {
        post.tags.split(",").forEach((tag) => {
          if (!acc.some((a) => a.name === tag)) {
            acc.push({ name: tag, count: 1 });
          } else {
            acc.find((a) => a.name === tag)!.count++;
          }
        });
        return acc;
      },
      [] as { name: string; count: number }[],
    );
}
