const palindromes = (string) => {
  // RegEx approach
  const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Filter approach
  // const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  // const cleanedString = string
  //   .toLowerCase()
  //   .split("")
  //   .filter((char) => alphanumeric.includes(char))
  //   .join("");

  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
