const repeatString = (str, n) => {
  if (n < 0) {
    return "ERROR";
  }

  let repeatedString = "";

  for (let i = 0; i < n; i++) {
    repeatedString += str;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
