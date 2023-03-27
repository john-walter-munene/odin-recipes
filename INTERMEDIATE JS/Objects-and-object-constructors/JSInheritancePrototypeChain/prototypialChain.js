// JavaScript Inheritance and the Prototype Chain.

// ES5
// ES5
function AnimalOne (name, energy) {
    this.name = name
    this.energy = energy
  }
  AnimalOne.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  AnimalOne.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  AnimalOne.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
  const leoOne = new AnimalOne('Leo', 7)

  // ES6
  class AnimalTwo {
    constructor(name, energy) {
      this.name = name
      this.energy = energy
    }
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    sleep() {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    }
    play() {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
  }
  const leoTwo = new AnimalTwo('Leo', 7)

// Making dog instances.
Dog.prototype = Object.create(AnimalOne)
Dog.prototype.constructor = Dog

function Dog(name, energy, breed) {
    this.name = name 
    this.energy = energy
    this.breed = breed
}
Dog.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
Dog.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
Dog.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
Dog.prototype.bark = function () {
    console.log('Woof-Woof!')
    this.energy -= .1
  }

const charlie = new Dog('Charlie', 10, 'Goldendoodle')

// Checking the constructor.
console.log(charlie.constructor)

