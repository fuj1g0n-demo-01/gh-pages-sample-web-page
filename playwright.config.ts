import { defineConfig, devices } from "@playwright/test";

const defaultBaseUrl = "http://localhost:4173/gh-pages-sample-web-page/";
const baseURL = (process.env.BASE_URL || defaultBaseUrl).replace(/\/?$/, "/");

export default defineConfig({
	testDir: "./system-test",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: "html",
	use: {
		baseURL,
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
			url: defaultBaseUrl,
			reuseExistingServer: !process.env.CI,
		},
	}),
});
