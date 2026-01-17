// Initialize constructor function / object constructor
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Add prototype method
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
};

function Warrior(name, level, weapon) {
  // Copy properties from hero constructor
  Hero.call(this, name, level);

  this.weapon = weapon;
}

// Link prototypes
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
};

// Initialize individual character instances
const hero1 = new Warrior("Bjorn", 1, "mace");
const hero2 = new Healer("Kanin", 1, "blessing");
