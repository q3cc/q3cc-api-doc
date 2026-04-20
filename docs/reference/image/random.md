# `GET /img`

> 分组：图像服务（随机图）

从预置图片池中返回随机图片，默认 `302` 重定向到图片直链。

## 请求

```http
GET /img HTTP/1.1
Host: api.q3cc.top
```

可用路径：

- `/img`：自动按设备类型挑选图片池
- `/img/pe`：固定从竖屏池返回
- `/img/pc`：固定从横屏池返回
- `/img/url`：直接返回图片直链文本

可选查询参数：

- `type=url`：返回纯文本图片直链
- `type=json`：返回 JSON 图片直链

## 响应

- 状态码：`302 Found`
- Header：`Location: https://list.yppp.net/d/image/...`

## 示例

```bash
curl -I "https://api.q3cc.top/img"
```

示例响应头：

```text
HTTP/2 302
location: https://list.yppp.net/d/image/2026-02-15-d04a3ad05a815966831fdbaee96ba802.jpg
cache-control: no-store
```

竖屏模式：

```bash
curl -I "https://api.q3cc.top/img/pe"
```

横屏模式：

```bash
curl -I "https://api.q3cc.top/img/pc"
```

纯文本直链：

```bash
curl "https://api.q3cc.top/img/url"
curl "https://api.q3cc.top/img?type=url"
```

JSON 模式：

```bash
curl "https://api.q3cc.top/img?type=json"
```

示例响应：

```json
{
  "url": "https://list.yppp.net/d/image/2026-02-15-d04a3ad05a815966831fdbaee96ba802.jpg"
}
```

## 说明

- `sec-ch-ua-mobile=?1` 或常见移动端 UA 默认走竖屏池
- 其他请求默认走横屏池
- `/img/pe` 与 `/img/pc` 可强制指定图片池
- `/img/url` 与 `type=url` 返回纯文本直链
- `type=json` 返回 JSON 格式直链
- 支持 `GET` / `HEAD`
- 其他方法返回 `405 Method Not Allowed`
