import { upperCase, lowerCase } from 'lodash';

export function uppercase(text: string): string {
  return upperCase(text);
}

export function lowercase(text: string): string {
  return lowerCase(text);
}

export function reverse(text: string): string {
  return text.split('').reverse().join('');
}

export function trim(text: string): string {
  return text.trim();
}

// 定义操作的映射
export default {
  uppercase,
  lowercase,
  reverse,
  trim,
};
