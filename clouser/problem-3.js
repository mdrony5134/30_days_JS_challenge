var expect = function (val) {
  return {
    toBe: function (expect) {
      if (val === expect) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (expect) {
      if (val !== expect) {
        return true;
      }
    },
  };
};

function execute(func) {
  try {
    const result = func();
    return JSON.stringify({ value: result });
  } catch (error) {
    return JSON.stringify({ error: error.message });
  }
}
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
const func1 = () => expect(5).toBe(5);
console.log(execute(func1))

// console.log();
// console.log(expect(5).toBe(null));
// console.log(expect(5).notToBe(null));
