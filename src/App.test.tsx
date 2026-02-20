import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

afterEach(() => {
	cleanup();
});

describe("App", () => {
	it("ヒーローセクションのタイトルが表示される", () => {
		render(<App />);
		expect(
			screen.getByRole("heading", { level: 1, name: /Modern Web Stack/i }),
		).toBeInTheDocument();
	});

	it("Tech Stack セクションが表示される", () => {
		render(<App />);
		const headings = screen.getAllByRole("heading", { name: /Tech Stack/i });
		expect(headings.length).toBeGreaterThanOrEqual(1);
	});

	it("すべてのフィーチャーカードが表示される", () => {
		render(<App />);
		const expectedFeatures = [
			"Vite",
			"React 19",
			"TypeScript",
			"CSS Modules",
			"Biome",
			"GitHub Pages",
		];
		for (const feature of expectedFeatures) {
			const headings = screen.getAllByRole("heading", { name: feature });
			expect(headings.length).toBeGreaterThanOrEqual(1);
		}
	});

	it("フッターにGitHub Pagesリンクが存在する", () => {
		render(<App />);
		const links = screen.getAllByRole("link", { name: /GitHub Pages/i });
		expect(links.length).toBeGreaterThanOrEqual(1);
		expect(links[0]).toHaveAttribute("href", "https://github.com");
		expect(links[0]).toHaveAttribute("target", "_blank");
	});

	it("Powered by セクションにスポンサーが表示される", () => {
		render(<App />);
		const poweredBy = screen.getAllByRole("heading", { name: /Powered by/i });
		expect(poweredBy.length).toBeGreaterThanOrEqual(1);
		const github = screen.getAllByRole("heading", { name: "GitHub" });
		expect(github.length).toBeGreaterThanOrEqual(1);
		const microsoft = screen.getAllByRole("heading", { name: "Microsoft" });
		expect(microsoft.length).toBeGreaterThanOrEqual(1);
	});
});
