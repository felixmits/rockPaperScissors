console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt("Choose rock, paper or scissors.").toLowerCase();
  return ("Your choice is " +humanChoice);
}

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    return ("Rock beats Scissors. You win");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    return ("Paper beats Rock. You lose");
  }  else if (humanChoice === "scissors" && computerChoice === "rock" ){
    return ("Rock beats Scissors. You lose");
  }  else if (humanChoice === "scissors" && computerChoice === "paper"){
    return ("Scissors beat Paper. You win");
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    return ("Paper beats Rock. You win");
  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    return ("Scissors beat Paper. You lose")
  } else if (humanChoice === computerChoice) {
    return ("It's a tie!");
  }
} 

playRound(getHumanChoice, getComputerChoice);