/**
 * !2704. To Be Or Not To Be
 * Write a function expect that helps developers test their code. 
 * It should take in any value val and return an object with the following two functions.
toBe(val) accepts another value and returns true if the two values === each other. 
If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other.
* If they are equal, it should throw an error "Equal".
 */
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
