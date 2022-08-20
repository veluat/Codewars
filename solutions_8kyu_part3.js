//Grasshopper - Array Mean

var findAverage = function (nums) {
  let num = nums.reduce((el,sum) => el + sum, 0);
  return num / nums.length;
}

//Welcome to the City

function sayHello( name, city, state ) {
  let person = name.join(' ');
  return `Hello, ${person}! Welcome to ${city}, ${state}!`;
}

//Beginner Series #2 Clock

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}
