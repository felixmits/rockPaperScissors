console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt("Choose rock, paper or scissors.").toLowerCase();
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;



function playRound() {

  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore +=1;
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    return ("Rock beats Scissors. You win");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore +=1;
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    return ("Paper beats Rock. You lose");
  }  else if (humanChoice === "scissors" && computerChoice === "rock" ){
    computerScore +=1;
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    return ("Rock beats Scissors. You lose");
  }  else if (humanChoice === "scissors" && computerChoice === "paper"){
    humanScore +=1;
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    return ("Scissors beat Paper. You win");
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    humanScore +=1;
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    return ("Paper beats Rock. You win");
  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    computerScore +=1;
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    return ("Scissors beat Paper. You lose")
  } else if (humanChoice === computerChoice) {
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    return ("It's a tie!");
  } else {
    return ("Invalid Input. Please choose rock, paper, or scissors");
  }
} 

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round: ${i + 1}`);
    console.log(playRound());
  }

  console.log("Game is over")
  console.log(`Final score: Human: ${humanScore}, Computer: ${computerScore}`)
}

console.log(playGame());