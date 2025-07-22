const removeFromArray = (arr, ...targets) => {
  targets.forEach((target) => {
    while (arr.includes(target)) {
      arr.splice(arr.indexOf(target), 1);
    }
  });

  return arr;

  // NOTE: Better solution would be
  // Return a new array containing only the items
  // that are NOT included in the 'targets' list.
  // return arr.filter((e) => !targets.includes(e));
};

// Do not edit below this line
module.exports = removeFromArray;
