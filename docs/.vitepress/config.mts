import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Q3CC API',
  description: 'api.q3cc.top 接口说明文档',
  lang: 'zh-CN',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'API 文档', link: '/reference/' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '概览', link: '/' }
        ]
      },
      {
        text: '系统状态',
        items: [
          { text: 'GET /api/ping', link: '/reference/health/ping' },
          { text: 'GET /api/info', link: '/reference/stats/info' }
        ]
      },
      {
        text: '图像服务',
        items: [
          { text: 'GET /img', link: '/reference/image/random' }
        ]
      },
      {
        text: '日历服务',
        items: [
          { text: 'GET /api/holidays', link: '/reference/calendar/holidays' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/q3cc/q3cc-api-doc' }
    ]
  }
});
