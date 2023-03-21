// Getting the prototype of an object.

function Animal (name, energy) {
    this.name = name
    this.energy = energy
  }
  Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
const leo = new Animal('Leo', 7)
const prototype = Object.getPrototypeOf(leo)
console.log(prototype)
// {constructor: ƒ, eat: ƒ, sleep: ƒ, play: ƒ}
console.log(prototype === Animal.prototype) // true

console.log(leo.constructor) // Logs the constructor function