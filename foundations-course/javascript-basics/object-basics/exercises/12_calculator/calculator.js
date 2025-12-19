const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = (numArr) => numArr.reduce((result, num) => result + num, 0);

const multiply = (numArr) => numArr.reduce((result, num) => result * num, 1);

const power = (base, exponent) => base ** exponent;

// Source: https://en.wikipedia.org/wiki/Factorial#Computation
const factorial = (num) => {
  let f = 1;
  for (let i = 1; i <= num; i++) {
    f *= i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
