// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};
Object.setPrototypeOf(table, head);

let bed = {
  sheet: 1,
  pillow: 2,
};
Object.setPrototypeOf(bed, table);

let pockets = {
  money: 2000,
};
Object.setPrototypeOf(pockets, bed);

console.log(pockets.pen);
console.log(bed.glasses);

// 2.
// head.glasses should be faster.
// Wrong. In *modern* js engine it doesn't matter.
