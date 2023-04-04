// Revisiting Scope in JavaScript.

let a = 17;

const func = x => {
    let a = x
};

func(99)

console.log(a)

// Another example.
const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`---${capitalizeString}---`);
    return { printString };
};

const taco = FactoryFunction('taco');

// printString()
// Undefined

// capitalizeString()
// Capitalizes Undefined
// taco.capitalizeString()
// Taco
taco.printString()
// Logs (Taco)

