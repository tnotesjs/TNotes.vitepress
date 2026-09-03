# [0009. 配置主题外观](https://github.com/tnotesjs/TNotes.vitepress/tree/main/notes/0009.%20%E9%85%8D%E7%BD%AE%E4%B8%BB%E9%A2%98%E5%A4%96%E8%A7%82)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. 自定义主题](#2-自定义主题)
- [3. 布局组件](#3-布局组件)
- [4. 主题切换](#4-主题切换)

<!-- endregion:toc -->

## 1. 概述

VitePress 默认主题可通过 `.vitepress/theme` 目录自定义外观和布局。

## 2. 自定义主题

```ts
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件等
  },
}
```

通过继承 `DefaultTheme` 并覆盖 `enhanceApp`，可以保留默认主题能力并做扩展。

## 3. 布局组件

可以在 `.vitepress/theme/Layout.vue` 中重写布局：

```vue
<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-nav-before>
      自定义侧边栏上方内容
    </template>
  </Layout>
</template>
```

## 4. 主题切换

```ts
themeConfig: {
  appearance: 'dark', // 'dark' | 'light' | true
}
```

`appearance` 控制默认主题和切换按钮。设为 `true` 时启用跟随系统。
