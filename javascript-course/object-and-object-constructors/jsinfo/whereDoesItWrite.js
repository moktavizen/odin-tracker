let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?
// rabbit. Since `this` refer to object before dot notation at call time, rabbit.eat() modifies rabbit.
