// Create an objects.

let animal = {}
animal.name = 'Leo'
animal.energy = 10
animal.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}
animal.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}
animal.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

// Functional Instantiation.
function Animal (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
    animal.eat = function (amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    animal.sleep = function (length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    }
    animal.play = function (length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
    return animal
  }
const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)


// Functional Instantiation with shared methods.
const animalMethods = {
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    },
    sleep(length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    },
    play(length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
  }

function Animal (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
    animal.eat = animalMethods.eat
    animal.sleep = animalMethods.sleep
    animal.play = animalMethods.play
    return animal
  }
const leoOne = Animal('Leo', 7)
const snoopOne = Animal('Snoop', 10)

// Objects.create().

const parent = {
    name: 'Stacey',
    age: 35,
    heritage: 'Irish'
  }
const child = Object.create(parent)
child.name = 'Ryan'
child.age = 7
console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.heritage) // Irish


