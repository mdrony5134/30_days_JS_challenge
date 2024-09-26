var reduce = function (nums, fn, init) {
  let accum = init;
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i], init)
    accum = fn(accum, nums[i]);
  }
  //   console.log(accum);
  return accum;
};
function sum(curr, accum) {
  // console.log(curr,  accum)
  return accum + curr;
}
function sum(curr, accum) {
  // console.log(curr,  accum)
  return accum + curr * curr;
}
function sum(curr, accum) {
  // console.log(curr,  accum)
  return 0;
}

console.log(reduce([1, 2, 3], sum, 25));
