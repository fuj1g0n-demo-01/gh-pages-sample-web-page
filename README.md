# gh-pages-sample-web-page

GitHub Pages にデプロイされたモダンな Web アプリケーションのデモサイトです。

## Demo

**https://swse-demo-01.github.io/gh-pages-sample-web-page/**

## Tech Stack

- **Vite** - 高速ビルドツール
- **React 19** - UI ライブラリ
- **TypeScript** - 型安全な JavaScript
- **CSS Modules** - スコープ付き CSS
- **Biome** - Linter / Formatter
- **GitHub Actions** - CI/CD
- **GitHub Pages** - ホスティング

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

## License

MIT
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
