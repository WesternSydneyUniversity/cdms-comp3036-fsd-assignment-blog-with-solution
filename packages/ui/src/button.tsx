"use client";

import cx from "@repo/utils/classes";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx(
        "cursor-pointer rounded bg-white px-3 py-2 font-semibold text-gray-900 hover:bg-gray-50",
        "bg-white/10 hover:text-gray-900 hover:ring-1 dark:text-white dark:hover:bg-white/20",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
