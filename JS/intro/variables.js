let message; // Variable declaration
message = "Hello"

alert(message) // Show the variable content 


// You can combine variable declaration and assignment in a single line
let message_1 = "Hello JavaScript I have come to conquer you"

alert(message_1) // Show content

// Declaring multiple variables in as ingle line.
let user = "John", age = 25, message_2 = "Hello bro we are already strated"

// The best convention for variable declaration and readerbility is to do it in multiple lines.
let guy = "Boy";
let age_2 = 22;
let text = "You can do it bro"

// Alternatively,
let guy_3 = 'Man',
  age_3 = 25,
  message_3 = 'Hello';


// Two variables holding the same data
let hello = 'Hello world!';
let avatar;

// copy 'Hello world' from hello into message
avatar = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!


/* You can use upper case constants as aliases 
        that are difficult to recall */

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00