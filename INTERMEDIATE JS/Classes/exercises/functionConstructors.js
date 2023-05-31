function Person (firstName, lastName) {
    var secretInfo = "Huyu mpoa anafanya nasimp.";

    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;

    this.fullName = function() {
        return this.firstName + ' ' + this.lastName
    },
    
    this.setFirstName = function(firstName) {
        this.firstName = firstName;
    },

    this.setLastName = function(lastName) {
        this.lastName = lastName
    },

    this.getSecret = function() {
        return secretInfo
    }
}

var personOne = new Person('John', 'Walter')
console.log(personOne.fullName());
personOne.setFirstName('Munene');

console.log(personOne.firstName);

var personTwo = new Person('Chacha', 'Slide');
console.log(personTwo.getSecret());
