let obj = {
    test: undefined
  };
  
  alert( obj.test ); // it's undefined, so - no such property?
  
  alert( "test" in obj ); // true, the property does exist!

// The for in loop.
// for (key in object) {
    // executes the body for each key among object properties}

let user = {
    name: "John",
    age: 30,
    isAdmin: true
    };

for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
   alert( user[key] ); // John, 30, true
    }
// Ordered like an object
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
    };
    
    for (let code in codes) {
    alert(code); // 1, 41, 44, 49
    }

    // Integer properties? What’s that?

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

let user_1 = {
    name: "John",
    surname: "Smith"
  };
  user_1.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in user) {
    alert( prop ); // name, surname, age
  }

// Fixing the ordered like an object.
let codes_2 = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in codes_2) {
    alert( +code ); // 49, 41, 44, 1
  }