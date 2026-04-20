# `GET https://api.q3cc.top/img`

> 分组：图像服务（随机图）

返回随机图片地址，默认 `302` 重定向。

## 请求

```http
GET /img HTTP/1.1
Host: api.q3cc.top
```

可选查询参数：

- `w`：图片宽度，默认 `1920`，范围 `64-4096`
- `h`：图片高度，默认 `1080`，范围 `64-4096`
- `type=json`：返回 JSON（图片直链）

## 响应

- 状态码：`302 Found`
- Header：`Location: https://picsum.photos/seed/{seed}/{w}/{h}.jpg`

## 示例

```bash
curl -I "https://api.q3cc.top/img?w=640&h=360"
```

示例响应头：

```text
HTTP/2 302
location: https://picsum.photos/seed/xxxxxxxx/640/360.jpg
cache-control: no-store
```

JSON 模式：

```bash
curl "https://api.q3cc.top/img?w=640&h=360&type=json"
```

示例响应：

```json
{
  "url": "https://picsum.photos/seed/xxxxxxxx/640/360.jpg",
  "width": 640,
  "height": 360
}
```

## 说明

- 每次请求会生成新的随机 seed
- 支持 `GET` / `HEAD`
- 其他方法返回 `405 Method Not Allowed`
