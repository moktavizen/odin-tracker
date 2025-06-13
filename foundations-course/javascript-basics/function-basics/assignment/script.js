// For now, just write each function and test the output with console.log.
//
//   Write a function called add7 that takes one number and returns that number + 7.
//   Write a function called multiply that takes 2 numbers and returns their product.
//   Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
//   Write a function called lastLetter that takes a string and returns the very last letter of that string:
//     lastLetter("abcd") should return "d"

function add7(num1) {
  return num1 + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function capitalize(str) {
  return `${str.at(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
}

function lastLetter(text) {
  return text.slice(-1);
}
