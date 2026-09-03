# [0005. 配置导航栏](https://github.com/tnotesjs/TNotes.vitepress/tree/main/notes/0005.%20%E9%85%8D%E7%BD%AE%E5%AF%BC%E8%88%AA%E6%A0%8F)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. 基本用法](#2-基本用法)
- [3. 链接 icon](#3-链接-icon)
- [4. 多级菜单](#4-多级菜单)

<!-- endregion:toc -->

## 1. 概述

导航栏（导航菜单）在 `themeConfig.nav` 中配置，显示在页面顶部。

## 2. 基本用法

```ts
export default defineConfig({
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],
  },
})
```

每个菜单项由 `text`（显示文字）和 `link`（目标路径）组成。

## 3. 链接 icon

```ts
themeConfig: {
  nav: [
    {
      text: 'GitHub',
      link: 'https://github.com/tnotesjs/TNotes.vitepress',
      icon: 'github', // 支持内置图标或组件名
    },
  ],
}
```

添加 `icon` 字段即可在菜单文字前显示图标。

## 4. 多级菜单

```ts
themeConfig: {
  nav: [
    {
      text: '指南',
      items: [
        { text: '起步', link: '/guide/start' },
        { text: '配置', link: '/guide/config' },
      ],
    },
  ],
}
```

使用 `items` 数组可以生成下拉子菜单。
