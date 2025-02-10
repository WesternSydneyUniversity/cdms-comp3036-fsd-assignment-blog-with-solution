import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function isLoggedIn() {
  // TODO: check if the user is logged in by verifying the auth_token cookie
  const userCookies = await cookies();

  // finish the implementation here ...

  // ASSIGNMENT 2
  // check only that "auth_token" cookie exists
  // return userCookies.has("auth_token");

  // ASSIGNMENT 3
  // check that auth_token cookie exists and is valid
  const token = userCookies.get("auth_token")?.value;

  return token && jwt.verify(token, process.env.JWT_SECRET || "");
}
