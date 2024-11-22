import dayjs from 'dayjs';

/**
 * 将日期字符串转换为时间戳（毫秒或秒）
 * @param date 日期字符串
 * @param unit 时间戳单位，'ms' 为毫秒，'s' 为秒
 * @returns 返回时间戳（根据单位），如果转换失败，返回原文本
 */
export function dateToTimestamp(date: string, unit: 'ms' | 's' = 'ms'): string {
    try {
        const timestamp = dayjs(date).valueOf(); // 默认是毫秒
        return unit === 's' ? (timestamp / 1000).toString() : timestamp.toString(); // 根据 unit 返回毫秒或秒
    } catch (e) {
        return date; // 如果转换失败，返回原文本
    }
}

/**
 * 将时间戳（毫秒或秒）转换为日期字符串
 * @param timestamp 时间戳（毫秒或秒）
 * @param format 自定义日期格式，默认为 'YYYY-MM-DD HH:mm:ss'
 * @returns 返回对应的日期字符串，如果转换失败，返回原时间戳
 */
export function timestampToDate(timestamp: string, format: string = 'YYYY-MM-DD HH:mm:ss'): string {
    try {
        return dayjs(timestamp).format(format); // 使用传入的日期格式
    } catch (e) {
        return timestamp; // 如果转换失败，返回原文本
    }
}
// 操作集合
export default {
    dateToTimestamp,
    timestampToDate,
};
