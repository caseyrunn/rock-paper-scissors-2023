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
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return ("tie");
    }else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return ("computer");
        }else{
            return ("player");
        }
    } else if (playerSelection === "paper"){
        if(computerSelection === "scissors"){
            return("computer");
        }else{
            return("player");
        }
    } else if (playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return("computer");
        }else{
            return("player");
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    let playerSelection = prompt("Rock, paper, or scissors?");
    let computerSelection = getComputerChoice();

    let winnerThisRound = playRound(playerSelection, computerSelection);
    if (winnerThisRound === "player"){
        playerScore = ++playerScore;
        console.log("Player won this round! Player has " + playerScore + " points. Computer has " + computerScore + " points.");
    } else if (winnerThisRound === "computer"){
        computerScore === ++computerScore;
        console.log("Computer won this round! Player has " + playerScore + " points. Computer has " + computerScore + " points.");
    } else {
        console.log("It was a tie!")
    }


    //play 5 rounds
}

game();

