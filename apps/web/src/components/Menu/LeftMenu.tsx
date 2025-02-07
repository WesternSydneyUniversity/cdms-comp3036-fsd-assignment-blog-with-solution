import {
  ArchiveBoxIcon,
  BookmarkIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import { posts } from "@repo/db/data";
import { cx } from "@repo/utils/classes";
import Image from "next/image";
import Link from "next/link";
import { HistoryList } from "./HistoryList";
import { TagList } from "./TagList";

export const categories = [
  { name: "React", urlId: "react", icon: BookmarkIcon, current: false },
  { name: "Node", urlId: "node", icon: ServerIcon, current: false },
  { name: "Mongo", urlId: "mongo", icon: ArchiveBoxIcon, current: false },
  { name: "DevOps", urlId: "devops", icon: BriefcaseIcon, current: false },
];

export function LeftMenu() {
  return (
    <div className="fixed inset-y-0 z-50 flex w-72 flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 ring-1 ring-black/5 dark:bg-black/10 dark:ring-white/5">
        <div className="flex h-16 shrink-0 items-center gap-2">
          <Image
            width={32}
            height={32}
            alt="Your Company"
            src="/wsulogo.png"
            className="h-8 w-auto"
          />
          <Link
            href="/"
            className="text-lg/6 font-semibold text-gray-900 dark:text-white"
          >
            Full Stack Blog
          </Link>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {categories.map((item) => (
                  <li key={item.name}>
                    <a
                      title={`Category / ${item.name}`}
                      href={`/category/${item.urlId}`}
                      className={cx(
                        item.current
                          ? "bg-gray-50 text-indigo-600 dark:bg-gray-800 dark:text-white"
                          : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
                        "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className="size-6 shrink-0"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <HistoryList selectedYear="" selectedMonth="" posts={posts} />
            <TagList selectedTag="" posts={posts} />
            <li className="mt-auto">
              <a
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                Admin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
