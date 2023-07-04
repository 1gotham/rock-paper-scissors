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

function game(){
    let playerScore = 0
    let computerScore = 0
    for (i = 0; i < 5; i++) {
        playerSelection = prompt("Please enter rock paper or scissors").toUpperCase()
        computerSelection = getComputerChoice().toUpperCase()
        roundResult = playRound(playerSelection, computerSelection)
        if (roundResult === "draw") {
            console.log("Draw!")
        }
        else if (roundResult === "win") {
            playerScore += 1
            console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
        }
        else {
            computerScore += 1
            console.log(`You lose! ${computerSelection} beats ${playerSelection}!`)           
        }
    }
    console.log(`Your score: ${playerScore}, Opponents score: ${computerScore}`)
    if (playerScore > computerScore) {
        console.log("You win the game!")
    }   
    else {
        console.log("You lose the game!")
    }
}
game()