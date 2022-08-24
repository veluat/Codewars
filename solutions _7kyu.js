//7 kyu 13 solutions

/* Sort Numbers

Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it 
should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

//Solution:

function solution(nums){
  return nums == null || nums == [] ? [] 
  : nums.sort((a,b) => a - b);
}

//List Filtering

function filter_list(l) {
  return l.filter(elem => typeof elem != "string");
}

//Summing a number's digits

function sumDigits(number) {
  let arr = Math.abs(number).toString().split('');
  return arr.reduce((sum, elem) => +sum + +elem, 0);
}

//Form The Minimum

function minValue(values){
  let result = [];
  for (let elem of values) {
  if (!result.includes(elem)) {
    result.push(elem);
  }
}
  result = result.sort((a,b) => a - b).join('');
  return Number(result);
}

//Binary Addition

function addBinary(a,b) {
  let n = a + b;
  return n.toString(2);
}

//The highest profit wins!

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

//Sum of angles

function angle(n) {
  return (n-2) * 180;
}

//Odd or Even?

function oddOrEven(array) {
  let sum = 0;
  if (array.length !== 0) {
    sum = array.reduce((elem, sum) => sum += elem, 0);
    return sum % 2 === 0 ? 'even' : 'odd';
  } else {
    return 'even';
  }
}

//Simple Fun #176: Reverse Letter

function reverseLetter(str) {
  return str.split('').reverse().join('').replace(/[^a-z]/g, '');
}

//Shortest Word

function findShort(s){
  let minWord = s.split(' ').sort((a,b) => a.length - b.length);
  return minWord[0].length;
}

//Find the stray number

function stray(numbers) {
  return +numbers.filter((el, i, numbers) => numbers.indexOf(el) === numbers.lastIndexOf(el));
}

//Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {  
  let arr = numbers.sort((a,b) => a - b);
  return arr[0] + arr[1];
}

//Descending Orde

function descendingOrder(n) {
  return +n.toString().split('').sort((a,b) => a - b).reverse().join('');
}

