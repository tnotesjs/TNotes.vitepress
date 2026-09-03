# [0013. 配置 SEO 与元信息](https://github.com/tnotesjs/TNotes.vitepress/tree/main/notes/0013.%20%E9%85%8D%E7%BD%AE%20SEO%20%E4%B8%8E%E5%85%83%E4%BF%A1%E6%81%AF)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. head 元信息](#2-head-元信息)
- [3. sitemap](#3-sitemap)
- [4. 站点地图生成](#4-站点地图生成)

<!-- endregion:toc -->

## 1. 概述

VitePress 提供基础的 SEO 能力，可通过 `head` 和 frontmatter 输出元信息和站点地图。

## 2. head 元信息

```ts
export default defineConfig({
  head: [
    ['meta', { name: 'description', content: '文档描述' }],
    ['link', { rel: 'canonical', href: 'https://example.com/' }],
  ],
})
```

在 frontmatter 中也可以为单页设置 `description`：

```yaml
---
title: 页面标题
description: 页面描述
---
```

## 3. sitemap

```ts
export default defineConfig({
  sitemap: {
    hostname: 'https://example.com',
  },
})
```

配置 `sitemap.hostname` 后，构建时会生成 `sitemap.xml`。

## 4. 站点地图生成

构建结束后，在 `.vitepress/dist` 下可以找到 `sitemap.xml`，可提交到 Google Search Console、Bing Webmaster Tools 等搜索引擎。
