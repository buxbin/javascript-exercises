const palindromes = function (word) {
  let result = "";

  for (let c of word) {
    if (/^[a-zA-Z0-9]$/.test(c)) {
      result += c;
    }
  }

  let pointer = result.length - 1;
  result = result.toLowerCase();

  for (let i = 0; i < result.length; i++) {
    if (i === pointer || i > pointer) return true;

    if (result[i] === result[pointer]) {
      pointer--;
      continue;
    } else {
      return false;
    }
  }
};

// Do not edit below this line
module.exports = palindromes;
