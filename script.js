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
    //if player selects rock and computer selects paper
        //computer wins
    //if player selects rock and computer selects scissors
        //player wins
    //if player selects paper and computer selects rock
        //player wins
    //if player selects paper and computer selects scissors
        //computer wins
    //if player selects scissors and computer selects rock
        //computer wins
    //if player selects scissors and computer selects paper
        //player wins
}

console.log(getComputerChoice());