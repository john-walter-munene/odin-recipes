// Private variables and functions.

const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
  };

const taco = FactoryFunction('taco');

// printString(); // ERROR!!
// capitalizeString(); // ERROR!!
// taco.capitalizeString(); // ERROR!!
taco.printString(); // this prints "----TACO----"

// Another example.

const counterCreator = () => {
    let count = 0;
    return () => {
      console.log(count);
      count++;
    };
  };
  
const counter = counterCreator();

counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3