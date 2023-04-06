// JavaScript Module Pattern Basics.


// Creating a module.
(function() {
    'use strict';
    // Your code here
    // All function and variables are scoped to this function
  })();

// Exporting a module.
var myModule = (function() {
    'use strict';

})();

// Create a public method for our module to call.

var myModuleOne = (function() {
    'use strict';
    return {
        publicMethod: function() {
            console.log('Hello World.');
        }
    };
})();

myModuleOne.publicMethod();// Outputs Hello World.

// Private methods and properties.

var myModuleTwo = (function() {
    'use strict';

    var _privatePropety = 'Hello World';

    function _privateMethod() {
        console.log(_privatePropety);
    };

    return {
        publicMethod: function() {
            _privateMethod();
        }
    };
})();

myModuleTwo.publicMethod(); // Outputs Hello World
// console.log(myModuleTwo._privatePropety); // Undefined.
// myModuleTwo._privateMethod();

// Revealing module pattern.

var myModuleThree = (function(){
    'use strict';

    var _privatePropety = 'Hello Walter';
    var publicProperty = 'I am a public property.';

    function _privateMethod() {
        console.log(_privatePropety);
    };

    function publicMethod() {
        _privateMethod();
    };

    return{
        publicMethod: publicMethod,
        publicProperty: publicProperty
    };
})();

myModuleThree.publicMethod();
console.log(myModuleThree.publicProperty)

console.log(myModule._privateProperty); // is undefined protected by the module closure
myModule._privateMethod(); // is TypeError protected by the module closure