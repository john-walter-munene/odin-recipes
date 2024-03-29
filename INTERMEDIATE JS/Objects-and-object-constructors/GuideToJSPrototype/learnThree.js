function Animal (name, energy) {
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy
    return animal
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
const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
leo.eat(10)
snoop.play(5)

// Class.
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
  }
const leoOne = new AnimalOne('Leo', 7)
const snoopOne = new AnimalOne('Snoop', 10)

