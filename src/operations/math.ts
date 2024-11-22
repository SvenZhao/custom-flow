/**
 * 加法操作
 * @param text 需要进行加法的文本，文本将会转换为数字
 * @param num 要加的数字
 * @returns 返回加法后的结果
 */
export function add(text: string, num: number): string {
    const numericValue = parseFloat(text);
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
    return (numericValue / num).toString();
}
/**
 * 取模运算
 * @param text 被除数，文本将会转换为数字
 * @param divisor 除数
 * @returns 返回取模运算的结果，如果除数为零，返回原文本
 */
export function modulo(text: string, divisor: number): string {
    const numericValue = parseFloat(text);
    return (numericValue % divisor).toString();
}

/**
 * 向下取整
 * @param text 需要取整的文本，文本将会转换为数字
 * @returns 返回向下取整后的结果
 */
export function floor(text: string): string {
    const numericValue = parseFloat(text);
    return Math.floor(numericValue).toString();
}

/**
 * 向上取整
 * @param text 需要取整的文本，文本将会转换为数字
 * @returns 返回向上取整后的结果
 */
export function ceil(text: string): string {
    const numericValue = parseFloat(text);
    return Math.ceil(numericValue).toString();
}

/**
 * 四舍五入
 * @param text 需要取整的文本，文本将会转换为数字
 * @returns 返回四舍五入后的结果
 */
export function round(text: string): string {
    const numericValue = parseFloat(text);
    return Math.round(numericValue).toString();
}

/**
 * 绝对值运算
 * @param text 需要计算绝对值的文本，文本将会转换为数字
 * @returns 返回绝对值的结果
 */
export function absolute(text: string): string {
    const numericValue = parseFloat(text);
    return Math.abs(numericValue).toString();
}
/**
 * 幂运算
 * @param text 底数，文本将会转换为数字
 * @param exponent 指数
 * @returns 返回幂运算后的结果
 */
export function power(text: string, exponent: number): string {
    const numericValue = parseFloat(text);
    return Math.pow(numericValue, exponent).toString();
}



export default { add, subtract, multiply, divide, power, modulo, floor, ceil, round, absolute };
