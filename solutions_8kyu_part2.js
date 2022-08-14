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
