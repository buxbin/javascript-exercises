const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (num) {
  return parseInt(num.reduce((sum, num) => sum + num, 0));
};

const multiply = function (num) {
  return num.reduce((res, num) => res * num, 1);
};

const power = function (base, pow) {
  let result = 1;
  for (let i = 1; i <= pow; i++) {
    result *= base;
  }
  return result;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
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
