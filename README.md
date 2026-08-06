# gh-pages-sample-web-page

GitHub Pages にデプロイされたモダンな Web アプリケーションのデモサイトです。

## Demo

**https://fuj1g0n-demo-01.github.io/gh-pages-sample-web-page/**

## Tech Stack

- **Vite** - 高速ビルドツール
- **React 19** - UI ライブラリ
- **TypeScript** - 型安全な JavaScript
- **CSS Modules** - スコープ付き CSS
- **Biome** - Linter / Formatter
- **GitHub Actions** - CI/CD
- **GitHub Pages** - ホスティング

## Prerequisites

本リポジトリに必要な依存関係（Node.js、pnpm など）はすべて [Nix](https://nixos.org/) の flake（`flake.nix`）で管理されています。

Nix をインストールするには、[Determinate Nix Installer](https://github.com/DeterminateSystems/nix-installer) の利用を推奨します。

開発シェルの自動読み込みには [direnv](https://direnv.net/) と [nix-direnv](https://github.com/nix-community/nix-direnv) を使用します。

初回のみ、リポジトリのルートで設定を許可してください。

```bash
direnv allow
```

## Development

```bash
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
