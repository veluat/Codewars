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

//Take the Derivative

function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}

//The Wide-Mouthed frog!

function mouthSize(animal) {
  return animal.toLowerCase().match("alligator") ? "small" : "wide";
}

//Grasshopper - Grade book

function getGrade (s1, s2, s3) {
  
  let middle = (s1 + s2 + s3) / 3;

  if ( middle >= 90 ) {
    return "A";
  } else if ( middle >= 80) {
    return "B";
  } else if ( middle >= 70 ) {
    return "C";
  } else if ( middle >= 60 ) {
    return "D";
  } else {
    return "F";
  }
}
