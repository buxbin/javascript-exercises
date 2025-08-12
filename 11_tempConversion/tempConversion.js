const convertToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  celsius = celsius.toFixed(1);
  celsius = parseFloat(celsius);

  return celsius;
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  fahrenheit = fahrenheit.toFixed(1);
  fahrenheit = parseFloat(fahrenheit);

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
