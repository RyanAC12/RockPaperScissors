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

    if (playerSelection === computerSelection) {
        return `It's a tie! The score is still ${playerScore} to ${computerScore}.`;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        if (playerScore === 5) {
            let finalMessage = `Game over! ${capitalizeVariable(playerSelection)} beats ${computerSelection}! The final score is ${playerScore} to ${computerScore}.`;
            resetGame();
            return finalMessage;
        }
        else return `You win! ${capitalizeVariable(playerSelection)} beats ${computerSelection}! The score is now ${playerScore} to ${computerScore}.`;
    }
    else {
        computerScore++;
        if (computerScore === 5) {
            let finalMessage = `Game over! ${capitalizeVariable(computerSelection)} beats ${playerSelection}! The final score is ${playerScore} to ${computerScore}.`;
            resetGame();
            return finalMessage;
        }
        else return `You lose! ${capitalizeVariable(computerSelection)} beats ${playerSelection}! The score is now ${playerScore} to ${computerScore}.`;
    }
    
};

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

function capitalizeVariable(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const results = document.querySelector('#results');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    results.textContent= playRound("rock", computerChoice);
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    results.textContent= playRound("paper", computerChoice);
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    results.textContent= playRound("scissors", computerChoice);
});

const btn = document.querySelectorAll('.btn');
btn.forEach(btn => {
btn.addEventListener('mouseover', () => {
    btn.style.transform = 'scale(1.2)';
    })
});

btn.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(1.1)';
        })
    });

btn.forEach(btn => {
btn.addEventListener('mouseup', () => {
    btn.style.transform = 'scale(1.2)';
    })
});
btn.forEach(btn => {
btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
    })
});

