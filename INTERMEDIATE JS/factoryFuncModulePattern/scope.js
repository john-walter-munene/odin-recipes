// Revisiting Scope.

// Scope ==== Variable access
// Context === this


// jQuery('.myClass');

// Scope A: Global scope out here
var myFunction = function () {
    // Scope B: Local scope in here
    var name = 'Todd';
    // console.log(name); // Todd
  };

// Uncaught ReferenceError: name is not defined
// console.log(name);

// Function Scope.
// Scope A
var myFunction = function () {
    // Scope B
    var myOtherFunction = function () {
      // Scope C
    };
  };

// Scope A
var myFunctionTwo = function () {
    // Scope B
    var name = 'Todd'; // defined in Scope B
    var myOtherFunction = function () {
      // Scope C: `name` is accessible here!
    };
  };


  // Scope A
var myFunctionThree = function () {
    // Scope B
    var name = 'Todd'; // defined in Scope B
    var myOtherFunction = function () {
      // Scope C: `name` is accessible here!
    };
  };

// Closures.
var sayHello = function (name) {
    var text = 'Hello, ' + name;
    return function () {
      console.log(text);
    };
  };

sayHello('Wally'); // nothing happens, no errors, just silence...

var helloWalter = sayHello('Walter');
helloWalter();

var $compile = function (template) {
    // some magic stuff here
    // scope is out of scope, though...
    return function (scope) {
      // access to `template` and `scope` to do magic with too
    };
  };