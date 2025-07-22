const roundOneDecimal = (num) => Math.round(num * 10) / 10;

const convertToCelsius = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * (5 / 9);

  return roundOneDecimal(celsius);
};

const convertToFahrenheit = (celsius) => {
  const fahrenheit = celsius * (9 / 5) + 32;

  return roundOneDecimal(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
