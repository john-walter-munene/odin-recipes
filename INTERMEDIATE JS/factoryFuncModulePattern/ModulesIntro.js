// define module
var Module = (function () {
    var privateFunction = () => {
        // Do some anazing stuff here.
    }
    return {
      myMethod: function () {
        console.log('myMethod has been called.');
      },
      someOtherMethod: () => {
        console.log('someOtherMethod has been called too.');
      }
    };
  })();
  
// call module + methods
Module.myMethod();
Module.someOtherMethod();

// How it works.
var ModuleTwo = (function () {
    var privateMethod = function () {
  
    };
    return {
      publicMethod: function () {
        // has access to `privateMethod`, we can call it:
        // privateMethod();
      }
    };
  })();

// Example
// Returning an object making use of Public and Private Classes.

var ModuleThree = (function () {
    var myModule = {};
    var _privateMethod = () => {
        //  Perform some operations
    };

    myModule.publicMethod = () => {};
    myModule.anotherPublicmethod = () => {};

    return myModule; // Returns the Object with Public methods.
})();

// Usage.
ModuleThree.publicMethod();

// How scoping back bites.
var age = 100;
if (age > 12) {
    var dogYears = age * 7;
    console.log(`You are ${dogYears} old.`)
}