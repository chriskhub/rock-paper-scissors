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
        console.log (`You lose. Paper beats rock. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        console.log (`You win! Rock beats scissors. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log (`Same play, try again! The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log (`Same play, try again! The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        console.log (`You lose. Scissors beat paper. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        console.log (`You win! Paper beats rock. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log (`Same play, try again! The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        console.log (`You win! Scissors beats paper. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        console.log (`You lose. Rock beats scissors. The score is: ${computerScore} computer vs. ${playerScore} player.`);
    } else {
        console.log ("Error! Please type rock, paper, or scissors.");
    }
    checkWin(playerScore, computerScore);
}


function checkWin(playerScore, computerScore) {
    if (playerScore === 3) {
        console.log("You win the challenge!");
    } else if (computerScore === 3) {
        console.log("Sorry, you lost the challenge.");
    }
}

// function game() {
//     for (var i = 0; i < 5; i++) {
//         playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
//         computerSelection = computerPlay().toLowerCase();
//         checkWin(playerScore, computerScore);
//         console.log(playerSelection);
//         console.log(computerSelection);
//         playRound(playerSelection, computerSelection);
//     }
// }

