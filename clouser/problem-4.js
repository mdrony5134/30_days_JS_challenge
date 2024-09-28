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

