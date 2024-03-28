// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
// 3. Create Instance of "hero" class
// 4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
// 5. Create instance of "Mega" class


class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  greet() {
    return `Hello ${this.name} You are a HERO, You current level is ${this.level}!`
  };
};

const swordMan = new Hero("SwordMan", "50");

class Mage extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
}

const mage = new Mage("mage", "99", "Fireblossom");


console.log(swordMan);
console.log(mage);
