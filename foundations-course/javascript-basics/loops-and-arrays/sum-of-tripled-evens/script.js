// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.
const sumOfTripledEvens = (array) => {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((sum, current) => sum + current, 0);
};

const arr = [1, 2, 3, 4, 5];

alert(sumOfTripledEvens(arr));
