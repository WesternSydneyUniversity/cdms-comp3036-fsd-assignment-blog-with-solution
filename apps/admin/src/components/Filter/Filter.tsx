import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@repo/ui/button";
import type { Post } from "@repo/ui/data";
import Link from "next/link";
import { useState } from "react";
export function Filter({
  posts,
  setPosts,
}: {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}) {
  const [search, setSearch] = useState("");
  const [findActive, setFindActive] = useState<boolean | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPosts(
      posts.filter(
        (post) =>
          post.title.match(new RegExp(e.target.value, "i")) ||
          post.content.match(new RegExp(e.target.value, "i")),
      ),
    );
  };

  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex-2">
          <label className="mb-2 block">Filter by Content:</label>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 px-4 py-2"
          />
        </div>
        <div className="flex-1">
          <label className="mb-2 block">Sort By:</label>
          <select
            onChange={(e) => {
              const value = e.target.value;
              const sortedPosts = [...posts];
              if (value === "title-asc") {
                sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
              } else if (value === "title-desc") {
                sortedPosts.sort((a, b) => b.title.localeCompare(a.title));
              } else if (value === "date-asc") {
                sortedPosts.sort(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime(),
                );
              } else if (value === "date-desc") {
                sortedPosts.sort(
                  (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime(),
                );
              }
              setPosts(sortedPosts);
            }}
            className="w-full rounded-md border border-gray-300 px-4 py-2"
          >
            <option value="">Please select</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
            <option value="date-asc">Date Created (Oldest First)</option>
            <option value="date-desc">Date Created (Newest First)</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="mb-2 block">Filter by Tag:</label>
          <input
            type="text"
            ref={(node) => {
              if (node) {
                console.log("Indeterminae");
                node.indeterminate = findActive === null;
              }
            }}
            onChange={(e) => {
              const tag = e.target.value;
              setPosts(
                posts.filter((post) =>
                  post.tags.some((t) => t.match(new RegExp(tag, "i"))),
                ),
              );
            }}
            placeholder="Enter tag..."
            className="w-full rounded-md border border-gray-300 px-4 py-2"
          />
        </div>
        <div className="flex-1">
          <label className="mb-2 block">Filter by Date Created:</label>
          <input
            type="date"
            onChange={(e) => {
              const date = new Date(e.target.value);
              setPosts(posts.filter((post) => new Date(post.date) >= date));
            }}
            className="w-full rounded-md border border-gray-300 px-4 py-2"
          />
        </div>
        <div className="flex-1">
          <label className="mb-2 block">Filter by Status</label>
          <div>
            <select
              onChange={(e) => {
                const value = e.target.value;
                if (value === "please select") {
                  setFindActive(null);
                  setPosts(posts);
                } else {
                  const isActive = value === "active";
                  setFindActive(isActive);
                  setPosts(
                    posts.filter((post) =>
                      isActive ? !!post.active : !post.active,
                    ),
                  );
                }
              }}
              className="w-full rounded-md border border-gray-300 px-4 py-2"
            >
              <option value="please select">Please select</option>
              <option value="active">Active</option>
              <option value="not active">Not Active</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <Link href="/posts/create" className="">
          <Button className="flex items-center gap-2 bg-green-800 px-4 py-2 text-lg">
            <PlusIcon width={24} /> Create Post
          </Button>
        </Link>
      </div>
    </div>
  );
}
