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


function rockSelected(){
  let twoFunction = [randomChoice(), playerOption[0]]
 return twoFunction
}
function scissorSelected(){
  let twoFunction = [randomChoice(), playerOption[1]];
 return twoFunction;
  
}
function paperSelected(){
  let twoFunction = [randomChoice(), playerOption[2]]
 return twoFunction
}


function updateScoreRock() { 
  if  (playerOption[0] === randomChoice()){
    let printBox = document.getElementById("printBox")
    printBox.textContent = "It's a tie"
    console.log("player = computer")
  }
  else if (playerOption[0] && randomChoice() === "PAPER"){
  let printBox = document.getElementById("printBox")
    printBox.textContent = "You Lost :("
    computerScore =  computerScore + 1;
  let computerWon = document.getElementById("computerScore")
  computerWon.textContent = computerScore
  console.log("player < computer")

  }
  else {
    let printBox = document.getElementById("printBox")
      printBox.textContent = "You Won!!!"
      playerScore = playerScore + 1;
    let playerWon = document.getElementById("playerScore")
    playerWon.textContent = playerScore  
    console.log("player > computer")

     }
}


function updateScoreScissor() { 
  if  (playerOption[1] === randomChoice()){
    let printBox = document.getElementById("printBox")
    printBox.textContent = "It's a tie"
    console.log("player = computer")

  }
  else if (playerOption[1] && randomChoice() === "PAPER"){
  let printBox = document.getElementById("printBox")
    printBox.textContent = "You Won!!!"
    playerScore =  playerScore + 1;
  let playerWon = document.getElementById("playerScore")
  playerWon.textContent = playerScore
  console.log("player > computer")

  }
  else {
    let printBox = document.getElementById("printBox")
      printBox.textContent =  "You Lost :("
      computerScore = computerScore + 1;
    let computerWon = document.getElementById("computerScore")
    computerWon.textContent = computerScore  
    console.log("player < computer")

    
     }
}


function updateScorePaper() { 
  if  (playerOption[2] === randomChoice()){
    let printBox = document.getElementById("printBox")
    printBox.textContent = "It's a tie"
    console.log("player = computer")

  }
  else if (playerOption[2] && randomChoice() === "SCISSOR"){
  let printBox = document.getElementById("printBox")
    printBox.textContent = "You Lost :("
    computerScore =  computerScore + 1;
  let computerWon = document.getElementById("computerScore")
  computerWon.textContent = computerScore
  console.log("player < computer")

  }
  else {
    let printBox = document.getElementById("printBox")
      printBox.textContent = "You Won!!!"
      playerScore = playerScore + 1;
    let playerWon = document.getElementById("playerScore")
    playerWon.textContent = playerScore  
    console.log("player > computer")

     }
}


//I am clear with the random selection of computer side and player selection. 
//Now the main task is to compare the output of both of the functions and update the score card of winning side and display Winner on PrintBox. 