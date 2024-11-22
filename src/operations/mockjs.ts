import Mock from 'mockjs';

/**
 * 生成随机整数
 * @param _ 无需参数
 * @param params 范围参数 { min: number, max: number }
 * @returns 返回随机整数
 */
export function integer(_: undefined, params: { min: number; max: number }): number {
    const { min, max } = params;
    return Mock.mock(`@integer(${min}, ${max})`);
}

/**
 * 生成随机浮点数
 * @param _ 无需参数
 * @param params 范围参数 { min: number, max: number, dmin?: number, dmax?: number }
 * @returns 返回随机浮点数
 */
export function float(_: undefined, params: { min: number; max: number; dmin?: number; dmax?: number }): number {
    const { min, max, dmin = 0, dmax = 2 } = params;
    return Mock.mock(`@float(${min}, ${max}, ${dmin}, ${dmax})`);
}

/**
 * 生成随机布尔值
 * @param _ 无需参数
 * @returns 返回随机布尔值
 */
export function boolean(_: undefined): boolean {
    return Mock.mock('@boolean');
}

/**
 * 生成随机字符串
 * @param _ 无需参数
 * @param params 长度参数 { length: number }
 * @returns 返回随机字符串
 */
export function string(_: undefined, params: { length: number }): string {
    const { length } = params;
    return Mock.mock(`@string("lower", ${length})`);
}

/**
 * 生成随机字符
 * @param _ 无需参数
 * @param params 字符池参数 { pool?: string }
 * @returns 返回随机字符
 */
export function character(_: undefined, params: { pool?: string }): string {
    const { pool = '' } = params;
    return Mock.mock(`@character(${pool})`);
}

/**
 * 生成随机范围数组
 * @param _ 无需参数
 * @param params 范围参数 { start: number, end: number, step?: number }
 * @returns 返回随机范围数组
 */
export function range(_: undefined, params: { start: number; end: number; step?: number }): number[] {
    const { start, end, step = 1 } = params;
    return Mock.mock(`@range(${start}, ${end}, ${step})`);
}

/**
 * 生成随机日期
 * @param _ 无需参数
 * @param params 格式参数 { format?: string }
 * @returns 返回随机日期字符串
 */
export function date(_: undefined, params: { format?: string }): string {
    const { format = 'yyyy-MM-dd' } = params;
    return Mock.mock(`@date("${format}")`);
}

/**
 * 生成随机时间
 * @param _ 无需参数
 * @param params 格式参数 { format?: string }
 * @returns 返回随机时间字符串
 */
export function time(_: undefined, params: { format?: string }): string {
    const { format = 'HH:mm:ss' } = params;
    return Mock.mock(`@time("${format}")`);
}

/**
 * 生成随机日期时间
 * @param _ 无需参数
 * @param params 格式参数 { format?: string }
 * @returns 返回随机日期时间字符串
 */
export function datetime(_: undefined, params: { format?: string }): string {
    const { format = 'yyyy-MM-dd HH:mm:ss' } = params;
    return Mock.mock(`@datetime("${format}")`);
}

/**
 * 生成随机当前时间
 * @param _ 无需参数
 * @param params 单位和格式参数 { format?: string, unit?: string }
 * @returns 返回随机当前时间字符串
 */
export function now(_: undefined, params: { format?: string; unit?: string }): string {
    const { format = 'yyyy-MM-dd HH:mm:ss', unit = '' } = params;
    return Mock.mock(`@now("${unit}", "${format}")`);
}

/**
 * 生成随机句子
 * @param _ 无需参数
 * @param params 长度参数 { min?: number, max?: number }
 * @returns 返回随机句子
 */
export function sentence(_: undefined, params: { min?: number; max?: number }): string {
    const { min = 12, max = 18 } = params;
    return Mock.mock(`@sentence(${min}, ${max})`);
}
/**
 * 生产随机标题
 * @param _ 无需参数
 * @param params 长度参数 { min?: number, max?: number }
 * @returns 返回随机句子
 */
export function title(_: undefined, params: { min?: number; max?: number }): string {
    const { min = 12, max = 18 } = params;
    return Mock.mock(`@title(${min}, ${max})`);
}
/**
 * 生产随机标题(中文)
 * @param _ 无需参数
 * @param params 长度参数 { min?: number, max?: number }
 * @returns 返回随机句子
 */
export function ctitle(_: undefined, params: { min?: number; max?: number }): string {
    const { min = 12, max = 18 } = params;
    return Mock.mock(`@sentence(${min}, ${max})`);
}
/**
 * 生成随机句子 (中文)
 * @param _ 无需参数
 * @param params 长度参数 { min?: number, max?: number }
 * @returns 返回随机句子
 */
export function csentence(_: undefined, params: { min?: number; max?: number }): string {
    const { min = 12, max = 18 } = params;
    return Mock.mock(`@csentence(${min}, ${max})`);
}

/**
 * 生成随机段落
 * @param _ 无需参数
 * @param params 长度参数 { min?: number, max?: number }
 * @returns 返回随机段落
 */
export function paragraph(_: undefined, params: { min?: number; max?: number }): string {
    const { min = 3, max = 7 } = params;
    return Mock.mock(`@paragraph(${min}, ${max})`);
}
/**
 * 生成随机段落(中文)
 * @param _ 无需参数
 * @param params 长度参数 { min?: number, max?: number }
 * @returns 返回随机段落
 */
export function cparagraph(_: undefined, params: { min?: number; max?: number }): string {
    const { min = 3, max = 7 } = params;
    return Mock.mock(`@cparagraph(${min}, ${max})`);
}

/**
 * 生成随机名称
 * @param _ 无需参数
 * @returns 返回随机名称
 */
export function name(_: undefined): string {
    return Mock.mock('@name');
}

/**
 * 生成随机 URL
 * @param _ 无需参数
 * @returns 返回随机 URL
 */
export function url(_: undefined): string {
    return Mock.mock('@url');
}

/**
 * 生成随机 IP 地址
 * @param _ 无需参数
 * @returns 返回随机 IP 地址
 */
export function ip(_: undefined): string {
    return Mock.mock('@ip');
}

/**
 * 生成随机图片
 * @param _ 无需参数
 * @param params 图片参数 { size: string, text?: string, bgColor?: string, textColor?: string }
 * @returns 返回图片 URL
 */
export function image(_: undefined, params: { size: string; text?: string; bgColor?: string; textColor?: string }): string {
    const { size, text = '', bgColor = '#000', textColor = '#fff' } = params;
    return Mock.mock(`@image("${size}", "${bgColor}", "${textColor}", "${text}")`);
}


export default {
    integer,
    float,
    boolean,
    string,
    character,
    range,
    date,
    time,
    datetime,
    now,
    sentence,
    paragraph,
    cparagraph,
    name,
    url,
    ip,
    image
};
