import { type Post } from "@repo/db/data";
import { toUrlPath } from "@repo/utils/url";
import { tags } from "../../functions/tags";
import { LinkList } from "./LinkList";
import { SummaryItem } from "./SummaryItem";

export async function TagList({
  selectedTag,
  posts,
}: {
  selectedTag?: string;
  posts: Post[];
}) {
  const postTags = await tags(posts);
  return (
    <LinkList title="Tags">
      {postTags.map((tag) => (
        <SummaryItem
          key={tag.name}
          name={tag.name}
          count={tag.count}
          link={`/tags/${toUrlPath(tag.name)}`}
          isSelected={selectedTag === tag.name}
          title={`Tag / ${tag.name}`}
        />
      ))}
    </LinkList>
  );
}
