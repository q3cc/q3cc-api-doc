# `GET /api/hitokoto`

> 分组：语录服务（一言）

从本地化的一言句子包中随机返回一条语录数据。

当前数据源已内置到项目内，来自 `hitokoto-osc/sentences-bundle`。

## 请求

```http
GET /api/hitokoto HTTP/1.1
Host: api.q3cc.top
```

可选查询参数：

- `c`：分类 key，可重复传；不传时默认全分类随机
- `encode=text`：只返回一言文本
- `type=text`：`encode=text` 的兼容别名
- `min_length`：最短长度，非负整数
- `max_length`：最长长度，非负整数

分类对照：

| key | 分类 |
| --- | --- |
| `a` | 动画 |
| `b` | 漫画 |
| `c` | 游戏 |
| `d` | 文学 |
| `e` | 原创 |
| `f` | 网络 |
| `g` | 其他 |
| `h` | 影视 |
| `i` | 诗词 |
| `j` | 网易云 |
| `k` | 哲学 |
| `l` | 抖机灵 |

## JSON 响应

默认返回 JSON：

```bash
curl "https://api.q3cc.top/api/hitokoto?c=a"
```

示例响应：

```json
{
  "id": 1,
  "uuid": "9818ecda-9cbf-4f2a-9af8-8136ef39cfcd",
  "hitokoto": "与众不同的生活方式很累人呢，因为找不到借口。",
  "type": "a",
  "from": "幸运星",
  "from_who": null,
  "creator": "跳舞的果果",
  "creator_uid": 0,
  "reviewer": 0,
  "commit_from": "web",
  "created_at": "1468605909",
  "length": 22
}
```

字段说明：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | `number` | 原始句子 ID |
| `uuid` | `string` | 句子唯一标识 |
| `hitokoto` | `string` | 一言正文 |
| `type` | `string` | 分类 key |
| `from` | `string` | 来源作品或来源说明 |
| `from_who` | `string \| null` | 具体角色 / 作者 / 评论来源 |
| `creator` | `string` | 收录者 |
| `creator_uid` | `number` | 收录者 ID |
| `reviewer` | `number` | 审核者 ID |
| `commit_from` | `string` | 提交来源 |
| `created_at` | `string` | 原始创建时间戳（秒） |
| `length` | `number` | 正文长度 |

## 纯文本响应

```bash
curl "https://api.q3cc.top/api/hitokoto?c=i&encode=text"
curl "https://api.q3cc.top/api/hitokoto?c=i&type=text"
```

示例响应：

```text
欲买桂花同载酒，终不似，少年游。
```

## 过滤示例

多分类随机：

```bash
curl "https://api.q3cc.top/api/hitokoto?c=a&c=c&c=h"
```

限制长度：

```bash
curl "https://api.q3cc.top/api/hitokoto?c=k&min_length=8&max_length=20"
```

## 说明

- 支持 `GET` / `HEAD`
- 当 `c` 全部无效时，会回退到 `a`（动画）
- 未命中过滤条件时返回 `404`
- 长度参数非法时返回 `400`
- 返回结果来自项目内本地数据，不依赖运行时转发

## 错误

- `400 Bad Request`
  - `min_length` 或 `max_length` 不是非负整数
  - `max_length < min_length`
- `404 Not Found`
  - 当前筛选条件下没有匹配句子
- `405 Method Not Allowed`
  - 仅支持 `GET` / `HEAD`
