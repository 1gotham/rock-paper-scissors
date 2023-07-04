rockBtn = document.querySelector("#rock")
paperBtn = document.querySelector("#paper")
scissorsBtn = document.querySelector("#scissors")
resultsP = document.querySelector("#results-p")
resultsDiv = document.querySelector("#results-div")
scoreP = document.querySelector("#score")
scoreComputer = document.querySelector("#scoreComputer")
btnCnt = document.querySelector("#btn-cont")

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', function () {game("ROCK")});

paperBtn.addEventListener('click', function () {game("PAPER")});

scissorsBtn.addEventListener('click', function () {game("SCISSORS")});

function game(playerSelection) {
    computerSelection = getComputerChoice().toUpperCase();
    x = playRound(playerSelection, computerSelection)
    if (x === "win") {
    playerScore += 1
    }
    else if (x === "lose") {
        computerScore += 1;
    }
    if (x !== undefined){
        resultsP.innerHTML = `${x}!`;

    }
    scoreP.innerHTML = `${playerScore}`;
    scoreComputer.innerHTML = `${computerScore}`

    if (playerScore + computerScore == 5) {
        if (playerScore > computerScore) {
            resultsDiv.innerHTML = 'You win!'
        }
        else {
            resultsDiv.innerHTML = 'You lost!'
        }
        btnCnt.innerHTML = "";
    } 
}

game()


function getComputerChoice() {
    choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1){
        return "rock"
    }
    else if (choice === 2){
        return "paper"
    }
    else {
        return "scissors"

    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK") {
            return "draw"
        }
        else if (computerSelection === "PAPER") {
            return "lose"
        }
        else {
            return "win"
        }
    }
    if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            return "win"
        }
        else if (computerSelection === "PAPER") {
            return "draw"
        }
        else {
            return "lose"
        }
    }
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            return "lose"
        }
        else if (computerSelection === "PAPER") {
            return "win"
        }
        else {
            return "draw"
        }
    }
}