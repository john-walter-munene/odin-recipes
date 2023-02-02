// Create an empty object

let user = new Object(); // "Object constructor" Syntax.
let user_1 = {}; // "Object literal" syntax. 

let user_2 = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

// get property values of the object:
alert( user_2.name ); // John
alert( user_2.age ); // 30

// Adding a boolean value.
user_2.isAdmin = true;
console.log(user_2);

// Removing a property 
delete user_2.isAdmin;
console.log(user_2)

// Multiple words used must be quoted.
let user_4 = {
    name: "John",
    age: 30,
    "likes birds": true,  // multiword property name must be quoted
  }; 

  console.log(user_4)

// Another way to declare keys.
let programmers = {}

// Set
programmers["user"] = true

// get 
console.log(programmers["user"])

// delete
delete programmers["user"]
console.log(programmers)


let user_5 = {
    name: "John",
    age: 30
  };
  
  let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  alert( user_5[key] ); // John (if enter "name")


// Computed properties.

let fruit = prompt("Which fruit do you want to buy?", "apple")

let bag = {
    [fruit] : 5 // the name of the property is taken from the variable fuit.
};

alert(bag.apple); //  5 if fruit = "apple"

// Alternative method for computed property.

let cultery = prompt("Which cutlery do you wish to buy?", "pen-knife");

let kitchen = {};

kitchen[cultery] = 5;

// Property value shorthand.

function makeUser(name, age){
    return {
        name : name,
        age : age
    };
};

let person = makeUser("John", 30)
console.log(person.name)
