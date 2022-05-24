let playerScore = 0 ;
let computerScore = 0 ;

function randomChoice(){
 let randomNumber= Math.floor(Math.random() * 3)
 switch (randomNumber) {
  case 0:
    return "ROCK"
  case 1:
    return "SCISSORS"
  case 2:
    return "PAPER"
}
}


let playerOption =["ROCK","SCISSOR", "PAPER"]


const computerWon = document.getElementById("computerScore")
const playerWon = document.getElementById("playerScore")
const printBox = document.getElementById("printBox")


function updateScoreRock() { 
  if  (playerOption[0] === randomChoice()){
    printBox.textContent = "It's a tie"
  }
  else if (playerOption[0] && randomChoice() === "PAPER"){
    printBox.textContent = "You Lost :("
    computerScore =  computerScore + 1;
    computerWon.textContent = computerScore
  }
  else {
      printBox.textContent = "You Won!!!"
      playerScore = playerScore + 1;
      playerWon.textContent = playerScore  
     }
}


function updateScoreScissor() { 
  if  (playerOption[1] === randomChoice()){
    printBox.textContent = "It's a tie"
  }
  else if (playerOption[1] && randomChoice() === "PAPER"){
    printBox.textContent = "You Won!!!"
    playerScore =  playerScore + 1;
    playerWon.textContent = playerScore
  }
  else {
      printBox.textContent =  "You Lost :("
      computerScore = computerScore + 1;
      computerWon.textContent = computerScore  
     }
}


function updateScorePaper() { 
  if  (playerOption[2] === randomChoice()){
    printBox.textContent = "It's a tie"
  }
  else if (playerOption[2] && randomChoice() === "SCISSOR"){
    printBox.textContent = "You Lost :("
    computerScore =  computerScore + 1;
    computerWon.textContent = computerScore
  }
  else {
      printBox.textContent = "You Won!!!"
      playerScore = playerScore + 1;
      playerWon.textContent = playerScore  
     }
}

const resetBtn = document.getElementById("reset-btn")

resetBtn.addEventListener("click", function(){
    playerScore = 0
    playerWon.textContent = playerScore
    computerScore = 0 
    computerWon.textContent = computerScore
})
