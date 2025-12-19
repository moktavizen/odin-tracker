const fibonacci = (n) => {
  if (typeof n === "string") {
    n = Number(n);
  }

  if (n < 0) {
    return "OOPS";
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  }

  let f;
  let n1 = 1;
  let n2 = 1;
  for (let i = 3; i <= n; i++) {
    f = n1 + n2;
    n1 = n2;
    n2 = f;
  }

  return f;
};

// Do not edit below this line
module.exports = fibonacci;
