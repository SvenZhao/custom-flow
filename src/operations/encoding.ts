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
    return Buffer.from(base64Text, 'base64').toString('utf-8');
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
    return decodeURIComponent(encodedText);
}
/**
 * UTF-8 编码
 * @param text 需要编码的文本
 * @returns 返回编码后的字符串
 */
export function utf8encode(text: string): string {
    return unescape(encodeURIComponent(text));
}

/**
 * UTF-8 解码
 * @param encodedText 需要解码的字符串
 * @returns 返回解码后的文本，如果解码失败返回空字符串
 */
export function utf8decode(encodedText: string): string {
    return decodeURIComponent(escape(encodedText));
}

/**
 * 十六进制编码
 * @param text 需要编码的文本
 * @returns 返回编码后的十六进制字符串
 */
export function hexencode(text: string): string {
    return Buffer.from(text, 'utf-8').toString('hex');
}

/**
 * 十六进制解码
 * @param hexText 需要解码的十六进制字符串
 * @returns 返回解码后的文本，如果解码失败返回空字符串
 */
export function hexdecode(hexText: string): string {
    return Buffer.from(hexText, 'hex').toString('utf-8');

}

/**
 * Unicode 转义编码
 * @param text 需要编码的文本
 * @returns 返回 Unicode 转义编码后的字符串
 */
export function unicodeEncode(text: string): string {
    return text
        .split('')
        .map((char) => '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0'))
        .join('');
}

/**
 * Unicode 转义解码
 * @param unicodeText 需要解码的 Unicode 转义字符串
 * @returns 返回解码后的文本
 */
export function unicodeDecode(unicodeText: string): string {
    return unicodeText.replace(/\\u[\da-fA-F]{4}/g, (match) => {
        return String.fromCharCode(parseInt(match.replace('\\u', ''), 16));
    });
}

/**
 * ROT13 编码
 * @param text 需要编码的文本
 * @returns 返回编码后的 ROT13 字符串
 */
export function rot13encode(text: string): string {
    return text.replace(/[a-zA-Z]/g, (char) => {
        const base = char <= 'Z' ? 65 : 97; // 大写或小写字母起始 ASCII
        return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
    });
}


export default {
    base64encode,
    base64decode,
    urlencode,
    urldecode,
    utf8encode,
    utf8decode,
    hexencode,
    hexdecode,
    unicodeEncode,
    unicodeDecode,
    rot13encode,
};
