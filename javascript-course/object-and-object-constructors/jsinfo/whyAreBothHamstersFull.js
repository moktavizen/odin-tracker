let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// This one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// This one also has it, why? fix please.
alert(lazy.stomach); // apple

// When we feed one of them, the other one is also full. Why? How can we fix it?
// As a common solution, all properties that describe the state of a particular object, like stomach above, should be written into that object. That prevents such problems.
