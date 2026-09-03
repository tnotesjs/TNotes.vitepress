# [0012. 配置构建与部署](https://github.com/tnotesjs/TNotes.vitepress/tree/main/notes/0012.%20%E9%85%8D%E7%BD%AE%E6%9E%84%E5%BB%BA%E4%B8%8E%E9%83%A8%E7%BD%B2)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. 本地构建](#2-本地构建)
- [3. 配置 base](#3-配置-base)
- [4. GitHub Pages 部署](#4-github-pages-部署)

<!-- endregion:toc -->

## 1. 概述

VitePress 通过 `vitepress build` 生成静态站点，可部署到 GitHub Pages 等任何静态托管平台。

## 2. 本地构建

```bash
# 构建
$ pnpm vitepress build

# 本地预览构建产物
$ pnpm vitepress preview
```

构建产物默认输出到 `.vitepress/dist`，可直接部署该目录。

## 3. 配置 base

```ts
export default defineConfig({
  base: '/TNotes.vitepress/',
})
```

部署到子路径（如 GitHub 项目页）时需要设置 `base`，与仓库名一致。

## 4. GitHub Pages 部署

```bash
# 安装依赖并构建
$ pnpm install
$ pnpm vitepress build

# 发布构建产物
$ npx gh-pages -d .vitepress/dist
```

也可以使用 GitHub Actions 在 push 后自动构建并部署到 `gh-pages` 分支。
