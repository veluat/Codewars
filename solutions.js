/*8 kyu

How old will I be in 2099?

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
*/

//My solutions:

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