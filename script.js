function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    if (number === 0){
        return "rock";
    } else if (number ===1){
        return "paper";
    } else if (number === 2) {
        return "scissors";
    } else {
        console.log("error");
    }
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return ("It was a tie!");
    }else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            computerScore ++;
            return ("Computer won!");
        }else{
            playerScore ++;
            return ("Player won!");
        }
    } else if (playerSelection === "paper"){
        if(computerSelection === "scissors"){
            computerScore ++;
            return("Computer won!");
        }else{
            playerScore++;
            return("Player won!");
        }
    } else if (playerSelection === "scissors"){
        if(computerSelection === "rock"){
            computerScore++;
            return("Computer won!");
        }else{
            playerScore++;
            return("Player won!");
        }
    }
}


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resultsDiv = document.querySelector('.resultsDiv');

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;



window.addEventListener('click', function(e){
    let playerSelection = (e.target.classList.value);
    if (!playerSelection){
        return;
    }
    let computerSelection = getComputerChoice();
    let roundResults = playRound(playerSelection, computerSelection);

    const result = this.document.createElement('div');
    result.textContent = `${roundResults} Player: ${playerScore} Computer: ${computerScore}`
    resultsDiv.appendChild(result);

    roundsPlayed++;
    if (roundsPlayed == 5){
        const displayWinner = this.document.createElement('div');
        if (computerScore == playerScore){
            displayWinner.textContent = "Game over! It was a tie.";
        } else if (computerScore > playerScore){
            displayWinner.textContent = "Game over! Computer won."
        } else if (playerScore > computerScore){
            displayWinner.textContent = "Game over! Player won."
        }
        resultsDiv.appendChild(displayWinner);
    };


});






