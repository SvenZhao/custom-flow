/**
 * 加法操作
 * @param text 需要进行加法的文本，文本将会转换为数字
 * @param num 要加的数字
 * @returns 返回加法后的结果
 */
export function add(text: string, num: number): string {
    const numericValue = parseFloat(text);
    if (isNaN(numericValue) || typeof num !== 'number') {
        return text; // 如果文本不能转换为数字，或参数不合法，返回原文本
    }
    return (numericValue + num).toString();
}

/**
 * 减法操作
 * @param text 需要进行减法的文本，文本将会转换为数字
 * @param num 要减的数字
 * @returns 返回减法后的结果
 */
export function subtract(text: string, num: number): string {
    const numericValue = parseFloat(text);
    if (isNaN(numericValue) || typeof num !== 'number') {
        return text; // 如果文本不能转换为数字，或参数不合法，返回原文本
    }
    return (numericValue - num).toString();
}

/**
 * 乘法操作
 * @param text 需要进行乘法的文本，文本将会转换为数字
 * @param num 要乘的数字
 * @returns 返回乘法后的结果
 */
export function multiply(text: string, num: number): string {
    const numericValue = parseFloat(text);
    if (isNaN(numericValue) || typeof num !== 'number') {
        return text; // 如果文本不能转换为数字，或参数不合法，返回原文本
    }
    return (numericValue * num).toString();
}

/**
 * 除法操作
 * @param text 需要进行除法的文本，文本将会转换为数字
 * @param num 要除的数字
 * @returns 返回除法后的结果，如果除数为零，返回原文本
 */
export function divide(text: string, num: number): string {
    const numericValue = parseFloat(text);
    if (isNaN(numericValue) || typeof num !== 'number' || num === 0) {
        return text; // 如果文本不能转换为数字，参数不合法或除数为零，返回原文本
    }
    return (numericValue / num).toString();
}

export default { add, subtract, multiply, divide }