# CustomFlow - VSCode 插件

**CustomFlow** 是一个允许用户自定义操作流，流式处理文本的 VSCode 插件。用户可以配置一系列文本操作步骤，并通过快捷键或命令快速执行，支持多种文本处理功能，包括大小写转换、空格去除、时间戳转换等。

## 功能

- 支持多个内置的文本处理函数：大小写转换、去除空格、加减乘除、Base64 编解码等。
- 支持时间戳操作：将日期转换为时间戳，或将时间戳转换为日期。
- 支持用户自定义操作步骤，并按顺序组合成操作流。
- 支持将处理后的文本复制到剪贴板或替换编辑器中的选中文本。

## 安装

1. 打开 VSCode 编辑器。
2. 按 `Ctrl+P` (或 `Cmd+P` 在 Mac 上)。
3. 输入并执行命令 `ext install customFlow`。
4. 或者从 [VSCode 插件市场](https://marketplace.visualstudio.com) 搜索 `CustomFlow` 安装插件。

## 配置

插件提供了一个可配置的操作列表，可以在 VSCode 设置中进行配置。打开设置文件并添加如下内容：

### 示例配置

```json
{
  "customFlow.operations": [
    {
      "name": "Text Operations",
      "steps": [
        { "name": "uppercase", "params": {} },
        { "name": "reverse", "params": {} }
      ]
    },
    {
      "name": "Timestamp Operations",
      "steps": [
        { "name": "getCurrentTimestampMillis", "params": {} },
        { "name": "dateToTimestampMillis", "params": { "date": "2024-11-21" } },
        { "name": "timestampMillisToDate", "params": { "timestamp": "1711173123000" } }
      ]
    }
  ]
}
```

### 配置项

- **`customFlow.operations`**: 一个操作步骤列表，用户可以定义多个操作。每个操作包含多个步骤，每个步骤可以指定一个函数和参数。
- **`params`**: 可以为空或指定对象，包含该步骤所需的参数。

## 使用

- 使用快捷键 `Ctrl+Shift+Cmd+X`（Windows/Linux: `Ctrl+Shift+Cmd+X`，Mac: `Cmd+Shift+Ctrl+X`）触发插件。
- 在编辑器中选中文本，插件会弹出操作选择框，允许用户选择要执行的操作。
- 执行操作后，处理后的文本将根据配置的动作进行处理：可以替换选中的文本或将结果复制到剪贴板。

## 支持的操作

### 文本操作

| 操作名称     | 描述               | 参数示例  |
|--------------|--------------------|-----------|
| **uppercase** | 将文本转换为大写   | 无        |
| **lowercase** | 将文本转换为小写   | 无        |
| **reverse**   | 反转文本顺序       | 无        |
| **trim**      | 去掉文本两端的空白字符 | 无     |

### 数字操作

| 操作名称     | 描述               | 参数示例  |
|--------------|--------------------|-----------|
| **add**       | 对选中的文本（数字）进行加法操作 | `num: 10` |
| **subtract**  | 对选中的文本（数字）进行减法操作 | `num: 5`  |
| **multiply**  | 对选中的文本（数字）进行乘法操作 | `num: 2`  |
| **divide**    | 对选中的文本（数字）进行除法操作 | `num: 2`  |

### 时间戳操作

| 操作名称                       | 描述                          | 参数示例                 |
|----------------------------------|-------------------------------|--------------------------|
| **getCurrentTimestampMillis**    | 获取当前时间戳（毫秒）        | 无                       |
| **getCurrentTimestampSeconds**   | 获取当前时间戳（秒）          | 无                       |
| **dateToTimestampMillis**        | 将日期转换为时间戳（毫秒）    | `date: "2024-11-21"`      |
| **timestampMillisToDate**        | 将时间戳（毫秒）转换为日期    | `timestamp: 1711173123000`|
| **timestampSecondsToDate**       | 将时间戳（秒）转换为日期     | `timestamp: 1711173123`   |

### 编码与解码操作

| 操作名称     | 描述               | 参数示例  |
|--------------|--------------------|-----------|
| **base64encode** | 将文本编码为 Base64 | 无        |
| **base64decode** | 将 Base64 编码的文本解码 | 无    |