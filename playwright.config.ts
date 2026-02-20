import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./system-test",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: "html",
	use: {
		baseURL: process.env.BASE_URL || "http://localhost:4173",
		trace: "on-first-retry",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
	/* ローカル実行時のみ preview サーバーを起動。CI では deploy 済みの URL を使用 */
	...(!process.env.BASE_URL && {
		webServer: {
			command: "pnpm run preview",
			url: "http://localhost:4173",
			reuseExistingServer: !process.env.CI,
		},
	}),
});
