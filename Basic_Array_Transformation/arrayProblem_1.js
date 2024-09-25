/**
 *!2635. Apply Transform Over Each Element in Array
 **Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
 **The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 **Please solve it without the built-in Array.map method.
 */

/**
*!Example 1:
**Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
**Output: [2,3,4]
**Explanation:
**const newArray = map(arr, plusone); // [2,3,4]
**The function increases each value in the array by one. 

*!Example 2:
**Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
**Output: [1,3,5]
**Explanation: The function increases each value by the index it resides in.

*!Example 3:
**Input: arr = [10,20,30], fn = function constant() { return 42; }
**Output: [42,42,42]
**Explanation: The function always returns 42.
  * 
  */

/**
 * *here is my solution
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  return fn(arr);
};

function plusone(n) {
  let result = [];
  for (let i = 0; i < n.length; i++) {
    const updatedValue = n[i] + 1;
    result.push(updatedValue);
  }
  return result;
}

function plusIn(n) {
  let result = [];
  for (let i = 0; i < n.length; i++) {
    const updatedValue = n[i] + i;
    result.push(updatedValue);
  }
  return result;
}

function constant(n) {
  let result = [];
  for (let i = 0; i < n.length; i++) {
    result.push(42);
  }
  return result;
}

// console.log(map([1, 2, 3], constant));

// remoce repetation and modify code
var map = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const updatedValue = fn(arr[i], i);
    result.push(updatedValue);
  }
  return result;
};

function plusOne(n) {
  return n + 1;
}

function plusIn(n, i) {
  return n + i;
}

function constant() {
  return 42;
}

console.log(map([1, 2, 3], constant));
console.log(map([1, 2, 3], plusIn));
console.log(map([1, 2, 3], plusOne));
