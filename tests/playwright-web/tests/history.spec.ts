import { expect, test } from "./fixtures";
test(
  "Existing history",
  {
    tag: "@a1",
  },
  async ({ page }) => {
    await page.goto("/history/2024/12");

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
  "Invalid Category",
  {
    tag: "@a1",
  },
  async ({ page }) => {
    await page.goto("/history/2024/1");

    // console.log(await page.innerHTML("body"));

    const articles = await page.locator('[data-test-id^="blog-post-"]');
    await expect(articles).toHaveCount(0);

    await expect(page.getByText("0 Posts")).toBeVisible();
  },
);
