// Creating a module.
const someModule = (function() {})();

// Create a module with private functions.
const Formatter = (function() {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  })();

// Formatter.log('Hello')

const FormatterOne = (function() {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const makeUppercase = (text) => {
        console.log('Making Upper case.');
        return text.toUpperCase();
    };
})();


// Exposing a module.
const FormatterTwo = (function() {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const makeUppercase = (text) => {
        console.log('Making Upper Case');
        return text.toUpperCase();
    };

    return {
        makeUppercase
    }
})();

console.log(FormatterTwo.makeUppercase("tomek"));

// Modules can house functions, arrays, objects, and many more.
const FormatterThree = (function(){
    let timesRun = 0;

    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const setTimesRun = ()=> {
        console.log('Setting Times Run.');
        ++timesRun;
    };

    const makeUppercase = (text) => {
        console.log('Making Upper Case');
        setTimesRun();
        return text.toUpperCase();
    };

    return {
        makeUppercase,
        timesRun,
    };
})();

console.log(FormatterThree.makeUppercase("tomek"));
console.log(FormatterThree.timesRun);

FormatterThree.timesRun = 10;
console.log(FormatterThree.timesRun);

// THe drawback is that Reference Type work diferrently.

const FormatterFour = (function() {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const timesRun = [];
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      timesRun.push(null);
      return text.toUpperCase();
    };
  
    return {
      makeUppercase,
      timesRun,
    }
  })();
  
console.log(FormatterFour.makeUppercase("tomek"));
console.log(FormatterFour.makeUppercase("tomek"));
console.log(FormatterFour.makeUppercase("tomek"));
console.log(FormatterFour.timesRun.length);

// Declaring module dependancies.

const FormatterFive = (function(){
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const makeUppercase = (text) => {
    log("Making uppercase");
        return text.toUpperCase();
    };

    const writeToDOM = (selector, message) => {
        if (!!document && 'querySelector' in document) {
        document.querySelector(selector).innerHTML = message;
        }
      };

    return {
        makeUppercase,
        writeToDOM,
    };
})();

// Formatter.writeToDOM("#target", "Hi there");

// Here's how to declare dependencies as you move forward.

const FormatterSix = (function(doc) {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const makeUppercase = (text) => {
        console.log(`FormatterSix making text Upppercase.`);
        return text.toUpperCase();
    };

    const writeToDOM = (selector, message) => {
        if (!!doc && "querySelector" in doc) {
            doc.querySelector(selector).innerHTML = message;
        }
    };

    return {
        makeUppercase,
        writeToDOM
    };

})(document);

// How to write a mock.

const documentMock = (()=>({
    querySelector: (selector) => ({
        innerHTML: null,
    }),    
}))();

const FormatterSeven = (function(doc) {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const makeUppercase = (text) => {
        console.log(`FormmatterSeven making Uppercase`);
        return text.toUpperCase();
    };

    const writeToDOM = (selector, message) => {
        doc.querySelector(selector).innerHTML = message;
    };

    return {
        makeUppercase,
        writeToDOM,
    };
})(document || documentMock);