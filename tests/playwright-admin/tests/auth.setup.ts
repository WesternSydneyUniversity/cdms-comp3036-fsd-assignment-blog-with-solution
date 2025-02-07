import { test as setup } from "@playwright/test";
import fs from "fs";
import { seedData } from "./fixtures";

setup.beforeAll(async () => {
  await seedData();
});

setup("authenticate user", async ({ page, playwright }) => {
  const authFile = ".auth/user.json";
  // Perform authentication steps. Replace these actions with your own.
  // const apiContext = await playwright.request.newContext({
  //   baseURL: "http://localhost:3000",
  // });
  // const { csrfToken } = await (await apiContext.get("/api/auth/csrf")).json();
  // await apiContext.post("/api/auth/callback/credentials", {
  //   form: {
  //     csrfToken,
  //     email: "admin@wsu.edu.au",
  //     password: "123",
  //   },
  // });

  // await apiContext.storageState({ path: authFile });

  // const file = fs.readFileSync(authFile, "utf8");
  // const content = JSON.parse(file);
  const content = {
    cookies: [
      {
        name: "password",
        value: "123",
        domain: "localhost",
        secure: false,
        expires: -1,
        path: "/",
        httpOnly: false,
        sameSite: "Lax",
      },
    ],
  };
  fs.writeFileSync(authFile, JSON.stringify(content, null, 2));
});

// setup("authenticate admin", async ({ page, playwright }) => {
//   // const authFile = ".auth/wsu-admin.json";
//   // // Perform authentication steps. Replace these actions with your own.
//   // const apiContext = await playwright.request.newContext({
//   //   baseURL: process.env.ROOT_URL,
//   // });
//   // const { csrfToken } = await (await apiContext.get("/api/auth/csrf")).json();
//   // await apiContext.post("/api/auth/callback/credentials", {
//   //   form: {
//   //     csrfToken,
//   //     email: "admin@email.com",
//   //     password: "123",
//   //   },
//   // });
//   // await apiContext.storageState({ path: authFile });
// });
