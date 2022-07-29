// random computer choice
function getComputerChoice() {
    let randomChoice = Math.random()

    if (randomChoice < 1/3) {
        return "ROCK";
    } else if (randomChoice >= 1/3 && randomChoice < 2/3) {
        return "PAPER";
    } else if (randomChoice >= 2/3 && randomChoice < 1) {
        return "SCISSOR";
    } else {
        return "ERROR";
    }
}

// // checks if random computer choice is uniform
// function checkAccuracy() {

//     let rockcount = 0;
//     let papercount = 0;
//     let scissorscount = 0;
//     let errorcount = 0;

//     for (let i = 0; i < 10000000; i++) {

//         let computerchoice = getComputerChoice();

//         if (computerchoice === "ROCK") {
//             rockcount += 1;
//         } else if (computerchoice === "PAPER") {
//             papercount += 1;
//         } else if (computerchoice === "SCISSORS") {
//             scissorscount += 1;
//         } else {
//             errorcount += 1;
//         }
//     }

//     console.log(
//         `Rock: ${rockcount}, Paper: ${papercount}, Scissors: ${scissorscount}, Errors: ${errorcount}`
//     )
// }

// plays a single round of rock-paper-scissors
function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return ["TIE", playerSelection, computerSelection];
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            return ["LOSS", playerSelection, computerSelection];
        } else if (computerSelection === "SCISSOR") {
            return ["WIN", playerSelection, computerSelection];
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSOR") {
            return ["LOSS", playerSelection, computerSelection];
        } else if (computerSelection === "ROCK") {
            return ["WIN", playerSelection, computerSelection];
        }
    } else if (playerSelection === "SCISSOR") {
        if (computerSelection === "ROCK") {
            return ["LOSS", playerSelection, computerSelection];
        } else if (computerSelection === "PAPER") {
            return ["WIN", playerSelection, computerSelection];
        }
    }
}

const selection = document.querySelectorAll('.PlayerSelection')

selection.forEach((selection) => {

    selection.addEventListener('click', () => {

        let result = playRound(selection.id, getComputerChoice());
        displayResults(result[0], result[1], result[2]);

    });
});

function displayResults(result, playerSelection, computerSelection) {

    const results = document.querySelector('.ResultsArea');
    removeAllChildNodes(results) // reset the results area

    const playerResult = document.createElement('div');
    const computerResult = document.createElement('div');

    playerResult.textContent = `You played:`;
    computerResult.textContent = `Computer played:`;

    playerResult.style.textAlign = "center";
    computerResult.style.textAlign = "center";

    const playerResultImage = document.createElement('img')
    if (playerSelection === "ROCK") {
        playerResultImage.src = "images/rockb.jpg";
        playerResultImage.classList.add('PlayerSelection');
        playerResultImage.classList.add('IndividualResult');
    } else if (playerSelection === "PAPER") {
        playerResultImage.src = "images/paperb.jpg";
        playerResultImage.classList.add('PlayerSelection');
        playerResultImage.classList.add('IndividualResult');
    } else if (playerSelection === "SCISSOR") {
        playerResultImage.src = "images/scissorb.jpg";
        playerResultImage.classList.add('PlayerSelection');
        playerResultImage.classList.add('IndividualResult');
    }

    const computerResultImage = document.createElement('img')
    if (computerSelection === "ROCK") {
        computerResultImage.src = "images/rocka.jpg";
        computerResultImage.classList.add('PlayerSelection');
        computerResultImage.classList.add('IndividualResult');
    } else if (computerSelection === "PAPER") {
        computerResultImage.src = "images/papera.jpg";
        computerResultImage.classList.add('PlayerSelection');
        computerResultImage.classList.add('IndividualResult');
    } else if (computerSelection === "SCISSOR") {
        computerResultImage.src = "images/scissora.jpg";
        computerResultImage.classList.add('PlayerSelection');
        computerResultImage.classList.add('IndividualResult');
    }

    playerResult.appendChild(playerResultImage);
    computerResult.appendChild(computerResultImage);

    const totalResult = document.createElement('div');
    if (result === "TIE") {
        totalResult.textContent = "Tie!";
    } else if (result === "WIN") {
        totalResult.textContent = "You Won!";
    } if (result === "LOSS") {
        totalResult.textContent = "You Lost!";
    }
    totalResult.classList.add('ResultText');

    results.appendChild(playerResult);
    results.appendChild(totalResult);
    results.appendChild(computerResult);

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// match start logic
const startMatchButton = document.querySelector('#StartMatch');
startMatchButton.addEventListener('click', startMatch);

function startMatch() {

    let wins = prompt("Play up to how many wins?", 5);
    while ( !(Number.isInteger(Number(wins))) || !(wins > 0) ) {
        let wins = prompt("Play up to how many wins? (Please enter a positive integer)", 5);
    }
    const bestof = (wins * 2) - 1 // if 9 round wins is victory, the match is a best of 17

    // reset the scoreboard and put in title and beginning scores (0 and 0)
    const scoreboard = document.querySelector('.Scoreboard');
    removeAllChildNodes(scoreboard)
    const matchTitle = document.createElement('div');

    matchTitle.textContent = `Playing to ${wins} wins (Best of ${bestof})`;
    const playerScore = document.createElement('div');
    playerScore.textContent = "Player: 0";
    const computerScore = document.createElement('div');
    computerScore.textContent = "Computer: 0";

    const scoreTally = document.createElement('div');
    scoreTally.classList.add('ScoreTally');

    scoreTally.appendChild(matchTitle);
    scoreTally.appendChild(playerScore);
    scoreTally.appendChild(computerScore);
    scoreboard.appendChild(scoreTally);

    

}
