# [0004. 配置站点信息](https://github.com/tnotesjs/TNotes.vitepress/tree/main/notes/0004.%20%E9%85%8D%E7%BD%AE%E7%AB%99%E7%82%B9%E4%BF%A1%E6%81%AF)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. 站点标题 title](#2-站点标题-title)
- [3. 站点描述 description](#3-站点描述-description)
- [4. 站点主题 theme](#4-站点主题-theme)
- [5. 站点头像 head](#5-站点头像-head)

<!-- endregion:toc -->

## 1. 概述

站点信息在 `.vitepress/config.mts` 中配置，主要影响浏览器标题、SEO 和页面 `head` 标签。

## 2. 站点标题 title

```ts
export default defineConfig({
  lang: 'zh-CN',
  title: 'My Docs',
  titleTemplate: ':title - My Docs',
})
```

- `title`：站点的默认标题。
- `titleTemplate`：动态拼接标题，`:title` 会被替换为当前页面标题。

## 3. 站点描述 description

```ts
export default defineConfig({
  description: '基于 VitePress 的文档网站',
})
```

`description` 会被输出到 `<meta name="description">`，用于 SEO 和分享预览。

## 4. 站点主题 theme

```ts
export default defineConfig({
  theme: {
    // 默认主题配置项
  },
})
```

`theme` 是站点级主题配置，最常用的是 `themeConfig`（导航、侧边栏、搜索等）。

## 5. 站点头像 head

```ts
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // ['meta', { name: 'author', content: 'tnotesjs' }],
  ],
})
```

`head` 是一个数组，用于向页面 `<head>` 注入额外的标签（如 favicon、自定义 meta 等）。
