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
