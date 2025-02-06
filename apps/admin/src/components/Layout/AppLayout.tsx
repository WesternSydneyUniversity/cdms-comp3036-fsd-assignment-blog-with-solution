import { isLoggedIn } from "@/utils/auth";
import { LoginScreen } from "@repo/ui/login";
import type { PropsWithChildren } from "react";

export async function AppLayout({ children }: PropsWithChildren) {
  if (!(await isLoggedIn())) {
    return <LoginScreen />;
  }

  return children;
}
