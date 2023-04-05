// Person using Factory Function
const PersonFactory = (name, age) => {
    const sayHello = () => console.log('Hello');
    return {name, age, sayHello};
};

const jeff = PersonFactory('Jeff', 27);
console.log(jeff.name)

jeff.sayHello()

// Pesrson using constructor.
function Person(name, age) {
    this.sayHello = () => console.log('Hell0!');
    this.name = name;
    this.gae = age; 
};

const jeffTwo = new Person('JeffTwo', 27)
jeffTwo.sayHello()


// Checking out a hack!

const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

// logging all of these variables might be a useful thing to do,
// but doing it like this can be somewhat confusing.
console.log(name, color, number, food); // Maynard red 34 rice

// if you simply turn them into an object with brackets,
// the output is much easier to decipher:
console.log({name, color, number, food});
 // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }


 // Revissiting scope.

 let a = 17;

const func = x => {
  let a = x;
};

func(99);

console.log(a); // ???????