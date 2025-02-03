import { expect, test } from "./fixtures";
test(
  "Detail view",
  {
    tag: "@a1",
  },
  async ({ page }) => {
    await page.goto("/post/boost-your-conversion-rate");

    // console.log(await page.innerHTML("body"));

    const item = await page.getByTestId("blog-post-1");
    await expect(item).toBeVisible();

    await expect(item.getByText("Boost your conversion rate")).toBeVisible();
    await expect(item.getByText("Boost your conversion rate")).toHaveAttribute(
      "href",
      "/post/boost-your-conversion-rate",
    );

    await expect(item.getByText("Node")).toBeVisible();
    await expect(item.getByText("#Back-End")).toBeVisible();
    await expect(item.getByText("#Databases")).toBeVisible();
    await expect(item.getByText("18 Apr 2022")).toBeVisible();
    await expect(item.getByText("320 views")).toBeVisible();
    await expect(item.getByText("3 likes")).toBeVisible();
  },
);
