
// 加法
export function add(text: string, num: number): string {
    const numericValue = parseFloat(text);
    if (isNaN(numericValue) || typeof num !== 'number') {
        return text; // 如果文本不能转换为数字，或参数不合法，返回原文本
    }
    return (numericValue + num).toString();
}
// 减法
export function subtract(text: string, num: number): string {
    const numericValue = parseFloat(text);
    if (isNaN(numericValue) || typeof num !== 'number') {
        return text; // 如果文本不能转换为数字，或参数不合法，返回原文本
    }
    return (numericValue - num).toString();
}
// 乘法
export function multiply(text: string, num: number): string {
    const numericValue = parseFloat(text);
    if (isNaN(numericValue) || typeof num !== 'number') {
        return text; // 如果文本不能转换为数字，或参数不合法，返回原文本
    }
    return (numericValue * num).toString();
}
// 除法
export function divide(text: string, num: number): string {
    const numericValue = parseFloat(text);
    if (isNaN(numericValue) || typeof num !== 'number' || num === 0) {
        return text; // 如果文本不能转换为数字，参数不合法或除数为零，返回原文本
    }
    return (numericValue / num).toString();
}

export default { add, subtract, multiply, divide }