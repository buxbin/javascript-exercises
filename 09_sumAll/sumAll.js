const sumAll = function (a, b) {
  if (a < 0 || b < 0) return "ERROR";
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  let sum = 0;
  let larger = a > b ? a : b;
  let smaller = a > b ? b : a;
  for (let i = larger; i >= smaller; i--) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
