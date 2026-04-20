---
layout: home

hero:
  name: "q3cc API"
  text: "VitePress 文档站"
  tagline: "api.q3cc.top 文档首页（/api/* 由 Worker 接管）"
  actions:
    - theme: brand
      text: API 文档
      link: /reference/
    - theme: alt
      text: GitHub
      link: https://github.com/q3cc/q3cc-api-doc

features:
  - title: 系统状态接口
    details: 提供 GET /api/ping 与 GET /api/info 两个首批接口说明。
  - title: UTC+8 统计口径
    details: /api/info 返回全站和请求用户的总量与当日量（UTC+8）。
  - title: 路由拆分
    details: 文档页走 /reference/*，API 请求走 /api/*，互不冲突。
---
