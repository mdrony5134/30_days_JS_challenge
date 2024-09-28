# 30 days JS Challenge in Leetcode

## Basic Array Transformation Problem

## 2635. Apply Transform Over Each Element in Array

### Problem Description

Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element. The returned array should be created such that:

- `returnedArray[i] = fn(arr[i], i)`.

**Note**: Please solve it without using the built-in `Array.map` method.

---

## Examples

### Example 1:

- **Input**: `arr = [1,2,3]`, `fn = function plusone(n) { return n + 1; }`
- **Output**: `[2,3,4]`
- **Explanation**:
  - The function increases each value in the array by one.

### Example 2:

- **Input**: `arr = [1,2,3]`, `fn = function plusI(n, i) { return n + i; }`
- **Output**: `[1,3,5]`
- **Explanation**:
  - The function increases each value by the index it resides in.

### Example 3:

- **Input**: `arr = [10,20,30]`, `fn = function constant() { return 42; }`
- **Output**: `[42,42,42]`
- **Explanation**:
  - The function always returns 42.

---

## Constraints

- You cannot use the built-in `Array.map` method.

## 2634. Filter Elements from Array

### Problem Description

Given an integer array `arr` and a filtering function `fn`, return a new array that filters out elements based on the condition defined in `fn`.

- The function `fn` takes an element and optionally its index, and returns a boolean value that determines whether to include the element in the new array.

---

## Examples

### Example 1:

- **Input**: `arr = [0, 10, 20, 30]`, `fn = function greaterThan10(n) { return n > 10; }`
- **Output**: `[20, 30]`
- **Explanation**:
  - The function filters out values that are not greater than 10. Therefore, the resulting array contains only elements greater than 10.

### Example 2:

- **Input**: `arr = [1, 2, 3]`, `fn = function firstIndex(n, i) { return i === 0; }`
- **Output**: `[1]`
- **Explanation**:
  - The function filters elements based on their index. Only the element at index 0 is included in the output array.

### Example 3:

- **Input**: `arr = [-2, -1, 0, 1, 2]`, `fn = function plusOne(n) { return n + 1 }`
- **Output**: `[-2, 0, 1, 2]`
- **Explanation**:
  - The function adds 1 to each element, but falsey values such as 0 are filtered out.

---

## Constraints

- The function `fn` should return `true` or `false` for each element to determine if it should be included in the new array.
- The solution should not use the built-in `Array.filter` method.

## 2626. Array Reduce Transformation

## Problem Description

Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return the final result obtained by executing the `fn` function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations:

- `val = fn(init, nums[0])`
- `val = fn(val, nums[1])`
- `val = fn(val, nums[2])`
- ...

The process continues until every element in the array has been processed. The ultimate value of `val` is then returned.

If the length of the array is 0, the function should return `init`.

**Note**: Solve this problem without using the built-in `Array.reduce` method.

---

## Examples

### Example 1:

- **Input**: 
  - `nums = [1, 2, 3, 4]`
  - `fn = function sum(accum, curr) { return accum + curr; }`
  - `init = 0`
- **Output**: `10`
- **Explanation**: 
  - Initially, the value is `init = 0`.
  - `(0) + nums[0] = 1`
  - `(1) + nums[1] = 3`
  - `(3) + nums[2] = 6`
  - `(6) + nums[3] = 10`
  - The final answer is `10`.

### Example 2:

- **Input**: 
  - `nums = [1, 2, 3, 4]`
  - `fn = function sum(accum, curr) { return accum + curr * curr; }`
  - `init = 100`
- **Output**: `130`
- **Explanation**: 
  - Initially, the value is `init = 100`.
  - `(100) + nums[0] * nums[0] = 101`
  - `(101) + nums[1] * nums[1] = 105`
  - `(105) + nums[2] * nums[2] = 114`
  - `(114) + nums[3] * nums[3] = 130`
  - The final answer is `130`.

### Example 3:

- **Input**: 
  - `nums = []`
  - `fn = function sum(accum, curr) { return 0; }`
  - `init = 25`
- **Output**: `25`
- **Explanation**: 
  - For empty arrays, the answer is always `init`.

---

## Constraints

- The function `fn` should be executed sequentially on each element of the array.
- The solution should not use the built-in `Array.reduce` method.

## Create Hello World Function

## Problem Description

Write a function `createHelloWorld`. It should return a new function that always returns the string "Hello World" regardless of any arguments passed.

### Example 1:

**Input:**  
args = []

**Output:**  
"Hello World"

**Explanation:**  
The function `createHelloWorld` returns another function. When this returned function is invoked, it will always return the string "Hello World".

### Example 2:

**Input:**  
args = [{}, null, 42]

**Output:**  
"Hello World"

**Explanation:**  
Even if arguments are passed to the returned function, it still returns the string "Hello World".

## Requirements

The function returned by `createHelloWorld` should:
- Always return the string "Hello World".
- Ignore any arguments passed when invoking the returned function.

