import math from './math';
import times from './times';
import encoding from './encoding';
import string from './string';
import mockjs from './mockjs';


// 操作集合
const operations = { ...math, ...times, ...encoding, ...string, ...mockjs };
export default operations;