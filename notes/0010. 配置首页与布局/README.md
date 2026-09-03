# [0010. 配置首页与布局](https://github.com/tnotesjs/TNotes.vitepress/tree/main/notes/0010.%20%E9%85%8D%E7%BD%AE%E9%A6%96%E9%A1%B5%E4%B8%8E%E5%B8%83%E5%B1%80)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. 首页 frontmatter](#2-首页-frontmatter)

<!-- endregion:toc -->

## 1. 概述

首页默认使用 `index.md`，通过 frontmatter 的 `layout: home` 启用首页布局。

## 2. 首页 frontmatter

```md
---
layout: home
hero:
  name: Vitepress
  text: 基于 Vite 的静态站点生成器
  tagline: 简单、快速、可扩展
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
---

## 3. 首页 hero

`hero` 用于定义首页主视觉区域：标题（`name`）、副标题（`text`）、标语（`tagline`）和操作按钮（`actions`）。

```yaml
hero:
  image:
    src: /logo.svg
    alt: logo
```

可通过 `hero.image` 添加首页 Logo 图片。

## 4. 布局配置

```md
---
layout: doc # 文档布局（默认）
# layout: home # 首页布局
# layout: page # 普通页面布局
---
```

`layout` 支持三种取值：`doc`（默认文档）、`home`（首页）、`page`（普通页面）。
