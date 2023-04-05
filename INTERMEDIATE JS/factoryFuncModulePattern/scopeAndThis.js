// Scope and this.

var myFunction = function () {
    console.log(this); // this = global, [object Window]
  };
//  myFunction();

var myObject = {};
    myObject.myMethod = function () {
    console.log(this); // this = Object { myObject }
  };

  /*
var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
    console.log(this); // this = <nav> element
};
nav.addEventListener('click', toggleNav, false);
*/

var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
  console.log(this); // <nav> element
  setTimeout(function () {
    console.log(this); // [object Window]
  }, 1000);
};
nav.addEventListener('click', toggleNav, false);

// Changing scope with .call(), .apply() and .bind().
var links = document.querySelectorAll('nav li');
for (var i = 0; i < links.length; i++) {
  console.log(this); // [object Window]
};

// Call() and apply().

// .call()
var linksTwo = document.querySelectorAll('nav li');
for (var i = 0; i < linksTwo.length; i++) {
  (function () {
    console.log(this);
  }).call(linksTwo[i]);
};

myFunction(); // invoke myFunction
myFunction.call(scope); // invoke myFunction using .call()


// .bind()
// works
nav.addEventListener('click', toggleNav, false);

// will invoke the function immediately
nav.addEventListener('click', toggleNav(arg1, arg2), false);

// Fix it by:
nav.addEventListener('click', function () {
    toggleNav(arg1, arg2);
  }, false);

nav.addEventListener('click', toggleNav.bind(scope, arg1, arg2), false);

// Private and public scope.

(function () {
    // private scope inside here
  })();

(function () {
    var myFunction = function () {
      // do some stuff here
    };
  })();

// How can you make a function in a private scope available to the public?
// Modules are the answer :-) 