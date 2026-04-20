# `GET /holidays`

> 分组：日历服务（节假日）

判断某一天是否为节假日、普通日或调休工作日。

## 请求

```http
GET /holidays HTTP/1.1
Host: api.q3cc.top
```

默认查询今天，按 `UTC+8` 计算日期。

可选查询参数：

- `y`：年份
- `m`：月份
- `d`：日期
- `type=pithy`：直接返回短文本
- `type=alarm`：返回闹钟模式工作/休息状态

说明：

- `y` / `m` / `d` 需要一起传
- 当前内置数据范围：`2020-01-01` ~ `2026-12-31`
- `type` 不传时返回 JSON

## `type=pithy`

返回值固定为以下 3 种之一：

- `ture`：放假
- `flase`：非节假日
- `worker`：调休工作日

示例：

```bash
curl "https://api.q3cc.top/holidays?type=pithy&y=2025&m=10&d=1"
```

示例响应：

```text
ture
```

## `type=alarm`

返回值固定为以下 2 种之一：

- `work`：工作日
- `vacation`：非工作日

判定规则：

- 周一到周五，且不是法定节假日 → `work`
- 调休工作日 → `work`
- 节假日 → `vacation`
- 普通周末 → `vacation`

示例：

```bash
curl "https://api.q3cc.top/holidays?type=alarm&y=2026&m=4&d=20"
curl "https://api.q3cc.top/holidays?type=alarm&y=2026&m=10&d=10"
curl "https://api.q3cc.top/holidays?type=alarm&y=2025&m=10&d=1"
```

示例响应：

```text
work
```

## JSON 响应

示例：

```bash
curl "https://api.q3cc.top/holidays?y=2025&m=10&d=1"
```

示例响应：

```json
{
  "date": "2025-10-01",
  "year": 2025,
  "month": 10,
  "day": 1,
  "status": "ture",
  "isHoliday": true,
  "isWorkday": false,
  "name": "国庆节、中秋节"
}
```

字段说明：

- `status`：`ture` / `flase` / `worker`
- `isHoliday`：是否放假
- `isWorkday`：是否为调休工作日
- `name`：节日名称；如果是调休工作日则返回类似 `春节调休`

## 示例

查询今天：

```bash
curl "https://api.q3cc.top/holidays"
```

查询调休工作日：

```bash
curl "https://api.q3cc.top/holidays?type=pithy&y=2026&m=10&d=10"
```

查询闹钟模式：

```bash
curl "https://api.q3cc.top/holidays?type=alarm&y=2026&m=4&d=20"
```

查询普通日：

```bash
curl "https://api.q3cc.top/holidays?y=2026&m=4&d=20"
```

## 错误

- `400 Bad Request`
  - `y` / `m` / `d` 未同时提供
  - 日期非法
  - 超出 `2020-01-01` ~ `2026-12-31`
- `405 Method Not Allowed`
  - 仅支持 `GET` / `HEAD`
