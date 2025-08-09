"use strict";

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

//Durch den start Array iterieren.
//Bei jedem Element prüfen, ob es in dem neuen Array schon existiert(durch das neue Array iterieren)
//Wenn es nicht existiert hinzufügen

function unique(arr) {
  let result = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!checkIfContains(strings[i], result)) {
      result[counter] = strings[i];
      counter++;
    }
  }

  return result;
}

function checkIfContains(val, arr) {
  let counter = 0;

  while (counter < arr.length) {
    if (arr[counter] === val) {
      return true;
    }
    counter++;
  }
  return false;
}

console.log(unique(strings));
