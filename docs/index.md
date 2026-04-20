# q3cc API 文档站

`api.q3cc.top` 用于托管接口说明文档，`api.q3cc.top/api/*` 由 Cloudflare Worker 提供 API 能力。

## 当前可用接口

### 健康检查

- [`GET /api/ping`](/reference/health/ping)

### 统计信息

- [`GET /api/info`](/reference/stats/info)

## 快速示例

### Ping

```bash
curl https://api.q3cc.top/api/ping
```

返回：

```text
pong
```

### Info

```bash
curl https://api.q3cc.top/api/info
```

返回示例：

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

## 统计说明

- 时间分桶固定为 **UTC+8**
- `/api/info` 返回值包含当前这一次请求
- 用户识别顺序：
  1. `CF-Connecting-IP`
  2. `X-Forwarded-For` 的第一个 IP
  3. `unknown`
