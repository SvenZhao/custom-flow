/**
 * Base64 编码
 * @param text 需要编码的文本
 * @returns 返回编码后的 Base64 字符串
 */
export function base64encode(text: string): string {
    return Buffer.from(text).toString('base64');
}

/**
 * Base64 解码
 * @param base64Text 需要解码的 Base64 字符串
 * @returns 返回解码后的文本，如果解码失败返回空字符串
 */
export function base64decode(base64Text: string): string {
    try {
        return Buffer.from(base64Text, 'base64').toString('utf-8');
    } catch (e) {
        return ''; // 解码错误返回空字符串
    }
}

/**
 * URL 编码
 * @param text 需要编码的文本
 * @returns 返回 URL 编码后的字符串
 */
export function urlencode(text: string): string {
    return encodeURIComponent(text);
}

/**
 * URL 解码
 * @param encodedText 需要解码的 URL 编码字符串
 * @returns 返回解码后的字符串，如果解码失败返回空字符串
 */
export function urldecode(encodedText: string): string {
    try {
        return decodeURIComponent(encodedText);
    } catch (e) {
        return ''; // 解码错误返回空字符串
    }
}
export default {
    base64decode,
    base64encode,
    urlencode,
    urldecode
}