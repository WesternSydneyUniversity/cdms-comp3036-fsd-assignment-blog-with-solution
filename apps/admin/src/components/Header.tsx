import Image from "next/image";
export function Header() {
  return (
    <h1 className="flex items-center gap-2 text-3xl">
      <Image alt="wsu logo" src="/wsulogo.png" width={64} height={64} /> Admin
      of Full Stack Blog
    </h1>
  );
}
