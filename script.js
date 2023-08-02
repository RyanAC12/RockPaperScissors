function getComputerChoice() {
    //create an array of choices
    let choices = ["rock", "paper", "scissors"];
    //use math.floor and math.random to randomize
    let index = Math.floor(Math.random() * choices.length);
    //return the choice by index
    return choices[index];
}

//write a function that plays a single round
//take player selection and computer selection as parameters
//return a string that declares the winner of the round...
//...like so: "You lose! Paper beats Rock"
//Make function's playerSelecton parameter case-insensitive

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock") {
            return "It's a tie!";
        }
        else if (computerSelection == "paper") {
            return "You lose! Paper beats rock!";
        }
        else if (computerSelection == "scissors") {
            return "You win! Rock beats scissors!";
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock!";
        }
        else if (computerSelection == "paper") {
            return "It's a tie!";
        }
        else if (computerSelection == "scissors") {
            return "You lose! Scissors beats paper!";
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors!";
        }
        else if (computerSelection == "paper") {
            return "You win! Scissors beats paper!";
        }
        else if (computerSelection == "scissors") {
            return "It's a tie!";
        }
    }
}

function game() {
    let playerSelection = prompt("Rock, paper, or scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}