//Fake Binary

function fakeBin(x){
  x = x.split('');
  
  let toBin = x => {
    if (x < 5)
      return 0;
    else return 1
  }
  return x.map(toBin).join('');
}

//String repeat

function repeatStr (n, s) {
  return s.repeat(n);
}

//Convert a Boolean to a String

function booleanToString(b){
  return b ? true.toString() : false.toString();
}

//Beginner Series #1 School Paperwork

function paperwork(n, m) {
  if (n <0 || m < 0) {
    return 0;
  } else {
    return n*m;
  }
}

//Return Negative

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

//Alan Partridge II - Apple Turnover

function apple(x){
  return Math.pow(x, 2) > 1000 ? "It's hotter than the sun!!" 
  : "Help yourself to a honeycomb Yorkie for the glovebox."
}

//Cat years, Dog years

var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;
  if (humanYears == 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears == 2) {
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 24 + 4*(humanYears - 2);
    dogYears = 24 + 5*(humanYears - 2);
  }
  return [humanYears,catYears,dogYears];
}


//Enumerable Magic #3 - Does My List Include This?

function include(arr, item){
  return arr.includes(item);
}

//Grasshopper - Terminal game move function

function move (position, roll) {
  return position + roll*2;
}

//If you can't sleep, just count sheep!!

var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) { str += `${i} sheep...`; }
  return str;
}

//Remove duplicates from list

function distinct(a) {
  return [...new Set(a)];
}

//Filling an array (part 1)

const arr = N => {
  const arr = [];
  for (let i = 0; i < N; i++) {
  arr.push(i);
  }
  return arr;
}

//Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  return newArr.filter((elem, index) => newArr.indexOf(elem) === index).sort((a,b) => a - b);
}

//Regular Ball Super Ball

var Ball = function(ballType) {
  return this.ballType = ballType ? ballType : "regular";
};

//Multiplication table for number

function multiTable(number) {
  let mult1 = 1 * number;
  let mult2 = 2 * number;
  let mult3 = 3 * number;
  let mult4 = 4 * number;
  let mult5 = 5 * number;
  let mult6 = 6 * number;
  let mult7 = 7 * number;
  let mult8 = 8 * number;
  let mult9 = 9 * number;
  let mult10 = 10 * number;
  
  return `1 * ${number} = ${mult1}\n2 * ${number} = ${mult2}\n3 * ${number} = ${mult3}\n4 * ${number} = ${mult4}\n5 * ${number} = ${mult5}\n6 * ${number} = ${mult6}\n7 * ${number} = ${mult7}\n8 * ${number} = ${mult8}\n9 * ${number} = ${mult9}\n10 * ${number} = ${mult10}`
}

//Bin to Decimal

function binToDec(bin){
  return parseInt(bin, 2);
}

//Grasshopper - Messi Goals

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//Training JS #5: Basic data types--Object

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

//Printing Array elements with Comma delimiters

function printArray(array){
  return array.join(',');
}

//Powers of 2

function powersOfTwo(n){
 let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
    return arr;
}

