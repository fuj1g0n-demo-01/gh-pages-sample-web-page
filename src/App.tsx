import styles from "./App.module.css";

const features = [
	{
		icon: "⚡",
		title: "Vite",
		description: "次世代の高速ビルドツール。HMRで瞬時に変更を反映。",
	},
	{
		icon: "⚛️",
		title: "React 19",
		description: "最新のReactで、モダンなUIを効率的に構築。",
	},
	{
		icon: "📘",
		title: "TypeScript",
		description: "型安全なコードで、バグを未然に防止。",
	},
	{
		icon: "🎨",
		title: "CSS Modules",
		description: "スコープ付きCSSで、スタイルの衝突を回避。",
	},
	{
		icon: "🔧",
		title: "Biome",
		description: "高速なLinter/Formatterで、コード品質を維持。",
	},
	{
		icon: "🚀",
		title: "GitHub Pages",
		description: "GitHub Actionsで自動デプロイ。",
	},
];

function App() {
	return (
		<>
			<section className={styles.hero}>
				<span className={styles.badge}>✨ GitHub Pages Demo</span>
				<h1 className={styles.title}>Modern Web Stack</h1>
				<p className={styles.subtitle}>
					Vite + React + TypeScript で構築された、
					モダンなWebアプリケーションのデモサイトです。
				</p>
			</section>

			<section className={styles.about}>
				<h2 className={styles.aboutTitle}>Powered by</h2>
				<div className={styles.sponsors}>
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener"
						className={styles.sponsorCard}
					>
						<h3 className={styles.sponsorName}>GitHub</h3>
						<p className={styles.sponsorDescription}>
							世界最大の開発者プラットフォーム。
							コードのホスティング、バージョン管理、CI/CD、GitHub
							Pagesによる静的サイトホスティングを提供。
						</p>
					</a>
					<a
						href="https://microsoft.com"
						target="_blank"
						rel="noopener"
						className={styles.sponsorCard}
					>
						<h3 className={styles.sponsorName}>Microsoft</h3>
						<p className={styles.sponsorDescription}>
							GitHubの親会社として、開発者エコシステムを支援。 VS
							Code、TypeScript、Azure など開発者向けツールを提供。
						</p>
					</a>
					<a
						href="https://github.com/features/copilot"
						target="_blank"
						rel="noopener"
						className={styles.sponsorCard}
					>
						<h3 className={styles.sponsorName}>GitHub Copilot</h3>
						<p className={styles.sponsorDescription}>
							AIペアプログラマー。コードの自動補完、チャット、
							コードレビューで開発者の生産性を向上。
						</p>
					</a>
				</div>
			</section>

			<section className={styles.features}>
				<h2 className={styles.featuresTitle}>Tech Stack</h2>
				<div className={styles.grid}>
					{features.map((feature) => (
						<article key={feature.title} className={styles.card}>
							<div className={styles.cardIcon}>{feature.icon}</div>
							<h3 className={styles.cardTitle}>{feature.title}</h3>
							<p className={styles.cardDescription}>{feature.description}</p>
						</article>
					))}
				</div>
			</section>

			<footer className={styles.footer}>
				<p>
					Built with ❤️ using{" "}
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener"
						className={styles.footerLink}
					>
						GitHub Pages
					</a>
				</p>
			</footer>
		</>
	);
}

export default App;
