const play = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

function computerPlay() {
    let randomPlay = play[Math.floor(Math.random() * play.length)];
    return randomPlay;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return (`You lose. Paper beats rock. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return (`You win! Rock beats scissors. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return (`Same play, try again! The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return (`Same play, try again! The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return (`You lose. Scissors beat paper. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return (`You win! Paper beats rock. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return (`Same play, try again! The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return (`You win! Scissors beats paper. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return (`You lose. Rock beats scissors. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else {
        return ("Error! Please type rock, paper, or scissors.");
    }
}


// function checkWin(playerScore) {
//     if (playerScore == 1) {
//         return ("You win the challenge!");
//     } else if (computerScore == 1)
//         return ("Sorry, you lost the challenge.");
// }

// checkWin();