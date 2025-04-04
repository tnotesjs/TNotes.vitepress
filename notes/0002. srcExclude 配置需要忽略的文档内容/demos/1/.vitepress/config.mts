import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcExclude: ['./api-examples.md', './hidden'],
  vite: {
    server: {
      watch: {
        // 改动这些内容不会再热更。
        ignored: ['./api-examples.md', '**/hidden/**'],
      },
    },
    plugins: [
      {
        // 处理 srcExclude 仅在生产环境 build 有效的问题，在开发环境 dev 如果通过手动修改地址栏跳转，应该被隐藏的文档依旧会被 vitepress 处理，这个插件可以让请求到的内容为空。
        name: 'ignore-hidden',
        enforce: 'pre',
        load(id) {
          if (id.includes('api-examples') || id.includes('hidden')) {
            return ''
          }
        },
      },
    ],
  },

  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
