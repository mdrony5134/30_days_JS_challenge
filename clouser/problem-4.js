/**
 * *Problem-2665. Counter II
 * Write a function createCounter.
 *  It should accept an initial integer init. 
 * It should return an object with three functions.
The three functions are:
**increment() increases the current value by 1 and then returns it.
**decrement() reduces the current value by 1 and then returns it.
**reset() sets the current value to init and then returns it.
 */
var createCounter = function (init) {
  let current = init;
  return {
    increment: function () {
      return (current += 1);
    },
    decrement: function () {
      return (current -= 1);
    },
    reset: function () {
      current = init;
      return current;
    },
  };
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
console.log(counter.decrement());

