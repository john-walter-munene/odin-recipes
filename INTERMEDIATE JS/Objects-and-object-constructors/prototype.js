function Student(name, grade) {
    this.name = name
    this.grade = grade
  }

  Student.prototype.sayName = function() {
    console.log(this.name)
  }
  Student.prototype.goToProm = function() {
    console.log("Eh.. go to prom?")
  }

// Recomended methods for protyping inheritance.

function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8