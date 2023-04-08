// Factory functions.

const createUser = ({firstName, lastName, email}) => ({
    firstName,
    lastName,
    email,
    fullName () {
        return `${this.firstName} ${this.lastName}`;
    },
});

const user1 = createUser({
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com"
  });

const user2 = createUser({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@doe.com"
  });

console.log(user1);
console.log(user2);

// Using factory functions to create relatively complex and comfigurable objects.

const createObjectFromArray = ([key, value]) => (
    {
    [key]: value,
});

const myArray = ['John', 'Walter'];
console.log()
console.log(createObjectFromArray(myArray));

class  User {
    constructor(firstName, lastName, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    }
   
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
   
  const userOne = new User({
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  });
   
  const userTwo = new User({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@doe.com",
  });