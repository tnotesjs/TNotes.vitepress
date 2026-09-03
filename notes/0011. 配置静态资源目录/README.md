# [0011. 配置静态资源目录](https://github.com/tnotesjs/TNotes.vitepress/tree/main/notes/0011.%20%E9%85%8D%E7%BD%AE%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E7%9B%AE%E5%BD%95)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. public 目录](#2-public-目录)
- [3. 引用静态资源](#3-引用静态资源)
- [4. 图片资源](#4-图片资源)

<!-- endregion:toc -->

## 1. 概述

VitePress 的静态资源（图片、favicon 等）默认放在 `.vitepress/public` 目录中。

## 2. public 目录

```
.vitepress/
└── public/
    ├── logo.svg
    └── favicon.ico
```

`public` 目录中的文件会被原样复制到构建产物根目录。

## 3. 引用静态资源

在 Markdown 中以绝对路径引用：

```md
![logo](/logo.svg)
```

或使用 base 路径（部署到子路径时）：

```md
![logo](/base/logo.svg)
```

## 4. 图片资源

```ts
export default defineConfig({
  base: '/', // 站点部署路径
})
```

使用 `base` 配置可以控制静态资源在部署时的路径前缀。
