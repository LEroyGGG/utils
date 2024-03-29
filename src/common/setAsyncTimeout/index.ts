export const setAsyncTimeout = function setAsyncTimeout(delay: number): Promise<undefined> {
  return new Promise(resolve => setTimeout(resolve, delay));
};
