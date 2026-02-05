# AGENTS.md

このドキュメントは、プロジェクトの技術スタックと各フェーズでの検証方法を定義します。

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

## 設定

- **Base Path**: `/gh-pages-sample-web-page/`
- **ディレクトリ構成**: flat（小規模向け）

## セットアップフェーズと検証

### Phase 1: プロジェクト初期化

**実行内容**:
```bash
pnpm create vite . --template react-ts
pnpm install
```

**検証**:
```bash
pnpm run dev          # 開発サーバーが起動すること
pnpm run build        # ビルドが成功すること
pnpm run preview      # プレビューが動作すること
```

### Phase 2: Biome セットアップ

**実行内容**:
```bash
pnpm add -D @biomejs/biome
pnpm biome init
```

**検証**:
```bash
pnpm biome check .    # lint/format チェックが通ること
pnpm biome format --write .  # フォーマットが適用されること
```

### Phase 3: Vite 設定（GitHub Pages 対応）

**実行内容**:
- `vite.config.ts` に `base: '/gh-pages-sample-web-page/'` を設定

**検証**:
```bash
pnpm run build        # dist/ 内のパスが正しいこと
```

### Phase 4: GitHub Actions 設定

**実行内容**:
- `.github/workflows/deploy.yml` を作成

**検証**:
```bash
# ローカルでは以下を確認
cat .github/workflows/deploy.yml  # ファイルが存在すること

# GitHub にプッシュ後
# - Actions タブでワークフローが成功すること
# - GitHub Pages で公開されること
```

### Phase 5: 動作確認

**検証**:
- `https://<username>.github.io/gh-pages-sample-web-page/` にアクセス
- ページが正しく表示されること

## npm scripts（予定）

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

## ディレクトリ構成（予定）

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
│   ├── App.tsx
│   ├── App.module.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── biome.json
├── AGENTS.md
└── README.md
```
