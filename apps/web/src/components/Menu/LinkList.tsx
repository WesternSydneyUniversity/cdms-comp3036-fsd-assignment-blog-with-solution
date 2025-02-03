import type { PropsWithChildren } from "react";

export function LinkList({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <li>
      <div className="text-xs/6 font-semibold text-gray-400">{title}</div>
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {children}
      </ul>
    </li>
  );
}
