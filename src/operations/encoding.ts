// Base64 编码解码
export function base64encode(text: string): string {
    return Buffer.from(text).toString('base64');
}

export function base64decode(base64Text: string): string {
    try {
        return Buffer.from(base64Text, 'base64').toString('utf-8');
    } catch (e) {
        return ''; // 解码错误返回空字符串
    }
}
// URL 编码
export function urlencode(text: string): string {
    return encodeURIComponent(text);
}

// URL 解码
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