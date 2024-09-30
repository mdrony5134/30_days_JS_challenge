/**
**2629. Function Composition
 ** Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output.
 */

var compose = function (functions) {
    if(functions.length == 0){
        return function(x){
            return x;
        }
    }
    console.log(functions)
  return function (x) {
    let result = x;
    console.log(result)
    for(let i = functions.length - 1; i >= 0; i--){
        let current = functions[i]
        console.log(current)
        result = current(result)
        console.log(current)
    }
    console.log(result)
    // console.log(x)
  };
};
const f1 = (x) => x + 1;
const f2 = (x) => x * x;
const f3 = (x) => 2 * x;

const fn = compose([]);
console.log(fn(42)); // 9
