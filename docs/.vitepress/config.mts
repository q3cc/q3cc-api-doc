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
          { text: '概览', link: '/' }
        ]
      },
      {
        text: 'API 文档',
        items: [
          { text: 'API 概览', link: '/api/' }
        ]
      },
      {
        text: '健康检查',
        items: [
          { text: 'GET /api/ping', link: '/api/health/ping' }
        ]
      },
      {
        text: '统计信息',
        items: [
          { text: 'GET /api/info', link: '/api/stats/info' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/q3cc/q3cc-api-doc' }
    ]
  }
});
