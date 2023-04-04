// How to perform Inheritance in Factory Functions.

const Person = (name) => {
    const SayName = () => console.log(`My name is ${name}`);
    return {SayName};
}

const Nerd = (name) => {
    const prototype = Person(name);
    const doSomethingNerdy = () => console.log('Nerdy stuff');
    return Object.assign({}, prototype, {doSomethingNerdy});
}

const jeff = Nerd('jeff');

jeff.SayName();
jeff.doSomethingNerdy();