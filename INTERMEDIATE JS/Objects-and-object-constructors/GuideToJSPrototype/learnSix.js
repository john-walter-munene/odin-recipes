// Determining if a property lives on prototype.

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
for(let key in leo) {
    console.log(`Key: ${key}. Value: ${leo[key]}`)
  };

const leoOne = new Animal('Leo', 7)
  for(let key in leoOne) {
    if (leoOne.hasOwnProperty(key)) {
      console.log(`Key: ${key}. Value: ${leo[key]}`)
    }
  }