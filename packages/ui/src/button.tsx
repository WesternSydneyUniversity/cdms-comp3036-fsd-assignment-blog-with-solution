"use client";

import cx from "@repo/utils/classes";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx(
        className,
        "cursor-pointer rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
        "bg-white/10 dark:text-white dark:shadow-sm dark:ring-white/5 dark:hover:bg-white/20",
      )}
      {...props}
    >
      {children}
    </button>
  );
};
