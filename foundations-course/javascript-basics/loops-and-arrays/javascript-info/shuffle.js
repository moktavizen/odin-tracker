// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
const shuffle = (array) => {
  // for i from n−1 down to 1 do
  for (let i = array.length - 1; i > 0; i--) {
    // j ← random integer such that 0 ≤ j ≤ i
    const j = Math.floor(Math.random() * (i + 1));

    // exchange a[j] and a[i]
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
