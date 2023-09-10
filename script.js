function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    if (number === 0){
        return "rock";
    } else if (number ===1){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return ("It's a tie!");
    }else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return ("Computer wins!");
        }else{
            return ("Player wins!");
        }
    } else if (playerSelection === "paper"){
        if(computerSelection === "scissors"){
            return("Computer wins!");
        }else{
            return("Player wins!");
        }
    } else if (playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return("Computer wins!");
        }else{
            return("Player wins!");
        }
    }
}

function game(){
    //Create counter for player's score
    //Create counter for computer's score
    //Call playRound
    //if player wins, add a point to their score
    //if computer wins, add a point to its score
    //play 5 rounds
}