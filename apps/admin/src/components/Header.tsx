"use client";

import { Button } from "@repo/ui/button";
import Image from "next/image";
import Link from "next/link";
export function Header() {
  return (
    <div className="flex items-center gap-2 text-3xl">
      <Link href="/" className="flex items-center gap-2">
        <Image alt="wsu logo" src="/wsulogo.png" width={64} height={64} />{" "}
        <span>Admin of Full Stack Blog</span>
      </Link>
      <Button
        onClick={() => {
          fetch("/api/auth", {
            method: "DELETE",
          }).then(() => {
            window.location.reload();
          });
        }}
        className="ml-auto"
      >
        Logout
      </Button>
    </div>
  );
}
