// Object.create(prototypeObject, propertyObject)
//Verification.
const myObject = Object.create(Object.prototype);
console.dir(myObject);
console.dir(Object);

const myLiteral = {};
console.dir(myLiteral);

const noProto = Object.create(null);
console.dir(noProto)

// When using constructor.
const Car = function(color) {
    this.color = color;
};

const carOne = new Car('red');
const carTwo = Object.create(Car.prototype);



