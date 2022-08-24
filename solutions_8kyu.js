//8 kyu 20 solutions

//How old will I be in 2099?

function  calculateAge(a, b) {
  if (a==b) {
    return 'You were born this very year!';
} else if (a < b) {
  if (b - a == 1) return 'You are ' + (b - a) + ' year old.';
  if (b - a > 1) return 'You are ' + (b - a) + ' years old.';
} else if (a > b) {
  if (a - b == 1) return 'You will be born in ' + (a - b) + ' year.';
  if (a - b > 1) return 'You will be born in ' + (a - b) + ' years.';
}
}

//What is between?

function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
  arr.push(i);
}
  return arr;
}

// I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
  if (nbPetals % 6 == 1) {
    return ("I love you");
  } else if (nbPetals % 6 == 2) {
    return ("a little");
  } else if (nbPetals % 6 ==3) {
    return ("a lot");
  } else if (nbPetals % 6 ==4) {
    return ("passionately");
  } else if (nbPetals % 6 == 5) {
    return ("madly");
  } else{
    return ("not at all");
  }
}

//Multiply

function multiply(a, b){
  return a * b;
}

//Opposite number

function opposite(number) {
  return -number;
}

//Sum of positive

function positiveSum(arr) {
  let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) sum += arr[i]
    }
    return sum
}

//Remove First and Last Character

function removeChar(str){
  return str.slice(1, str.length - 1);
};

//You only need one - Beginner

function check(a, x) {
  return a.includes(x) ? true : false; 
}

//Beginner - Lost Without a Map

function maps(x){
  let newX = [];
    for(let i = 0; i < x.length; i++){
        newX.push(x[i] * 2);
    }
    return newX; 
}

//Abbreviate a Two Word Name

function abbrevName(name){
  const newArray = name.split(" ")
  return (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
    }

//Keep Hydrated!

function litres(time) {
  return Math.floor (time/2);
}

//Is he gonna survive?

function hero(bullets, dragons){
  let sumBullets = bullets;
    if (sumBullets >= dragons*2) {
    return true;
  } else {
    return false;
  }
}

//DNA to RNA Conversion

function DNAtoRNA(dna) {
  let newDna = '';
for (let i = 0; i < dna.length; i++){
  if (dna[i] == 'T'){
    newDna += 'U';
} else {
  newDna += dna[i];
}
}
return newDna;
}

//Transportation on vacation

function rentalCarCost(d) {
  let totalCost = 0;
  let costOneDay = 40;
  if (d<3) {
    totalCost = costOneDay * d;
    return totalCost;
  } else if (d==3 || d<7) {
    totalCost = costOneDay * d - 20;
    return totalCost;
  } else if (d>=7) {
    totalCost = costOneDay * d - 50;
    return totalCost;
}
}

//Simple multiplication

function simpleMultiplication(number) {
  let myNumber = number;
  if(number % 2 == 0) {
    return(myNumber * 8);
  } else {
    return(myNumber * 9);
}
}

//Reversed Strings

function solution(str){
  return str.split("").reverse().join("");
}

//Convert number to reversed array of digits

function digitize(n) {
  return ("" + n).split("").map(el => el * 1).reverse()
}

//Convert a String to a Number!

const stringToNumber = function(str){
  // put your code here
  return Number(str);
}

//Counting sheep...

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(item => item === true).length
}

//Grasshopper - Summation

var summation = function (num) {
  return num*(num+1)/2
    }
