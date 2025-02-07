import { HeartIcon } from "@heroicons/react/24/outline";
import type { Post } from "@repo/ui/data";

export function BlogListItem({ post }: { post: Post }) {
  return (
    <article
      key={post.id}
      className="flex flex-row gap-8"
      data-test-id={`blog-post-${post.id}`}
    >
      <div className="aspect-square w-64 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={post.imageUrl}
          className="inset-0 size-full rounded-2xl bg-gray-50 object-cover"
        />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={post.date.toString()} className="text-secondary">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </time>
          <a
            href={"/"}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {post.category}
          </a>
        </div>
        <div className="max-w-xl">
          <h3 className="text-primary hover:text-primaryHover mt-3 text-lg/6 font-semibold">
            <a href={`/post/${post.urlId}`}>{post.title}</a>
          </h3>

          {/* DESCRIPTION */}
          <p className="text-secondary text-md/6 mt-5">{post.description}</p>

          {/* TAGS */}
          <div className="mt-5 flex gap-x-2 text-sm">
            {post.tags.map((tag) => (
              <a
                href={`/?tag=${tag}`}
                key={tag}
                className="text-secondary hover:text-secondaryHover"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
        <div className="border-primary/10 text-secondary relative mt-4 flex items-center justify-between gap-x-4 border-t pt-4 text-sm">
          <div>{post.views} views</div>
          <div className="flex items-center gap-x-1">
            <HeartIcon color="red" width={20} /> {post.likes} likes
          </div>
        </div>
      </div>
    </article>
  );
}
