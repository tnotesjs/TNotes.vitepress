# [0007. 配置本地搜索](https://github.com/tnotesjs/TNotes.vitepress/tree/main/notes/0007.%20%E9%85%8D%E7%BD%AE%E6%9C%AC%E5%9C%B0%E6%90%9C%E7%B4%A2)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. 启用本地搜索](#2-启用本地搜索)
- [3. 搜索配置](#3-搜索配置)
- [4. 中英文文案](#4-中英文文案)

<!-- endregion:toc -->

## 1. 概述

VitePress 默认不提供全文搜索，可以在 `themeConfig.search` 中启用内置的本地搜索（Local Search）。

## 2. 启用本地搜索

```ts
themeConfig: {
  search: {
    provider: 'local',
  },
}
```

将 `provider` 设为 `local` 即可启用本地搜索，无需额外安装依赖。

## 3. 搜索配置

```ts
themeConfig: {
  search: {
    provider: 'local',
    options: {
      translations: {
        button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
        modal: {
          noResultsText: '未找到相关内容',
          resetButtonTitle: '清除查询条件',
          footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
        },
      },
      miniSearch: {
        searchOptions: {
          fuzzy: 0.2, // 模糊匹配
          boost: { title: 2 }, // 标题权重
        },
      },
    },
  },
}
```

## 4. 中英文文案

`options.translations` 用于自定义搜索框和弹窗的中文文案，便于兼顾中英文站点的显示效果。
