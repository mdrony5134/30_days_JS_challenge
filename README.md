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

## Counter Function

## Problem Description

Given an integer `n`, return a counter function. The counter function should return the initial value of `n` when first called, and then increase by 1 with every subsequent call (e.g., n, n + 1, n + 2, etc.).

### Example 1:

**Input:**  
n = 10  
["call", "call", "call"]

**Output:**  
[10, 11, 12]

**Explanation:**  
- The first time the `counter()` function is called, it returns `n` (which is 10 in this case).
- The next time `counter()` is called, it returns `n + 1` (which is 11).
- The third time `counter()` is called, it returns `n + 2` (which is 12).

### Example 2:

**Input:**  
n = -2  
["call", "call", "call", "call", "call"]

**Output:**  
[-2, -1, 0, 1, 2]

**Explanation:**  
- Initially, the `counter()` function returns `n` (which is -2).
- Each subsequent call increases the returned value by 1:  
  - Second call returns `-1`.  
  - Third call returns `0`.  
  - Fourth call returns `1`.  
  - Fifth call returns `2`.

## Requirements

- The counter function must return `n` initially.
- With each subsequent call, it should return the previous value incremented by 1.

## To Be Or Not To Be

## Problem Description

Write a function `expect` that helps developers test their code. This function should take in any value `val` and return an object containing two functions:

1. **toBe(val)**: 
   - Accepts another value.
   - Returns `true` if the two values are strictly equal (`===`).
   - If the values are not equal, it should throw an error with the message "Not Equal".

2. **notToBe(val)**: 
   - Accepts another value.
   - Returns `true` if the two values are not strictly equal (`!==`).
   - If the values are equal, it should throw an error with the message "Equal".

### Example 1:

**Input:**  
func = () => expect(5).toBe(5)

**Output:**  
{"value": true}

**Explanation:**  
Since 5 is equal to 5, this expression returns true.

### Example 2:

**Input:**  
func = () => expect(5).toBe(null)

**Output:**  
{"error": "Not Equal"}

**Explanation:**  
Since 5 is not equal to null, this expression throws the error "Not Equal".

### Example 3:

**Input:**  
func = () => expect(5).notToBe(null)

**Output:**  
{"value": true}

**Explanation:**  
Since 5 is not equal to null, this expression returns true.

## Requirements

- Implement the `expect` function that allows testing values for equality and inequality.
- Ensure appropriate error messages are thrown when the conditions are not met.

# Create Counter

## Problem Description

Write a function `createCounter` that accepts an initial integer `init`. This function should return an object containing three functions:

1. **increment()**: 
   - Increases the current value by 1 and then returns the new value.

2. **decrement()**: 
   - Reduces the current value by 1 and then returns the new value.

3. **reset()**: 
   - Sets the current value back to `init` and then returns the value.

### Example 1:

**Input:**  
init = 5, calls = ["increment", "reset", "decrement"]

**Output:**  
[6, 5, 4]

**Explanation:**  
- When `createCounter(5)` is called, the initial value is set to 5.
- `counter.increment()` returns 6.
- `counter.reset()` returns 5.
- `counter.decrement()` returns 4.

### Example 2:

**Input:**  
init = 0, calls = ["increment", "increment", "decrement", "reset", "reset"]

**Output:**  
[1, 2, 1, 0, 0]

**Explanation:**  
- When `createCounter(0)` is called, the initial value is set to 0.
- `counter.increment()` returns 1.
- `counter.increment()` returns 2.
- `counter.decrement()` returns 1.
- `counter.reset()` returns 0.
- `counter.reset()` returns 0 again.

## Requirements

- Implement the `createCounter` function that allows incrementing, decrementing, and resetting the counter to its initial value.
