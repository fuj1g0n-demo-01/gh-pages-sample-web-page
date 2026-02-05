# gh-pages-sample-web-page

GitHub Pages にデプロイされたモダンな Web アプリケーションのデモサイトです。

## Demo

**https://reimagined-fiesta-o7ep3yl.pages.github.io/**

## Tech Stack

- **Vite** - 高速ビルドツール
- **React 19** - UI ライブラリ
- **TypeScript** - 型安全な JavaScript
- **CSS Modules** - スコープ付き CSS
- **Biome** - Linter / Formatter
- **GitHub Actions** - CI/CD
- **GitHub Pages** - ホスティング

## Prerequisites

本リポジトリに必要な依存関係（Node.js、pnpm など）はすべて [devbox](https://www.jetify.com/devbox/) で管理されています。

devbox をインストールするには、[公式インストールガイド](https://www.jetify.com/docs/devbox/installing_devbox/)を参照してください。

## Development

```bash
# devbox 環境を起動
devbox shell

# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm run dev

# ビルド
pnpm run build

# プレビュー
pnpm run preview

# リント
pnpm run lint

# フォーマット
pnpm run format
```
