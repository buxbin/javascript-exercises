const removeFromArray = function (array, ...remove) {
  let result = [];

  array.forEach((element) => {
    if (!remove.includes(element)) {
      result.push(element);
    }
  });
  return result;
};
// Do not edit below this line
module.exports = removeFromArray;
