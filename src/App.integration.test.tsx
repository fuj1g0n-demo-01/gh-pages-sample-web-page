import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

afterEach(() => {
	cleanup();
});

describe("Integration: コンポーネント間結合テスト", () => {
	it("Hero → Features → Footer の順でセクションが描画される", () => {
		render(<App />);
		const sections = document.querySelectorAll("section");
		expect(sections.length).toBeGreaterThanOrEqual(3);

		// hero が最初、features が最後のセクション
		const firstSection = sections[0];
		const hero = within(firstSection).queryByText(/Modern Web Stack/i);
		expect(hero).toBeInTheDocument();

		// footer が存在
		const footer = document.querySelector("footer");
		expect(footer).toBeInTheDocument();
	});

	it("features データが全カードとして正しく描画される", () => {
		render(<App />);
		const articles = document.querySelectorAll("article");
		expect(articles).toHaveLength(6);

		// 各カードにアイコン・タイトル・説明が含まれる
		for (const article of articles) {
			const heading = article.querySelector("h3");
			expect(heading).not.toBeNull();
			expect(heading?.textContent?.length).toBeGreaterThan(0);

			const description = article.querySelector("p");
			expect(description).not.toBeNull();
			expect(description?.textContent?.length).toBeGreaterThan(0);
		}
	});

	it("Powered by セクションのリンクが外部リンクとして正しく構成されている", () => {
		render(<App />);
		const aboutSection = document.querySelectorAll("section")[1];
		expect(aboutSection).toBeDefined();

		const sponsorLinks = aboutSection.querySelectorAll("a");
		expect(sponsorLinks).toHaveLength(2);

		for (const link of sponsorLinks) {
			expect(link).toHaveAttribute("target", "_blank");
			expect(link).toHaveAttribute("rel", "noopener");

			// リンク内にタイトルと説明が両方含まれる
			const heading = link.querySelector("h3");
			expect(heading).not.toBeNull();
			const paragraph = link.querySelector("p");
			expect(paragraph).not.toBeNull();
		}
	});

	it("同一 href を持つリンクが意図通りに配置されている", () => {
		render(<App />);
		const githubLinks = screen
			.getAllByRole("link")
			.filter((l) => l.getAttribute("href") === "https://github.com");

		// Powered by のGitHub + フッターの GitHub Pages = 2箇所
		expect(githubLinks).toHaveLength(2);
	});
});
