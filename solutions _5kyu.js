//5 kyu Add 1 solution

/*Regex Password Validation

You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
*/

//My solution:

const REGEXP = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/;
