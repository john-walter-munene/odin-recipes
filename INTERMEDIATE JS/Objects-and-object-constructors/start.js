const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function () {
        // Do stuff!
    }
}

// Get info from objects.
// Dot notation
myObject.property // 'Value!'

// Bracket convention
myObject["obnoxious property"] // [function]

const variable = 'property'

myObject.variable // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[variable] // this is equivalent to myObject['property'] and returns 'Value!'

function Player(name, maker) {
    this.name = name
    this.maker = maker
    this.sayName = function() {
        console.log(name);
    };
};

const playerOne = new Player('Steve', 'x')
const playerTwo = new Player('Walter', 'o')

playerOne.sayName()

function Student(name, grade) {
    this.name = name
    this.grade = grade
};

Student.prototype.showName = function() {
    console.log(this.name)
};

Student.prototype.goToProm = function() {
    console.log("Eh.. go to Prom?")
};

const studentOne = new Student('Susan', 9);
studentOne.showName()

const studentTwo = new Student('Walter', 10);
studentTwo.goToProm()


// Best practices.
function Pupil() {

};

Pupil.prototype.showName = function() {
    console.log(this.name)
};

// EighthGrader.prototype = Pupil.prototype
EighthGrader.prototype = Object.create(Pupil.prototype)

function EighthGrader(name) {
    this.name = name
    this.grade = 8
}




