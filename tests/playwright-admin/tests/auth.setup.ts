import { test as setup } from "@playwright/test";
import { seedData } from "./fixtures";

setup.beforeAll(async () => {
  await seedData();
});

// setup(
//   "authenticate assignment 2",
//   { tag: "@a2" },
//   async ({ page, playwright }) => {
//     const authFile = ".auth/user.json";
//     // Perform authentication steps. Replace these actions with your own.
//     // const apiContext = await playwright.request.newContext({
//     //   baseURL: "http://localhost:3000",
//     // });
//     // const { csrfToken } = await (await apiContext.get("/api/auth/csrf")).json();
//     // await apiContext.post("/api/auth/callback/credentials", {
//     //   form: {
//     //     csrfToken,
//     //     email: "admin@wsu.edu.au",
//     //     password: "123",
//     //   },
//     // });

//     // await apiContext.storageState({ path: authFile });

//     // const file = fs.readFileSync(authFile, "utf8");
//     // const content = JSON.parse(file);
//     const content = {
//       cookies: [
//         {
//           name: "password",
//           value: "123",
//           domain: "localhost",
//           secure: false,
//           expires: -1,
//           path: "/",
//           httpOnly: false,
//           sameSite: "Lax",
//         },
//       ],
//     };
//     fs.writeFileSync(authFile, JSON.stringify(content, null, 2));
//   },
// );

setup(
  "authenticate assignment 3",
  { tag: "@a3" },
  async ({ page, playwright }) => {
    const authFile = ".auth/user.json";

    // ////////////////////////////////////////
    // // Authentication for Assignment 2
    // ////////////////////////////////////////

    // const content = {
    //   cookies: [
    //     {
    //       name: "auth_token",
    //       value: "123",
    //       domain: "localhost",
    //       secure: false,
    //       expires: -1,
    //       path: "/",
    //       httpOnly: true,
    //       sameSite: "Lax",
    //     },
    //   ],
    // };
    // fs.writeFileSync(authFile, JSON.stringify(content, null, 2));

    ////////////////////////////////////////
    // Authentication for Assignment 3
    ////////////////////////////////////////

    const apiContext = await playwright.request.newContext({
      baseURL: process.env.ROOT_URL,
    });

    await apiContext.post("/api/auth", {
      data: JSON.stringify({ password: "123" }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await apiContext.storageState({ path: authFile });
  },
);
