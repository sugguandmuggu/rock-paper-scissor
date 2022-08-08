function getComputerChoice() {
    let num = (Math.floor(Math.random() * 100)) % 3;

    if (num === 0) {
        return "rock";
    }
    else if (num === 1) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 2;
    }

    else if (playerSelection === "rock" && computerSelection === "scissor") {
        return 0;
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        return 1;
    }

    else if (playerSelection === "paper" && computerSelection === "scissor") {
        return 1;
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        return 0;
    }

    else if (playerSelection === "scissor" && computerSelection === "rock") {
        return 1;
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        return 0;
    }
}

function game(playerSelect) 
{
    const result = document.querySelector('#result');

    let countP = 0;
    let countC=0;
    //for (let i = 1; i < 6; i++) {
        //let playerSelection = prompt("Rock, Paper or Scissor");
        let playerSelection = playerSelect.toLowerCase();
        let computerSelection = getComputerChoice();

        console.log(playerSelection);
        console.log(computerSelection);

        if (playRound(playerSelection, computerSelection) === 0) {
            playerSelection = capitalize(playerSelection);
            computerSelection = capitalize(computerSelection);
            result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            countP++;
        }

        else if (playRound(playerSelection, computerSelection) === 1) {
            playerSelection = capitalize(playerSelection);
            computerSelection = capitalize(computerSelection);
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            countC++;
        }

        else{
            playerSelection = capitalize(playerSelection);
            computerSelection = capitalize(computerSelection);
            result.textContent = `Its a draw! You both threw ${playerSelection}`;
        }
}

    /*if(countP > countC){
        console.log("You won more rounds, so you are the Winner. Congratulations!");
    }
    else if(countP < countC){
        console.log("It seems the computer was lucky. Better luck next time!");
    }

    else{
        console.log(`You and the computer both won ${countC} rounds, so this game ends in a draw. Kinda anticlimactic`);
    }*/
    



 function capitalize(givenString){
    return givenString.replace(givenString.charAt(0), (givenString.charAt(0)).toUpperCase() )
 }


const choices=document.querySelectorAll('.button');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {game(choice.id);});
});


