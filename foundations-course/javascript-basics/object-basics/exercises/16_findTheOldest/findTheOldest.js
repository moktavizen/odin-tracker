const findTheOldest = (people) => {
  const validPeople = people.map((person) => ({
    name: person.name,
    yearOfBirth: person.yearOfBirth,
    yearOfDeath: person.yearOfDeath || new Date().getFullYear(),
  }));

  const sortByOldest = validPeople.sort((personA, personB) => {
    const a = personA.yearOfDeath - personA.yearOfBirth;
    const b = personB.yearOfDeath - personB.yearOfBirth;

    return b - a;
  });

  return sortByOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
