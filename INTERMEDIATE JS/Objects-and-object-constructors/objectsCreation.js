// Create a cat object.
const cat = {
    makeSound: function() {
        console.log(this.sound)
    }
};

// Function to recreate objects.
function objectCreate(proto) {
    const obj = {}
    Object.setPrototypeOf(obj, proto)
    return obj
};

// Instnaces.
const mark = objectCreate(cat)
mark.sound = 'meeeeooww!'
mark.makeSound()

// Instances.
const waffles = objectCreate(cat)
waffles.sound = 'meeeeeooooowww!!'
waffles.makeSound() 

// Confirmations.
console.log('Is mark a cat?', cat.isPrototypeOf(mark))

// From a performance point of view, it would be best to use Object.create()
// Instnaces.
const markOne = Object.create(cat)
mark.sound = 'meeeeooww!'
mark.makeSound()

// Instances.
const wafflesOne = Object.create(cat)
waffles.sound = 'meeeeeooooowww!!'
waffles.makeSound()