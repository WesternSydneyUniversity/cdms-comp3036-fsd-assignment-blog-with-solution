// import { posts, type Post } from "../components/data";

export async function tags(posts: { tags: string[] }[]) {
  return posts.reduce(
    (acc, post) => {
      post.tags.forEach((tag) => {
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
