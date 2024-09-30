/**
 ** 2667. Create Hello World Function
** Write a function createHelloWorld. 
**It should return a new function that always returns "Hello World".
 */

var createHelloWorld = function () {
  return function (...args) {
      return "hello world";
  };
};

const f = createHelloWorld([{}, null, true]);
const f1 = createHelloWorld([]);

console.log(f()) // "Hello World"
console.log(f1()) // "Hello World"
