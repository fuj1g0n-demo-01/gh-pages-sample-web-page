import { expect, test } from "@playwright/test";

test.describe("システムテスト（デプロイ済みアプリ）", () => {
	test("ページが正常に読み込まれる", async ({ page }) => {
		await page.goto("/");
		await expect(page).toHaveTitle(/vite-project/i);
	});

	test("ヒーローセクションが表示される", async ({ page }) => {
		await page.goto("/");
		await expect(
			page.getByRole("heading", { name: /Modern Web Stack/i }),
		).toBeVisible();
	});

	test("Tech Stackカードがすべて表示される", async ({ page }) => {
		await page.goto("/");
		const cards = page.locator("article");
		await expect(cards).toHaveCount(6);
	});

	test("外部リンクが正しいhrefを持つ", async ({ page }) => {
		await page.goto("/");
		const githubLink = page.getByRole("link", { name: "GitHub" });
		await expect(githubLink).toHaveAttribute("href", "https://github.com");
		await expect(githubLink).toHaveAttribute("target", "_blank");
	});

	test("ページのレイアウトが崩れていない", async ({ page }) => {
		await page.goto("/");
		const hero = page.locator("section").first();
		await expect(hero).toBeVisible();
		const footer = page.locator("footer");
		await expect(footer).toBeVisible();
	});
});
