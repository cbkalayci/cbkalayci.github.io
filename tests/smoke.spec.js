const { test, expect } = require("@playwright/test");

const pages = [
  "/",
  "/cv/",
  "/research/",
  "/publications/",
  "/teaching/",
  "/projects/",
  "/experience/",
  "/service/"
];

test("sidebar links are visible on every page", async ({ page }) => {
  for (const route of pages) {
    await page.goto(route);
    await expect(page.locator(".contact-list a[href='mailto:cbkalayci@pau.edu.tr']")).toBeVisible();
    await expect(page.locator(".contact-list a[href='https://www.pau.edu.tr/endustri/']")).toBeVisible();
    await expect(page.locator(".contact-list a[href='https://www.pau.edu.tr/']")).toBeVisible();
    await expect(page.locator(".contact-list a[href='https://www.linkedin.com/in/cbkalayci']")).toBeVisible();
  }
});

test("language toggle persists while navigating", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "TR" }).click();
  await expect(page.locator(".top-nav a[href='/']")).toHaveText("Ana Sayfa");

  await page.locator(".top-nav a[href='/cv/']").click();
  await expect(page.locator("h1")).toHaveText("Özgeçmiş");
  await expect(page.locator(".subtitle")).toHaveText("Kapsamlı akademik profil");
});

test("publications search and year filters work", async ({ page }) => {
  await page.goto("/publications/");

  const allItems = page.locator(".pub-list > li");
  expect(await allItems.count()).toBeGreaterThan(20);

  await page.fill("#pub-search", "cmsa");
  await expect(page.locator(".pub-list > li:visible")).toHaveCount(1);
  await expect(page.locator(".pub-list > li:visible")).toContainText("CMSA based on set covering models for packing and routing problems");

  await page.fill("#pub-search", "");
  await page.selectOption("#pub-year-filter", "2026");
  await expect(page.locator(".pub-list > li:visible")).toHaveCount(1);
  await expect(page.locator(".pub-list > li:visible")).toContainText("Soft Computing");
});
