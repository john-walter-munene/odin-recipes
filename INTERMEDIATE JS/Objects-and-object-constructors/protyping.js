// Initialize a constructor function for a new Hero

function Hero(name, level) {
    this.name = name;
    this.level = level;
  };

Object.getPrototypeOf(hero1);
// Add a hero method to the Hero prototype.
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
};

let hero1 = new Hero('Bjorn', 1);

// console.log(hero1)
hero1.greet();