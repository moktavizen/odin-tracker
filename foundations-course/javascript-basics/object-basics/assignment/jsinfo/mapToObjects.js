const john = { name: "John", surname: "Smith", id: 1 };
const pete = { name: "Pete", surname: "Hunt", id: 2 };
const mary = { name: "Mary", surname: "Key", id: 3 };

const users = [john, pete, mary];

const usersMapped = users.map((user) => ({
  id: user.id,
  fullName: `${user.name} ${user.surname}`,
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith
