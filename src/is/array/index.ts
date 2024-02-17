export const isArray = function isArray<T>(value: any | T[]): value is T[] {
  return Array.isArray(value);
};
