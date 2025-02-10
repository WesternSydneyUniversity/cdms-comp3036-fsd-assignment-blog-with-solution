import jwt from "jsonwebtoken";
import { NextResponse, type NextRequest } from "next/server";

export async function DELETE() {
  // TODO: Remove the auth token from cookies
  const response = NextResponse.json(
    {
      message: "Logout",
    },
    {
      status: 200,
    },
  );

  response.cookies.set("auth_token", "", {
    httpOnly: true,
    secure: false,
    maxAge: 0,
    path: "/",
  });

  return response;
}

export async function POST(req: NextRequest) {
  // TODO: check the password
  //       if passwords match, create a JWT token and set it in cookies

  const { password } = await req.json();
  const { PASSWORD, JWT_SECRET } = process.env;

  if (PASSWORD == null || JWT_SECRET == null) {
    throw new Error("Missing configuration variables");
  }

  if (password === process.env.PASSWORD) {
    const token = jwt.sign(
      {
        user: "admin",
      },
      JWT_SECRET || "",
      { expiresIn: "10d" },
    );

    const response = NextResponse.json(
      {
        token,
      },
      {
        status: 200,
      },
    );

    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 24 * 10, // 10 days
      path: "/",
    });

    return response;
  }

  return NextResponse.json(
    {
      message: "Password mismatch",
    },
    {
      status: 401,
    },
  );
}
