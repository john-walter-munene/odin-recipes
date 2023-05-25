class DateFormatter extends Date {

    getFormattedDate() {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
  
  }
  
console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
// Expected output: "19-Aug-1975"
  
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Not actually a number!

class ParentClass {}
class ChildClass extends ParentClass {}

// Allows inheritance of static properties
Object.getPrototypeOf(ChildClass) === ParentClass;
// Allows inheritance of instance properties
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;

class SomeClass extends class {
    constructor() {
      console.log("Base class");
    }
  } {
    constructor() {
      super();
      console.log("Derived class");
    }
  }
  
  new SomeClass();
  // Base class
  // Derived class

  
// Extending Null.
new (class extends null {})();
// TypeError: Super constructor null of anonymous class is not a constructor

new (class extends null {
  constructor() {}
})();
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

new (class extends null {
  constructor() {
    super();
  }
})();
// TypeError: Super constructor null of anonymous class is not a constructor

class NullClass extends null {
    constructor() {
      // Using new.target allows derived classes to
      // have the correct prototype chain
      return Object.create(new.target.prototype);
    }
  }
  
  const proto = Object.getPrototypeOf;
  console.log(proto(proto(new NullClass()))); // null
  