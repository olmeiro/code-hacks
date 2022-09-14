// Observer pattern scissors-rock-paper
// MVC

class Subject {
  constructor(){
    this.observers = [];
  }

  subscribe(obs){
    this.observers.push(obs)
  }

  unsubscribe(obs){
    this.observers = this.observers.filter(e => e !== obs)
  }

  notyfy(o){
    this.observers.forEach((obs) => {
      obs.notyfy(o)
    })
  }
}

class Game extends Subject {
  constructor() {
    super()
    this.winner
  }

  notify(choice) {
    this.choice = choice
    super.notyfy(this)
  }  
}

class User {
  constructor() {
    this.name,
    this.lives = 3
    this.choice
    this.choiceDisplay = document.getElementById('user-choice')
    this.livesDisplay = document.getElementById('lives')
  }

  addLive(){
    this.lives = this.lives + 1
    this.livesDisplay.innerHTML = this.lives
  }
  
  lostLive(){
    this.lives = this.lives - 1
    this.livesDisplay.innerHTML = this.lives
  }

  notyfy(subject) {
    console.log(subject)
    this.choice = subject.choice.userChoice
    this.choiceDisplay.innerHTML = this.choice
  }
  
}

class Computer {
  constructor() {
    this.choice,
    this.lives = 3,
    this.computerChoiceDisplay = document.getElementById('computer-choice')
    this.options = ['rock', 'paper', 'scissors']
  }

  addLive(){
    this.lives = this.lives + 1
  }
 
  lostLive(){
    this.lives = this.lives - 1
  }

  notyfy(subject) {
    let computerPlay = this.options[Math.floor(Math.random() * this.options.length)]
    this.choice = computerPlay
    this.computerChoiceDisplay.innerHTML = computerPlay
  }
}

// implementation:

let game = new Game()
let user = new User()
let computer = new Computer()

game.subscribe(user)
game.subscribe(computer)

// console.log("observers: ", game.observers)

const options = document.querySelectorAll('.button')

options.forEach(button => {
  button.addEventListener('click', (e) => {
    let userChoice = e.target.id 
    game.notify({
      userChoice: userChoice
    })

    resultGame(user.choice, computer.choice)
    endGame(user.lives, computer.lives)
  })
})

const resultGame = (userChoice, computerChoice) => {
  const resultDisplay = document.getElementById('result')

  switch(userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = 'YOU WIN.'
      user.addLive()
      computer.lostLive()
      break
    
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = 'YOU LOSE.'
      user.lostLive()
      computer.addLive()
      break
    
    case 'paperpaper':
    case 'scissorscissors':
    case 'rockrock':
      resultDisplay.innerHTML = 'ITS A DRAW.'
      break

  }
}

const endGame = (userLives) => {
  if(userLives === 6 ){
    alert("You win the game!!!")
  }
  if(userLives === 0 ){
    alert('You lose. Try it again!')
  }
}

