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


    //else if player selects paper:
        //and computer selects rock
            //player wins
        //and computer selects scissors
            //computer wins
    //else if player selects scissors
        //and computer selects rock
            //computer wins
        //and computer selects paper
            //computer wins
}

console.log(playRound("paper","scissors"));