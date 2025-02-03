import { expect, test } from "./fixtures";
test(
  "Existing Tag with one post",
  {
    tag: "@a1",
  },
  async ({ page }) => {
    await page.goto("/tags/dev-tools");

    // console.log(await page.innerHTML("body"));

    const articles = await page.locator('[data-test-id^="blog-post-"]');
    await expect(articles).toHaveCount(1);

    await expect(page.getByTestId("blog-post-3")).toBeVisible();
    await expect(
      page.getByText("No front end framework is the best"),
    ).toBeVisible();
  },
);

test(
  "Existing Tag with multiple posts",
  {
    tag: "@a1",
  },
  async ({ page }) => {
    await page.goto("/tags/front-end");

    // console.log(await page.innerHTML("body"));

    const articles = await page.locator('[data-test-id^="blog-post-"]');
    await expect(articles).toHaveCount(2);

    await expect(page.getByTestId("blog-post-2")).toBeVisible();
    await expect(
      page.getByText("Better front ends with Fatboy Slim"),
    ).toBeVisible();

    await expect(page.getByTestId("blog-post-3")).toBeVisible();
    await expect(
      page.getByText("No front end framework is the best"),
    ).toBeVisible();
  },
);

test(
  "Invalid Category",
  {
    tag: "@a1",
  },
  async ({ page }) => {
    await page.goto("/category/abc");

    // console.log(await page.innerHTML("body"));

    const articles = await page.locator('[data-test-id^="blog-post-"]');
    await expect(articles).toHaveCount(0);

    await expect(page.getByText("0 Posts")).toBeVisible();
  },
);
