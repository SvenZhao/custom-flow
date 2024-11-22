
const encoding = [
  { "name": "encoding:urlencode", "steps": [{ "name": "urlencode", "params": {} }] },
  { "name": "encoding:urldecode", "steps": [{ "name": "urldecode", "params": {} }] },
  { "name": "encoding:base64encode", "steps": [{ "name": "base64encode", "params": {} }] },
  { "name": "encoding:base64decode", "steps": [{ "name": "base64decode", "params": {} }] }
]
const times = [
  { "name": "times:将日期字符串转换为时间戳（毫秒）", "steps": [{ "name": "dateToTimestampMillis", "params": {} }] },
  { "name": "times:将时间戳（毫秒）转换为日期字符串", "steps": [{ "name": "timestampMillisToDate", "params": {} }] },
]
export const DEFAULT_OPERATIONS = [
  ...encoding,
  ...times
];