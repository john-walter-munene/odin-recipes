let user = {
    name : "John",
    surname : "Smith"
}

user.nickName = "Goldenstar9521 !"
user["name"] = "peter"
delete user.name

console.log(user)

let schedule = {};

/*
alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

// Sum object propeties.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function summation(){
    total = 0
    for (let salary in salaries){ 
        total += salaries[salary]
    }
    console.log(total)
}

summation()

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
        obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
alert(menu)

