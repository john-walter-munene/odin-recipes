// Get Methods
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

    fullName () {
        return `${this.firstName} ${this.lastName}`
    }

    setFirstName (firstName) {
        return this.firstName = firstName;
    }

    setLastName (lastName) {
        return this.lastName = lastName
    }
}

class Worker extends Person{
    constructor(firstName, lastName, job){
        super(firstName, lastName);
        this.job = job;
        this.hasJob = true;
    }

    setJob(job) {
        this.job = job
    }

    get biography(){
        const bio = `${this.firstName} is a ${this.job}`.toUpperCase()
        return bio
    }

    set 
}

const workerOne = new Worker('John', 'Walter', 'Software developer');
console.log(workerOne.biography)