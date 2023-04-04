// The Factory Function.

const personFactory = (name, age) => {
    const sayHello = () => console.log('Hello');
    return {name, age, sayHello};
};

const jeff = personFactory('Jeff', 27)

const name = "Maynard"
const color = "Red"
const number = 34
const food = "Rice"

console.log({name, color, number, food})

