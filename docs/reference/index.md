# API 文档

首批 API 已按功能拆分为独立页面，便于后续继续扩展。

## 系统状态

- [`GET /api/ping`](/reference/health/ping)
  - 子类：健康检查
  - 用途：接口健康检查
  - 响应：纯文本 `pong`

- [`GET /api/info`](/reference/stats/info)
  - 子类：统计信息
  - 用途：查询全站与当前请求用户的统计信息
  - 响应：JSON
  - 时间口径：固定使用 `UTC+8`

## 图像服务

- [`GET /img`](/reference/image/random)
  - 子类：随机图
  - 用途：返回随机图地址
  - 响应：`302` 重定向、`type=url` 纯文本直链、或 `type=json` JSON

## 语录服务

- [`GET /api/hitokoto`](/reference/content/hitokoto)
  - 子类：一言
  - 用途：从本地化句子包中随机返回一条一言
  - 响应：JSON 或 `encode=text` / `type=text` 纯文本

## 日历服务

- [`GET /api/holidays`](/reference/calendar/holidays)
  - 子类：节假日
  - 用途：查询某天是否放假、普通日或调休工作日
  - 响应：JSON 或 `type=pithy` 纯文本

## 快速导航

- 系统状态 / 健康检查 → [`/reference/health/ping`](/reference/health/ping)
- 系统状态 / 统计信息 → [`/reference/stats/info`](/reference/stats/info)
- 图像服务 / 随机图 → [`/reference/image/random`](/reference/image/random)
- 语录服务 / 一言 → [`/reference/content/hitokoto`](/reference/content/hitokoto)
- 日历服务 / 节假日 → [`/reference/calendar/holidays`](/reference/calendar/holidays)
