// Prototypes in JS

// let arr = ['walter', 'munene'];

let objectOne = {
    name: "Walter",
    city: "Nairobi",
    getIntro: function() {
        console.log(`${this.name} from ${this.city}`)
    }
}

let objectTwo = {
    name: "Dickson"

}

// Never do this! Its just for demonstration.
objectTwo.__proto__= objectOne

console.log(objectTwo.name)

// Prototype chain confirmation.
console.log(objectTwo.city)
console.log(objectTwo.getIntro())

// 
