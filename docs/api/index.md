# 首批 API

## `GET /api/ping`

用于健康检查。

### 请求

```http
GET /api/ping HTTP/1.1
Host: api.q3cc.top
```

### 响应

- 状态码：`200 OK`
- 类型：`text/plain; charset=utf-8`

```text
pong
```

---

## `GET /api/info`

返回全站与当前请求用户的统计信息。

### 请求

```http
GET /api/info HTTP/1.1
Host: api.q3cc.top
```

### 响应

- 状态码：`200 OK`
- 类型：`application/json; charset=utf-8`

```json
{
  "timezone": "UTC+8",
  "date": "2026-04-20",
  "requestUser": "203.0.113.8",
  "site": {
    "totalRequests": 12,
    "dailyRequests": 7
  },
  "requestUserStats": {
    "totalRequests": 3,
    "dailyRequests": 2
  }
}
```

### 字段说明

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `timezone` | `string` | 固定为 `UTC+8` |
| `date` | `string` | 当前 UTC+8 日期，格式 `YYYY-MM-DD` |
| `requestUser` | `string` | 当前请求用户标识，默认是 IP |
| `site.totalRequests` | `number` | 全站累计调用次数 |
| `site.dailyRequests` | `number` | 全站 UTC+8 当日调用次数 |
| `requestUserStats.totalRequests` | `number` | 当前请求用户累计调用次数 |
| `requestUserStats.dailyRequests` | `number` | 当前请求用户 UTC+8 当日调用次数 |

### 统计口径

- 只统计已实现接口命中
- 未实现的 `/api/*` 会返回 `404`，且**不会进入统计**
- `/api/info` 返回值**包含当前这次调用**
- 用户识别优先级：
  1. `CF-Connecting-IP`
  2. `X-Forwarded-For` 首个 IP
  3. `unknown`
