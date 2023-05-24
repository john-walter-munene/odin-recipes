class MyClass {
    // class methods
    constructor() { }
    method1() { }
    method2() { }
    method3() { }

  }

  class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
  }
  
// Usage:
let user = new User("John");
user.sayHi();

// Proof that a class is a type of a function.
console.log(typeof(User))

// rewriting class User in pure functions

// 1. Create constructor function
function UserTwo(name) {
    this.name = name;
  }
  // a function prototype has "constructor" property by default,
  // so we don't need to create it
  
  // 2. Add the method to prototype
  UserTwo.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  // Usage:
  let userTwo = new UserTwo("John");
  userTwo.sayHi();

// Getters and setters in Classes.
class userThree {
    constructor(name){
        // Invokes setter
        this.name = name
    }
    get name() {
        return this._name;
      }
    
    set name(value) {
        if (value.length < 4) {
          console.log("Name is too short.");
          return;
    }
    this._name = value;
    }
}

// Computed names.
class UserFour {

    name = "John";

    ['say' + 'Hi']() {
      console.log("Hello");
    }
  
  }
  
new UserFour().sayHi();

// Making bound methods with class fields

// Binding the method to the object, e.g. in the constructor.
class Button {
    constructor(value) {
      this.value = value;
    }
  
    click() {
      console.log(this.value);
    }
  }
  
let button = new Button("hello");

setTimeout(button.click, 1000); // undefined

// Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).
setTimeout(()=>button.click, 1000); // Hello

// Bind the method to object, e.g. in the constructor.

class ButtonTwo {
    constructor(value) {
        this.value = value;
    }
    
    click = ()=> {
        console.log(this.value)
    }
}

var buttonTwo = new ButtonTwo("Munene");

setTimeout(buttonTwo.click, 1000); // hello

// Summarizing basic classes.
class MyClassOne {
    prop = value; // property
  
    constructor() { // constructor
      // ...
    }
  
    method() {} // method
  
    get something() {} // getter method
    set somethingOne(param) {} // setter method
  
    [Symbol.iterator]() {} // method with computed name (symbol here)
    // ...
  }