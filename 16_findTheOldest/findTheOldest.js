const findTheOldest = function (array) {
  const date = new Date();

  for (let i = 0; i < array.length; i++) {
    if (array[i].yearOfDeath === undefined) {
      array[i].yearOfDeath = date.getFullYear();
    }
  }

  array.sort((personA, personB) =>
    personA.yearOfDeath - personA.yearOfBirth >
    personB.yearOfDeath - personB.yearOfBirth
      ? 1
      : -1
  );

  return array[array.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
