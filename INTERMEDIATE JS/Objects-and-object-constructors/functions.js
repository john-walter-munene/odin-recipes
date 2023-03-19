function sum(a, b) {
    // console.log(this === window); // => true
    this.myNumber = 20; // add 'myNumber' property to global object
    return a + b;
  }
  // sum() is invoked as a function
  // this in sum() is a global object (window)
  sum(15, 16);     // => 31
  // window.myNumber; // => 20

// console.log(this === window); // => true
// this.myString = 'Hello World!';
// console.log(window.myString); // => 'Hello World!'

function multiply(a, b) {
    'use strict'; // enable the strict mode
    console.log(this === undefined); // => true
    return a * b;
  }
  // multiply() function invocation with strict mode enabled
  // this in multiply() is undefined
  multiply(2, 5); // => 10

  function nonStrictSum(a, b) {
    // non-strict mode
    console.log(this === window); // => true
    return a + b;
  }
  function strictSum(a, b) {
    'use strict';
    // strict mode is enabled
    console.log(this === undefined); // => true
    return a + b;
  }
  // nonStrictSum() is invoked as a function in non-strict mode
  // this in nonStrictSum() is the window object
  nonStrictSum(5, 6); // => 11
  // strictSum() is invoked as a function in strict mode
  // this in strictSum() is undefined
  strictSum(8, 12); // => 20

  const numbers = {
    numberA: 5,
    numberB: 10,
    sum: function() {
      console.log(this === numbers); // => true
      function calculate() {
        // this is window or undefined in strict mode
        console.log(this === numbers); // => false
        return this.numberA + this.numberB;
      }
      return calculate();
    }
  };
  numbers.sum(); // => NaN or throws TypeError in strict mode

  const numbersOne = {
    numberA: 5,
    numberB: 10,
    sum: function() {
      console.log(this === numbersOne); // => true
      function calculate() {
        console.log(this === numbersOne); // => true
        return this.numberA + this.numberB;
      }
      // use .call() method to modify the context
      return calculate.call(this);
    }
  };
  numbers.sum(); // => 15

  // When using arrow functions.
  const numbersTwo = {
    numberA: 5,
    numberB: 10,
    sum: function() {
      console.log(this === numbersTwo); // => true
      const calculate = () => {
        console.log(this === numbersTwo); // => true
        return this.numberA + this.numberB;
      }
      return calculate();
    }
  };
  numbers.sum(); // => 15

  // Method invocation.
  const myObject = {
    // helloMethod is a method
    helloMethod: function() {
      return 'Hello World!';
    }
  };
  const message = myObject.helloMethod();

  const words = ['Hello', 'World'];
words.join(', ');   // method invocation
const obj = {
  myMethod() {
    return new Date().toString();
  }
};
obj.myMethod();     // method invocation
const func = obj.myMethod;
func();             // function invocation
parseFloat('16.6'); // function invocation
isNaN(0);           // function invocation

const calc = {
    num: 0,
    increment() {
      console.log(this === calc); // => true
      this.num += 1;
      return this.num;
    }
  };
  // method invocation. this is calc
  calc.increment(); // => 1
  calc.increment(); // => 2

  const myDog = Object.create({
    sayName() {
      console.log(this === myDog); // => true
      return this.name;
    }
  });
  myDog.name = 'Milo';
  // method invocation. this is myDog
  myDog.sayName(); // => 'Milo'

  class Planet {
    constructor(name) {
      this.name = name;
    }
    getName() {
      console.log(this === earth); // => true
      return this.name;
    }
  }
  const earth = new Planet('Earth');
  // method invocation. the context is earth
  earth.getName(); // => 'Earth'

  function Pet(type, legs) {
    this.type = type;
    this.legs = legs;
    this.logInfo = function() {
      console.log(this === myCat); // => false
      console.log(`The ${this.type} has ${this.legs} legs`);
    }
  }
  const myCat = new Pet('Cat', 4);
  // logs "The undefined has undefined legs"
  // or throws a TypeError in strict mode
  setTimeout(myCat.logInfo, 1000);