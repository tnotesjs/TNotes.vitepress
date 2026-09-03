# [0006. 配置侧边栏](https://github.com/tnotesjs/TNotes.vitepress/tree/main/notes/0006.%20%E9%85%8D%E7%BD%AE%E4%BE%A7%E8%BE%B9%E6%A0%8F)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. 侧边栏生成](#2-侧边栏生成)
- [3. 侧边栏配置](#3-侧边栏配置)
- [4. 分组结构](#4-分组结构)

<!-- endregion:toc -->

## 1. 概述

侧边栏在 `themeConfig.sidebar` 中配置，用于展示当前板块的目录结构。

## 2. 侧边栏生成

VitePress 默认根据 Markdown 文件的目录结构自动生成侧边栏，无需手动维护。

## 3. 侧边栏配置

```ts
themeConfig: {
  sidebar: [
    { text: '指南', link: '/guide/' },
    { text: '配置', link: '/guide/config' },
  ],
}
```

- `sidebar`：直接指定一个数组。
- 也可以通过函数 `getSidebar()` 根据路由动态生成。

## 4. 分组结构

```ts
themeConfig: {
  sidebar: [
    {
      text: '指南',
      collapsed: true,
      items: [
        { text: '起步', link: '/guide/start' },
        { text: '配置', link: '/guide/config' },
      ],
    },
  ],
}
```

`collapsed: true` 表示该分组默认折叠。
