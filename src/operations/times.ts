import dayjs from 'dayjs';
import { window } from 'vscode';



/**
 * 将日期字符串转换为时间戳（毫秒）
 * @param date 日期字符串
 * @returns 返回时间戳（毫秒），如果转换失败，返回原文本
 */
export function dateToTimestampMillis(date: string): string {
    try {
        return dayjs(date).valueOf().toString(); // 返回日期对应的时间戳（毫秒）
    } catch (e) {
        return date; // 如果转换失败，返回原文本
    }
}

/**
 * 将时间戳（毫秒）转换为日期字符串
 * @param timestamp 时间戳（毫秒）
 * @returns 返回对应的日期字符串，如果转换失败，返回原时间戳
 */
export function timestampMillisToDate(timestamp: string): string {
    try {
        return dayjs(Number(timestamp)).format('YYYY-MM-DD HH:mm:ss'); // 将时间戳（毫秒）转换为日期
    } catch (e) {
        return timestamp; // 如果转换失败，返回原文本
    }
}



// 操作集合
export default {
    dateToTimestampMillis,
    timestampMillisToDate,
};

