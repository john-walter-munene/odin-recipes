const bigDay = new Date(2019, 6, 19);

console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}

class MyClass {
    // Constructor
    constructor() {
      // Constructor body
    }
    // Instance field
    myField = "foo";
    // Instance method
    myMethod() {
      // myMethod body
    }
    // Static field
    static myStaticField = "bar";
    // Static method
    static myStaticMethod() {
      // myStaticMethod body
    }
    // Static block
    static {
      // Static initialization code
    }
    // Fields, methods, static fields, and static methods all have
    // "private" forms
    #myPrivateField = "bar";
  }

// Using functions as constructors.
function MyClassTwo() {
    this.myField = "foo";
    // Constructor body
  }
  MyClassTwo.myStaticField = "bar";
  MyClassTwo.myStaticMethod = function () {
    // myStaticMethod body
  };
  MyClassTwo.prototype.myMethod = function () {
    // myMethod body
  };
  
  (function () {
    // Static initialization code
  })();

// Constructing a class.
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();

class Color {
    constructor(r, g, b) {
      // Assign the RGB values as a property of `this`.
      this.values = [r, g, b];
    }
  }

const red = new Color(255, 0, 0);
console.log(red);
    
// A class method can read the private fields of other instances, as long as they belong to the same class
class ColorThree {
    #values;
    constructor(r, g, b) {
      this.#values = [r, g, b];
    }
    redDifference(anotherColor) {
      // #values doesn't necessarily need to be accessed from this:
      // you can access private fields of other instances belonging
      // to the same class.
      return this.#values[0] - anotherColor.#values[0];
    }
  }
  
const redThree = new ColorThree(255, 0, 0);
const crimson = new ColorThree(220, 20, 60);
redThree.redDifference(crimson); // 35
  