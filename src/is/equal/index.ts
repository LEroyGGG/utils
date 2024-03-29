import { isNaN } from '../nan';
import { isDate } from '../date';
import { isArray } from '../array';
import { isObject } from '../object';

const _hasOwnProperty = Object.prototype.hasOwnProperty;

export const isEqual = function isEqual(a: any, b: any): boolean {
  if (isNaN(a) && isNaN(b)) return true;
  if (isDate(a) && isDate(b)) return +a === +b;

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) return false;

    for (let i = 0, len = a.length; i < len; i++) {
      if (!isEqual(a[i], b[i])) return false;
    }

    return true;
  }

  if (isObject(a) && isObject(b)) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (const name in a) {
      if (!_hasOwnProperty.call(a, name)) continue;
      if (!isEqual(a[name], b[name])) return false;
    }

    return true;
  }

  return a === b;
};
