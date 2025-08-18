//> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.

const fibonacci = function (n) {
  if (typeof n === "string") n = parseInt(n, 10);
  if (typeof n !== "number" || isNaN(n) || n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n <= 2) return 1;

  let fib1 = 1;
  let fib2 = 1;
  let temp = 0;

  for (let i = 3; i <= n; i++) {
    temp = fib2;
    fib2 = fib1 + fib2;
    fib1 = temp;
  }

  return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
