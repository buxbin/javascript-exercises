const leapYears = function (year) {
  const dividedByFour = year % 4 === 0;
  const dividedByHundred = year % 100 === 0;
  const dividedByFourHundred = year % 400 === 0;

  if ((dividedByFour && !dividedByHundred) || dividedByFourHundred) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
