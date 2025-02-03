"use client";

import { Button } from "@repo/ui/button";
import { useTheme } from "./ThemeContextCookies";
const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className="rounded bg-gray-200 p-2 dark:bg-gray-800"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </Button>
  );
};

export default ThemeSwitch;
