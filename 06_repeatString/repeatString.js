const repeatString = function (string, count) {
  if (count < 0) return "ERROR";
  let resultString = "";
  for (let i = 0; i < count; i++) {
    resultString += string;
  }
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
