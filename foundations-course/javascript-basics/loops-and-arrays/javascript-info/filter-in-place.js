const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    if (!(a <= arr[i] && arr[i] <= b)) {
      arr.splice(i, 1);
      i--;
    }
  }
};
