// Objects as a Design Pattern.

// example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

// example two
const hotPlayerOne = {
    name: "tim",
    marker: "X"
  }

const hotPlayerTwo = {
    name: "jenn",
    marker: "O"
  }

function printName(player) {
    console.log(player.name)
  }

printName(hotPlayerOne)

function gameOver(winningPlayer){
    console.log("Congratulations!")
    console.log(winningPlayer.name + " is the winner!")
  }

// Object constructors.

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
        console.log(name)
  }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'