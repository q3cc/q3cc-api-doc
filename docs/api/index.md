# API 文档

首批 API 已按功能拆分为独立页面，便于后续继续扩展。

## 健康检查

- [`GET /api/ping`](/api/health/ping)
  - 用途：接口健康检查
  - 响应：纯文本 `pong`

## 统计信息

- [`GET /api/info`](/api/stats/info)
  - 用途：查询全站与当前请求用户的统计信息
  - 响应：JSON
  - 时间口径：固定使用 `UTC+8`

## 快速导航

- 健康检查 → [`/api/health/ping`](/api/health/ping)
- 统计信息 → [`/api/stats/info`](/api/stats/info)
