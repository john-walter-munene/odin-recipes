let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
      },
    shoot() {}
  };
let rabbit = {
    jumps: true
  };
  
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// we can find both properties in rabbit now:
console.log( rabbit.eats ); // true (**)
console.log( rabbit.jumps ); // true
console.log(rabbit.walk())

let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  
// walk is taken from the prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)

// Writing doesn't use prototype.
rabbit.shoot = function() {
    console.log("Rabbit! Bounce-bounce!");
  };
  
rabbit.shoot(); // Rabbit! Bounce-bounce!

// Acessor properties are an exception.
let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };

let admin = {
    __proto__: user,
    isAdmin: true
  };

console.log(admin.fullName) // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protected

// animal has methods
let animal1 = {
    walk() {
      if (!this.isSleeping) {
        console.log(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbit1 = {
    name: "White Rabbit",
    __proto__: animal1
  };
  
  // modifies rabbit.isSleeping
  rabbit1.sleep();
  
  console.log(rabbit1.isSleeping); // true
  console.log(animal1.isSleeping); // undefined (no such property in the prototype)

// For in loops.
// Object.keys only returns own keys
console.log(Object.keys(rabbit1)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit1) console.log(prop); // jumps, then eats

// Filtering out inherited properties.
let animalOne = {
    eats: true
  };
  
  let rabbitOne = {
    jumps: true,
    __proto__: animalOne
  };
  
  for(let prop in rabbitOne) {
    let isOwn = rabbitOne.hasOwnProperty(prop);
  
    if (isOwn) {
      console.log(`Our: ${prop}`); // Our: jumps
    } else {
      console.log(`Inherited: ${prop}`); // Inherited: eats
    }
  
  }
