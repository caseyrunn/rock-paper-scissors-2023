function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    if (number === 0){
        console.log(0);
    } else if (number ===1){
        console.log(1);
    } else {
        console.log(2);
    }
}


getComputerChoice();