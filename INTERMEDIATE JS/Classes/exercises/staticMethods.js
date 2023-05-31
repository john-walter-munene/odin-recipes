class Person {
    static species(){
        return 'Homo Sapiens';
    }

    static speciesClassification(){
        return `Humans are classiefied as ${this.species()}`
    }
    // Doing static properties with = sign leads to an error.
    // static species2 = 'SomethngHere';

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

const personOne = new Person('Munene', 'Njeru');

console.log(Person.species, Person.speciesClassification());