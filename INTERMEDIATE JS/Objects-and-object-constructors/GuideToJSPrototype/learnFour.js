// Array methods.

const friendsWithSugar = []
const friendsWithoutSugar = new Array()

/*
  concat: ƒn concat()
  constructor: ƒn Array()
  copyWithin: ƒn copyWithin()
  entries: ƒn entries()
  every: ƒn every()
  fill: ƒn fill()
  filter: ƒn filter()
  find: ƒn find()
  findIndex: ƒn findIndex()
  forEach: ƒn forEach()
  includes: ƒn includes()
  indexOf: ƒn indexOf()
  join: ƒn join()
  keys: ƒn keys()
  lastIndexOf: ƒn lastIndexOf()
  length: 0n
  map: ƒn map()
  pop: ƒn pop()
  push: ƒn push()
  reduce: ƒn reduce()
  reduceRight: ƒn reduceRight()
  reverse: ƒn reverse()
  shift: ƒn shift()
  slice: ƒn slice()
  some: ƒn some()
  sort: ƒn sort()
  splice: ƒn splice()
  toLocaleString: ƒn toLocaleString()
  toString: ƒn toString()
  unshift: ƒn unshift()
  values: ƒn values()
*/

// Static methods.
function nextToEat (animals) {
    const sortedByLeastEnergy = animals.sort((a,b) => {
      return a.energy - b.energy
    })
    return sortedByLeastEnergy[0].name
  }

class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    sleep(length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    }
    play(length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
  };
  
function nextToEat (animals) {
  const sortedByLeastEnergy = animals.sort((a,b) => {
    return a.energy - b.energy
  })
    return sortedByLeastEnergy[0].name
  }
const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)
console.log(nextToEat([leo, snoop])) // Leo

// Static property of the class.

class AnimalOne {
    constructor(name, energy) {
      this.name = name
      this.energy = energy
    }
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    sleep(length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    }
    play(length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
    static nextToEat(animals) {
      const sortedByLeastEnergy = animals.sort((a,b) => {
        return a.energy - b.energy
      })
      return sortedByLeastEnergy[0].name
    }
  }

const leoTwo = new Animal('Leo', 7)
const snoopTwo = new Animal('Snoop', 10)
console.log(AnimalOne.nextToEat([leo, snoop])) // Leo

function AnimalThree (name, energy) {
    this.name = name
    this.energy = energy
  }
  AnimalThree.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  AnimalThree.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  AnimalThree.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
  AnimalThree.nextToEat = function (nextToEat) {
    const sortedByLeastEnergy = animals.sort((a,b) => {
      return a.energy - b.energy
    })
    return sortedByLeastEnergy[0].name
  }
const leoThree = new AnimalThree('Leo', 7)
const snoopThree = new AnimalThree('Snoop', 10)
console.log(AnimalThree.nextToEat([leo, snoop])) // Leo



