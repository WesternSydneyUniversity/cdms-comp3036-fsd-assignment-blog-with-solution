"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useMemo, type ChangeEventHandler } from "react";
import ThemeSwitch from "../Themes/ThemeSwitcher";

function debounce<T extends (...args: Any[]) => Any>(fn: T, delay = 300) {
  let timeoutId: Any;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function TopMenu({ query }: { query?: string }) {
  const router = useRouter();

  const handleSearch = useMemo<ChangeEventHandler<HTMLInputElement>>(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value;
        router.push(`/search?q=${search}`);
      }),
    [router],
  );

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-8 shadow-sm dark:border-white/5 dark:bg-gray-900">
      {/* Separator */}

      <div className="flex flex-1 gap-x-6 self-stretch">
        <form action="#" method="GET" className="grid flex-1 grid-cols-1">
          <input
            name="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
            defaultValue={query}
            onChange={handleSearch}
            className="text-secondary col-start-1 row-start-1 block size-full pl-8 text-base outline-none placeholder:text-gray-400 sm:text-sm/6"
          />
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
          />
        </form>
        <div className="flex items-center gap-x-6">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
