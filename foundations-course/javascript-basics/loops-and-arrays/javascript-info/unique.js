const unique = (arr) => {
  const uniqueArr = [];

  arr.forEach((e, i, a) => {
    const prevElements = a.slice(0, i);
    const isAlreadyFound = prevElements.includes(e);

    if (isAlreadyFound === false) {
      uniqueArr.push(e);
    }
  });

  return uniqueArr;
};
