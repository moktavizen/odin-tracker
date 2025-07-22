const sumAll = (numA, numB) => {
  if ([numA, numB].some((num) => num < 0 || !Number.isInteger(num))) {
    return "ERROR";
  }

  let min = 0;
  let max = 0;
  if (numA < numB) {
    min = numA;
    max = numB;
  } else {
    min = numB;
    max = numA;
  }

  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;

  // NOTE: Better way to swap would be
  // if (numA > numB) [numA, numB] = [numB, numA];
  //
  // let sumBetween = 0;
  // for (let i = numA; i <= numB; i++) {
  //   sumBetween += i;
  // }
  // return sumBetween;
};

// Do not edit below this line
module.exports = sumAll;
