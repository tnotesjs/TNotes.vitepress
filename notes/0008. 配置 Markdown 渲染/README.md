# [0008. 配置 Markdown 渲染](https://github.com/tnotesjs/TNotes.vitepress/tree/main/notes/0008.%20%E9%85%8D%E7%BD%AE%20Markdown%20%E6%B8%B2%E6%9F%93)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. Markdown 扩展](#2-markdown-扩展)
- [3. 代码块语法高亮](#3-代码块语法高亮)
- [4. 自定义组件](#4-自定义组件)

<!-- endregion:toc -->

## 1. 概述

VitePress 使用 markdown-it 渲染 Markdown，并通过扩展提供组件和代码高亮能力。

## 2. Markdown 扩展

VitePress 在标准 Markdown 基础上扩展了以下语法：

- 代码块（fenced code blocks）
- 表格（tables）
- 引用（blockquotes）
- 自定义容器（custom containers）

自定义容器示例：

```md
::: tip 提示
这是一条提示信息。
:::

::: warning 注意
这是一条警告信息。
:::

::: danger 危险
这是一条危险信息。
:::
```

## 3. 代码块语法高亮

代码块自动使用 Shiki 进行语法高亮，无需额外配置：

````md
```js
const message = 'hello'
console.log(message)
```
````

## 4. 自定义组件

可以在 `.vitepress/theme` 中注册全局组件，然后在 Markdown 中直接使用：

```md
<SomeComponent />
```
