//Grasshopper - Array Mean

var findAverage = function (nums) {
  let num = nums.reduce((el,sum) => el + sum, 0);
  return num / nums.length;
}
