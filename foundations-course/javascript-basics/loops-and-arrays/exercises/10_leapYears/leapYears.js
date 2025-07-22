const leapYears = (year) => {
  let isLeapYear = false;

  if (year % 4 === 0) {
    isLeapYear = true;
    if (year % 100 === 0) {
      isLeapYear = false;
      if (year % 400 === 0) {
        isLeapYear = true;
      }
    }
  }

  // NOTE: Better way would be
  // if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  //   isLeapYear = true;
  // }

  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
