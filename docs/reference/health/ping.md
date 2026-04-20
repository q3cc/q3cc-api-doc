# `GET /api/ping`

> 分组：系统状态（健康检查）

用于健康检查。

## 请求

```http
GET /api/ping HTTP/1.1
Host: api.q3cc.top
```

## 响应

- 状态码：`200 OK`
- 类型：`text/plain; charset=utf-8`

```text
pong
```

## cURL 示例

```bash
curl https://api.q3cc.top/api/ping
```
