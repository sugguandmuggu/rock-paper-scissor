function getComputerChoice(){
    let num= (Math.floor(Math.random()*100))%3;
    
    if(num === 0){
        return "rock";
    }
    else if(num ===1){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "It's a draw. We'll get em next time!";
    }

    else if(playerSelection === "rock" && computerSelection === "scissor"){
        return "You Win! Rock beats Scissor"; 
    }

    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock"; 
    }

    else if(playerSelection === "paper" && computerSelection === "scissor"){
        return "You Lose! Scissor beats Paper"; 
    }

    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock"; 
    }

    else if(playerSelection === "scissor" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissor"; 
    }
    else if(playerSelection === "scissor" && computerSelection === "paper"){
        return "You Win! Scissor beats Paper"; 
    }
}

function game(){
    let playerSelection = prompt("Rock, Paper or Scissor"); 
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
