const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 28 };

const arr = [john, pete, mary];

function sortByAge(users) {
  users.sort((userA, userB) => {
    const a = userA.age;
    const b = userB.age;

    return a - b;
  });
}

sortByAge(arr);

alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
