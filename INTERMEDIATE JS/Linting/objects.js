// A reminder on objects construction.

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

  
  person.name;
  person.name[0];
  person.age;
  person.bio();
  // "Bob Smith is 32 years old."
  person.introduceSelf();
  // "Hi! I'm Bob."

  const person1 = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };


  function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."

const salva1 = new Person("Salva");
salva1.name;
salva1.introduceSelf();
// "Hi! I'm Salva."




  
  