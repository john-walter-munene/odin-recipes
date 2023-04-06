// An introduction to immediately invoked function expressions.

(function (){
    // Logic here
})();

// Named function declaration.
function myFunction() {
    // Logic here.
};

// Assignment of function expression to a variable.
var myVariable = function () {/*Logic here*/};

// Assignment of a fucntion expression to a property.

var myObject = {
    myFunction: function(){/*Logic here*/}
};

// Functions created in the context of expressions are also function expressions.
// Anything within the parenthesis is also part of an expression.
(function() {/*Logic here*/});

// Anything after the not operator is part of a function.
!function() {/*Logic here*/}

var foo = "foo";

(function (innerFoo) {
    // Outputs: "foo"
    console.log(innerFoo);
})(foo);
