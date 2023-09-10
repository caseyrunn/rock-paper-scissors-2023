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
    //if player and computer have same selection
        //it's a tie
    //else if player selects rock:
        //and computer selects paper
            //computer wins
        //and computer selects scissors
            //player wins
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

console.log(getComputerChoice());