// Declaring javascript object method in constructor function vs. in prototype [duplicate]

// Method declaration in constructor function.
var DogOne = function(name) {
    this.Name = name;
    this.Bark = function() {
        console.log(this.Name + " bark");
    };
};

// Method on protype of object.
var DogTwo = function(name) {
    this.Name = name;
}

DogTwo.prototype.Bark = function() {
    console.log(this.Name + " bark");
};

var dogOne = new DogOne("Fido");
dogOne.Bark();  //Both approaches show "Fido bark"

var dogTwo = new DogTwo("Dofi");
dogTwo.Bark();





