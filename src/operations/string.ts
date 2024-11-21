/**
 * 将文本转换为大写字母
 * @param text 输入文本
 * @returns 返回转换后的大写文本
 */
export function toUpperCase(text: string): string {
    return text.toUpperCase();
}

/**
 * 将文本转换为小写字母
 * @param text 输入文本
 * @returns 返回转换后的小写文本
 */
export function toLowerCase(text: string): string {
    return text.toLowerCase();
}

/**
 * 反转文本中的字符顺序
 * @param text 输入文本
 * @returns 返回反转后的文本
 */
export function reverse(text: string): string {
    return text.split('').reverse().join('');
}

/**
 * 去除文本两端的空白字符
 * @param text 输入文本
 * @returns 返回去除空白字符后的文本
 */
export function trim(text: string): string {
    return text.trim();
}

const stringOperations = {
    toUpperCase,
    toLowerCase,
    reverse,
    trim,
};

export default stringOperations;
