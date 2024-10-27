/**
 * @param {Function} fn
 * @return {Function}
 * 2666. Allow One Function Call
 * Given a function fn, return a new function that is identical to the 
 * original function except that it ensures fn is called at most once.
 *The first time the returned function is called, it should return the 
 *same result as fn.
 *Every subsequent time it is called, it should return undefined.
 */
const onceAllowFn = (fn) => {
  let isExecute = false;
  return function (...args) {
    if (!isExecute) {
      isExecute = true;
      return fn(...args);
    }
    return undefined;
  };
};

const f1 = (a, b, c) => a + b + c;
const result = onceAllowFn(f1);
console.log(result(1, 2, 3));
console.log(result(1, 2, 3));

