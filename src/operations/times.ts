import dayjs from 'dayjs';

// 获取当前时间戳（毫秒）
export function getCurrentTimestampMillis(): string {
    return dayjs().valueOf().toString(); // 返回当前时间戳（毫秒）
}

// 获取当前时间戳（秒）
export function getCurrentTimestampSeconds(): string {
    return dayjs().unix().toString(); // 返回当前时间戳（秒）
}

// 将日期字符串转换为时间戳（毫秒）
export function dateToTimestampMillis(date: string): string {
    try {
        return dayjs(date).valueOf().toString(); // 返回日期对应的时间戳（毫秒）
    } catch (e) {
        return date; // 如果转换失败，返回原文本
    }
}

// 将时间戳（毫秒）转换为日期
export function timestampMillisToDate(timestamp: string): string {
    try {
        return dayjs(Number(timestamp)).format('YYYY-MM-DD HH:mm:ss'); // 将时间戳（毫秒）转换为日期
    } catch (e) {
        return timestamp; // 如果转换失败，返回原文本
    }
}

// 将时间戳（秒）转换为日期
export function timestampSecondsToDate(timestamp: string): string {
    try {
        return dayjs.unix(Number(timestamp)).format('YYYY-MM-DD HH:mm:ss'); // 将时间戳（秒）转换为日期
    } catch (e) {
        return timestamp; // 如果转换失败，返回原文本
    }
}

// 操作集合
export default {
    getCurrentTimestampMillis,
    getCurrentTimestampSeconds,
    dateToTimestampMillis,
    timestampMillisToDate,
    timestampSecondsToDate,
};

