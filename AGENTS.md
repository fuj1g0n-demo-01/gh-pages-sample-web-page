# AGENTS.md

このドキュメントは、プロジェクトの技術スタックを定義します。

## 技術スタック

| 項目 | 技術 | バージョン |
|------|------|-----------|
| ビルドツール | Vite | 6.x |
| UI ライブラリ | React | 19.x |
| 言語 | TypeScript | 5.x |
| CSS 管理 | CSS Modules | - |
| パッケージマネージャー | pnpm | latest |
| Node.js | Node.js | 22 LTS |
| Linter/Formatter | Biome | latest |
| デプロイ | GitHub Actions | - |
| ホスティング | GitHub Pages | - |
| 開発環境 | devbox | latest |

## 設定

- **Base Path**: `/gh-pages-sample-web-page/`
- **ディレクトリ構成**: flat（小規模向け）

## npm scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "biome check .",
    "format": "biome format --write ."
  }
}
```
