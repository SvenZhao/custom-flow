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

/**
 * 重复文本
 * @param text 输入文本
 * @param params 重复次数 { count: number }
 * @returns 返回重复后的文本
 */
export function repeat(text: string, params: { count: number }): string {
    const { count } = params;
    if (typeof count !== 'number' || count < 0) {
        throw new Error('重复次数必须是非负数');
    }
    return text.repeat(count);
}

/**
 * 替换文本中的指定内容
 * @param text 输入文本
 * @param params 替换参数 { search: string | RegExp, replacement: string }
 * @returns 返回替换后的文本
 */
export function replace(
    text: string,
    params: { search: string | RegExp; replacement: string }
): string {
    const { search, replacement } = params;
    return text.replace(search, replacement);
}

/**
 * 检查文本是否包含指定的子串
 * @param text 输入文本
 * @param params 子串 { substring: string }
 * @returns 如果包含返回 true，否则返回 false
 */
export function includes(text: string, params: { substring: string }): boolean {
    return text.includes(params.substring);
}

/**
 * 检查文本是否以指定子串开头
 * @param text 输入文本
 * @param params 前缀 { prefix: string }
 * @returns 如果是以指定前缀开头，返回 true，否则返回 false
 */
export function startsWith(text: string, params: { prefix: string }): boolean {
    return text.startsWith(params.prefix);
}

/**
 * 检查文本是否以指定子串结尾
 * @param text 输入文本
 * @param params 后缀 { suffix: string }
 * @returns 如果是以指定后缀结尾，返回 true，否则返回 false
 */
export function endsWith(text: string, params: { suffix: string }): boolean {
    return text.endsWith(params.suffix);
}


export default {
    toUpperCase,
    toLowerCase,
    reverse,
    trim,
    repeat,
    replace,
    includes,
    startsWith,
    endsWith,
};