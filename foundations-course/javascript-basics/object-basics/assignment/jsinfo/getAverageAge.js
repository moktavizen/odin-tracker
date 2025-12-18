const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 29 };

const arr = [john, pete, mary];

function getAverageAge(users) {
  const ageSum = users.reduce((previous, current) => previous + current.age, 0);
  const avg = ageSum / users.length;

  return avg;
}

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
