import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'q3cc API',
  description: 'api.q3cc.top 接口说明文档',
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'API 文档', link: '/api/' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '概览', link: '/' },
          { text: '首批 API', link: '/api/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/q3cc/q3cc-api-doc' }
    ]
  }
});
