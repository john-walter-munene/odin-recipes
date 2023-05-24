let obj = {
    get propName() {
        // getter, the code executed on getting obj.propName
    },

    set propName(value) {
        // setter, the code executed on setting obj.propName = value
    }
};

// Sample use case.

let user = {
    name: "John",
    surname: "Njeru",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
      }
};

console.log(user.fullName)

// user.fullName = "Test"; // Error (property has only a getter)

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper

// Creating an accessor `fullName` with `defineProperty` - passing a descriptor with get and set.
let userTwo = {
    name: "John",
    surname: "Walter"
  };
  
  Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });
  
console.log(userTwo.fullName); // John Walter

for (let key in userTwo) console.log(key); // name, surname

// Supplying get and value in the same descriptor leads to an error.
// Error: Invalid property descriptor.
/*Object.defineProperty({}, 'prop', {
    get() {
      return 1
    },
  
    value: 2
  });*/

// Smarter Getters/Setters.

let userThree = {
    get name () {
        return this._name;
    },

    set name (value) {
        if (value.length <4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }

        this._name = value;
    }
};

userThree.name = "Pete";
console.log(userThree.name); // Pete

userThree.name = ""

// Using for compatibility.
function User(name, age) {
    this.name = name;
    this.age = age;
}

let john = new User("John", 22);

console.log(john.age)

function Player(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  
    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }
  
let munene = Player("Walter", new Date(2000, 11, 15))

alert(munene.age)

