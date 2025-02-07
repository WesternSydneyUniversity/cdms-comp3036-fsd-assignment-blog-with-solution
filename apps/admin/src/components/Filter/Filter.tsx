import { PlusIcon } from "@heroicons/react/24/outline";
import type { Post } from "@repo/db/data";
import Link from "next/link";
import { useEffect, useState } from "react";

type Filter = {
  tag: string;
  date: string;
  status: string;
  text: string;
  sortBy: "title-asc" | "title-desc" | "date-asc" | "date-desc" | "";
};

export function Filter({
  posts,
  setPosts,
}: {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}) {
  const [filters, setFilters] = useState({
    tag: "",
    date: "",
    status: "",
    text: "",
    sortBy: "date-desc",
  });

  useEffect(() => {
    filterPosts({});
  }, []);

  function filterPosts(filter: Partial<Filter>) {
    const combined = { ...filters, ...filter };
    const { tag, date, status, text, sortBy } = combined;

    // search
    if (text) {
      posts = posts.filter(
        (post) =>
          post.title.match(new RegExp(text, "i")) ||
          post.content.match(new RegExp(text, "i")),
      );
    }

    // tags
    if (tag) {
      posts = posts.filter((post) =>
        post.tags.some((t) => t.match(new RegExp(tag, "i"))),
      );
    }

    // date
    if (date) {
      posts = posts.filter((post) => new Date(post.date) >= new Date(date));
    }

    // status
    if (status) {
      posts = posts.filter((post) =>
        status === "active" ? !!post.active : !post.active,
      );
    }

    // sort

    posts = [...posts];
    if (sortBy === "title-asc") {
      posts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "title-desc") {
      posts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "date-asc") {
      posts.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    } else if (sortBy === "date-desc") {
      posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    }

    setFilters(combined);
    setPosts(posts);
  }

  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex-2">
          <label className="mb-2 block" htmlFor="contentFilter">
            Filter by Content:
          </label>
          <input
            id="contentFilter"
            type="text"
            value={filters.text}
            onChange={(e) => filterPosts({ text: e.target.value })}
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 px-4 py-2"
          />
        </div>
        <div className="flex-1">
          <label className="mb-2 block" htmlFor="sortByFilter">
            Sort By:
          </label>
          <select
            id="sortByFilter"
            onChange={(e) => {
              filterPosts({ sortBy: e.target.value as Filter["sortBy"] });
            }}
            value={filters.sortBy}
            className="w-full rounded-md border border-gray-300 px-4 py-2"
          >
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
            <option value="date-asc">Date Created (Oldest First)</option>
            <option value="date-desc">Date Created (Newest First)</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="mb-2 block" htmlFor="tagFilter">
            Filter by Tag:
          </label>
          <input
            id="tagFilter"
            type="text"
            onChange={(e) => {
              filterPosts({ tag: e.target.value });
            }}
            placeholder="Enter tag..."
            className="w-full rounded-md border border-gray-300 px-4 py-2"
          />
        </div>
        <div className="flex-1">
          <label className="mb-2 block" htmlFor="dateFilter">
            Filter by Date Created:
          </label>
          <input
            id="dateFilter"
            type="date"
            onChange={(e) => filterPosts({ date: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-4 py-2"
          />
        </div>
        <div className="flex-1">
          <label className="mb-2 block" htmlFor="statusFilter">
            Filter by Status:
          </label>
          <div>
            <select
              id="statusFilter"
              onChange={(e) => filterPosts({ status: e.target.value })}
              className="w-full rounded-md border border-gray-300 px-4 py-2"
            >
              <option value="">Please select</option>
              <option value="active">Active</option>
              <option value="not active">Not Active</option>
            </select>
          </div>
        </div>
      </div>

      <Link
        href="/posts/create"
        className="bg-wsu hover:bg-wsu-light flex items-center gap-2 self-start rounded px-4 py-2 text-lg text-white"
      >
        <PlusIcon width={24} /> Create Post
      </Link>
    </div>
  );
}
