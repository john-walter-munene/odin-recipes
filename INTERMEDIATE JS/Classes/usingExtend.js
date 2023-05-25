// Example 1: Creating a new class (declaration-form)
// ===============================================================

// A base class is defined using the new reserved 'class' keyword
class Polygon {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor(height, width) {
      this.name = 'Polygon';
      this.height = height;
      this.width = width;
    }
  
    // Simple class instance methods using short-hand method
    // declaration
    sayName() {
      ChromeSamples.log('Hi, I am a ', this.name + '.');
    }
  
    sayHistory() {
      ChromeSamples.log('"Polygon" is derived from the Greek polus (many) ' +
        'and gonia (angle).');
    }
  
    // We will look at static and subclassed methods shortly
  }
  

class Square extends Polygon {
    constructor(length) {
      // Here, it calls the parent class' constructor with lengths
      // provided for the Polygon's width and height
      super(length, length);
      // Note: In derived classes, super() must be called before you
      // can use 'this'. Leaving this out will cause a reference error.
      this.name = "Square";
    }
  
    get area() {
      return this.height * this.width;
    }
  }
  
let pap = new Square(8)
console.log(pap.area)

// Extending Plain Objects.
const Animal = {
    speak() {
      console.log(`${this.name} makes a noise.`);
    },
  };
  
class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
Object.setPrototypeOf(Dog.prototype, Animal);
  
const d = new Dog("Mitzie");
d.speak(); // Mitzie makes a noise.
  
// Extending built in Objects.
class MyDate extends Date {
    getFormattedDate() {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
  }

// Species.
class MyArray extends Array {
    // Overwrite species to the parent Array constructor
    static get [Symbol.species]() {
      return Array;
    }
  }
  
const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
  
// Mix Ins.
const calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };

class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}

// Avoiding inheritenace.
class ReadOnlyMap extends Map {
    set() {
      throw new TypeError("A read-only map must be set at construction time.");
    }
  }

const m = new ReadOnlyMap([["a", 1]]); // TypeError: A read-only map must be set at construction time.

class ReadOnlyMap {
    #data;
    constructor(values) {
      this.#data = new Map(values);
    }
    get(key) {
      return this.#data.get(key);
    }
    has(key) {
      return this.#data.has(key);
    }
    get size() {
      return this.#data.size;
    }
    *keys() {
      yield* this.#data.keys();
    }
    *values() {
      yield* this.#data.values();
    }
    *entries() {
      yield* this.#data.entries();
    }
    *[Symbol.iterator]() {
      yield* this.#data[Symbol.iterator]();
    }
  }
  
