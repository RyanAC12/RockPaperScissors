function getComputerChoice() {
    //create an array of choices
    let choices = ["rock", "paper", "scissors"];
    //use math.floor and math.random to randomize
    let index = Math.floor(Math.random() * choices.length);
    //return the choice by index
    return choices[index];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}! The score is now ${playerScore} to ${computerScore}.`;
    }
    else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}! The score is now ${playerScore} to ${computerScore}.`;
    }
}

function game() {
    let playerSelection = prompt("Rock, paper, or scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}