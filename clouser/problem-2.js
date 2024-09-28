/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    // let num = n;
    return function() {
        // console.log(num)
        // return n + 1
        return n ++
    };
};

const counter = createCounter(-2)
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
  