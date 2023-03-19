function Foo () {
    // this is fooInstance
    this.property = 'Default Value';
  }
  // Constructor invocation
  const fooInstance = new Foo();
  fooInstance.property; // => 'Default Value'

class Bar {
    constructor() {
      // this is barInstance
      this.property = 'Default Value';
    }
  }
  // Constructor invocation
  const barInstance = new Bar();
  barInstance.property; // => 'Default Value'

const reg1 = new RegExp('\\w+');
const reg2 = RegExp('\\w+');
reg1 instanceof RegExp; // => true
reg2 instanceof RegExp; // => true
reg1.source === reg2.source; // => true

function Vehicle(type, wheelsCount) {
    this.type = type;
    this.wheelsCount = wheelsCount;
    return this;
  }
  // Function invocation
  const car = Vehicle('Car', 4);
  car.type; // => 'Car'
  car.wheelsCount // => 4
  car === window // => true

  function VehicleOne(type, wheelsCount) {
    if (!(this instanceof Vehicle)) {
      throw Error('Error: Incorrect invocation');
    }
    this.type = type;
    this.wheelsCount = wheelsCount;
    return this;
  }
  // Constructor invocation
  const carOne = new VehicleOne('Car', 4);
  carOne.type               // => 'Car'
  carOne.wheelsCount        // => 4
  carOne instanceof VehicleOne // => true
  // Function invocation. Throws an error.
  const brokenCar = VehicleOne('Broken Car', 3);

// Indirect invokation.

const rabbit = { name: 'White Rabbit' };
function concatName(string) {
  console.log(this === rabbit); // => true
  return string + this.name;
}
// Indirect invocations
concatName.call(rabbit, 'Hello ');  // => 'Hello White Rabbit'
concatName.apply(rabbit, ['Bye ']); // => 'Bye White Rabbit'

function Runner(name) {
    console.log(this instanceof Rabbit); // => true
    this.name = name;
  }
  function Rabbit(name, countLegs) {
    console.log(this instanceof Rabbit); // => true
    // Indirect invocation. Call parent constructor.
    Runner.call(this, name);
    this.countLegs = countLegs;
  }
  const myRabbit = new Rabbit('White Rabbit', 4);
  myRabbit; // { name: 'White Rabbit', countLegs: 4 }

  function multiply(number) {
    'use strict';
    return this * number;
  }
  // create a bound function with context
  const double = multiply.bind(2);
  // invoke the bound function
  double(3); // => 6
  double(10); // => 20

// This inside a bound function.

const numbers = {
    array: [3, 5, 10],
    getNumbers() {
      return this.array;
    }
  };
  // Create a bound function
const boundGetNumbers = numbers.getNumbers.bind(numbers);
boundGetNumbers(); // => [3, 5, 10]
// Extract method from object
const simpleGetNumbers = numbers.getNumbers;
simpleGetNumbers(); // => undefined or throws an error in strict mode

function getThis() {
    'use strict';
    return this;
  }
  const one = getThis.bind(1);
  one();         // => 1
  one.call(2);   // => 1
  one.apply(2);  // => 1
  one.bind(2)(); // => 1
  new one();

// Arrow functions.

const hello = (name) => {
    return 'Hello ' + name;
  };

hello('World'); // => 'Hello World'

// Keep only even numbers
[1, 2, 5, 6].filter(item => item % 2 === 0); // => [2, 6]

const sumArguments = (...args) => {
    console.log(typeof arguments); // => 'undefined'
    return args.reduce((result, item) => result + item);
  };
sumArguments.name      // => ''
sumArguments(5, 5, 6); // => 16

class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    log() {
      console.log(this === myPoint); // => true
      setTimeout(() => {
        console.log(this === myPoint);      // => true
        console.log(this.x + ':' + this.y); // => '95:165'
      }, 1000);
    }
  }
  
const myPoint = new Point(95, 165);
myPoint.log();

const getContext = () => {
    console.log(this === window); // => true
    return this;
   };
console.log(getContext() === window); // => true

const numbersTwo = [1, 2];
(function() { 
  const get = () => {
    console.log(this === numbersTwo); // => true
    return this;
  };
  
  console.log(this === numbersTwo); // => true
  get(); // => [1, 2]
  
  // Try to change arrow function context manually
  get.call([0]);  // => [1, 2]
  get.apply([0]); // => [1, 2]
  
  get.bind([0])(); // => [1, 2]
}).call(numbersTwo);

function Period (hours, minutes) { 
    this.hours = hours;
    this.minutes = minutes;
  }
  Period.prototype.format = () => {
    console.log(this === window); // => true
    return this.hours + ' hours and ' + this.minutes + ' minutes';
  };
  const walkPeriod = new Period(2, 30);
  walkPeriod.format(); // => 'undefined hours and undefined minutes'


  function Period (hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }
  Period.prototype.format = function() {
    console.log(this === walkPeriod); // => true
    return this.hours + ' hours and ' + this.minutes + ' minutes';
  };
  const walkPeriod = new Period(2, 30);
  walkPeriod.format(); // => '2 hours and 30 minutes'
