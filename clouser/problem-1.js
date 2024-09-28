var createHelloWorld = function () {
//   let args = "hello world";
  return function (...args) {
      return "hello world";
  };
};

const f = createHelloWorld([{}, null, true]);
console.log(f()) // "Hello World"
