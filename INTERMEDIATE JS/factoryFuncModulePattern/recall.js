// Object construction.

function Object(obj, prop) {
    this.obj = obj
    this.prop = prop
}

Object.prototype.SayName = function(obj) {
    console.log(`My name is ${this.obj}, and I have the following properties ${this.prop}`)
}

let jack = new Object('Jack', 'Programmer.')

jack.SayName()