import { cx } from "@repo/utils/classes";
import Link from "next/link";
export function SummaryItem({
  name,
  link,
  count,
  isSelected,
  title,
}: {
  name: string;
  link: string;
  count: number;
  isSelected: boolean;
  title: string;
}) {
  return (
    <li>
      <Link
        href={link}
        title={title}
        role="link"
        className={cx(
          {
            "selected bg-gray-50 text-indigo-600 dark:bg-gray-800 dark:text-white":
              isSelected,
            "text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white":
              !isSelected,
          },
          "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
        )}
      >
        <span
          data-test-id="post-count"
          className={cx(
            {
              "border-indigo-600 text-indigo-600": isSelected,
              "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400":
                !isSelected,
            },
            "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
          )}
        >
          {count}
        </span>
        <span className="truncate">{name}</span>
      </Link>
    </li>
  );
}
