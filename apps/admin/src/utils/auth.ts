import { cookies } from "next/headers";

export async function isLoggedIn() {
  const userCookies = await cookies();
  return userCookies.get("password")?.value === process.env.PASSWORD;
}
