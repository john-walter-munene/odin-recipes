class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasJob = false;
    }

    fullName (){
        return `${this.firstName} ${this.lastName}`
    }

    setFirstName (firstName){
        return this.firstName = firstName;
    }

    setLastName (lastName){
        return this.lastName = lastName
    }
}

const personOne = new Person('John', 'Walter')
console.log(personOne.fullName());
personOne.setFirstName('Munene');
console.log(personOne.fullName());

