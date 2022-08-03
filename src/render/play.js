import reset from "../helper/reset";
import { getState, setState } from "../game/state";
import startMatch from "../game/start";
import playRound from "../game/round";

let state = getState();

function createPlay() {
    const play = document.createElement("div");
    play.classList.add("play");

    const scoreboard = createScoreboard();
    const selectionArea = createSelectionArea();
    const resultsArea = createResultsArea();
    const startMatchButton = createStartMatchButton();

    play.appendChild(scoreboard);
    play.appendChild(selectionArea);
    play.appendChild(resultsArea);
    play.appendChild(startMatchButton);

    return play;
}

function createScoreboard() {

    const scoreboard = document.createElement('div');
    scoreboard.classList.add("container");
    scoreboard.setAttribute('id', 'scoreboard');

    const scores = document.createElement('div');
    scores.classList.add('container');
    scores.setAttribute('id', 'scores');

    const playerScoreText = document.createElement('div');
    playerScoreText.classList.add('scores');
    playerScoreText.textContent = `Player: ${state.playerScore}`;

    const computerScoreText = document.createElement('div');
    computerScoreText.classList.add('scores');
    computerScoreText.textContent = `Computer: ${state.computerScore}`;

    scores.appendChild(playerScoreText);
    scores.appendChild(computerScoreText);

    const scoreboardText = createScoreboardText();

    scoreboard.appendChild(scoreboardText);
    scoreboard.appendChild(scores);

    return scoreboard;
}

function createScoreboardText() {

    const scoreboardText = document.createElement('div');
    scoreboardText.setAttribute('id', 'scoreboard-text');
    scoreboardText.textContent = state.scoreboardText;

    return scoreboardText;
}

function createSelectionArea() {
    const selectionArea = document.createElement('div');
    selectionArea.classList.add("selection-area");

    const rockSelection = document.createElement('input');
    rockSelection.classList.add('selection-input');
    rockSelection.setAttribute('id', 'rock-selection');
    rockSelection.type = "image";
    rockSelection.src = "images/rockb.jpg";
    rockSelection.alt = "Rock";
    rockSelection.draggable = false;
    rockSelection.addEventListener('click', (e) => {
        playRound(e.target.id); // sends "rock-selection"
    });

    const paperSelection = document.createElement('input');
    paperSelection.classList.add('selection-input');
    paperSelection.setAttribute('id', 'paper-selection');
    paperSelection.type = "image";
    paperSelection.src = "images/paperb.jpg";
    paperSelection.alt = "Paper";
    paperSelection.draggable = false;
    paperSelection.addEventListener('click', (e) => {
        playRound(e.target.id); // sends "paper-selection"
    });

    const scissorSelection = document.createElement('input');
    scissorSelection.classList.add('selection-input');
    scissorSelection.setAttribute('id', 'scissor-selection');
    scissorSelection.type = "image";
    scissorSelection.src = "images/scissorb.jpg";
    scissorSelection.alt = "Scissor";
    scissorSelection.draggable = false;
    scissorSelection.addEventListener('click', (e) => {
        playRound(e.target.id); // sends "scissor-selection"
    });

    selectionArea.appendChild(rockSelection);
    selectionArea.appendChild(paperSelection);
    selectionArea.appendChild(scissorSelection);

    return selectionArea;
}

function createResultsArea () {
    const resultsArea = document.createElement('div');
    resultsArea.classList.add("results-area");

    const playerSelectionImage = document.createElement('img');
    playerSelectionImage.classList.add('selection-input');
    playerSelectionImage.draggable = false;

    const computerSelectionImage = document.createElement('img');
    computerSelectionImage.classList.add('selection-input');
    computerSelectionImage.draggable = false;

    const resultText = document.createElement('div');
    resultText.classList.add('result-text');

    const playerSelectionArea = document.createElement('div');
    playerSelectionArea.classList.add('result-selection-area');

    const computerSelectionArea = document.createElement('div');
    computerSelectionArea.classList.add('result-selection-area');

    const playerSelectionText = document.createElement('p');
    playerSelectionText.classList.add('selection-text');
    playerSelectionText.textContent = "You played:";

    const computerSelectionText = document.createElement('p');
    computerSelectionText.classList.add('selection-text');
    computerSelectionText.textContent = "Computer played:";

    playerSelectionArea.appendChild(playerSelectionText);
    playerSelectionArea.appendChild(playerSelectionImage);

    computerSelectionArea.appendChild(computerSelectionText);
    computerSelectionArea.appendChild(computerSelectionImage);

    // if there are no results, don't show results.
    if (state.roundOutcome === null) {
        return resultsArea;
    }
    
    if (state.playerSelection === "ROCK") {
        playerSelectionImage.src = "images/rockb.jpg";
    } else if (state.playerSelection === "PAPER") {
        playerSelectionImage.src = "images/paperb.jpg";
    } else if (state.playerSelection === "SCISSOR") {
        playerSelectionImage.src = "images/scissorb.jpg";
    }

    if (state.computerSelection === "ROCK") {
        computerSelectionImage.src = "images/rocka.jpg";
    } else if (state.computerSelection === "PAPER") {
        computerSelectionImage.src = "images/papera.jpg";
    } else if (state.computerSelection === "SCISSOR") {
        computerSelectionImage.src = "images/scissora.jpg";
    }

    if (state.roundOutcome === "TIE") {
        resultText.textContent = "Tie!"
    } else if (state.roundOutcome === "WIN") {
        resultText.textContent = "You won!"
    } else if (state.roundOutcome === "LOSS") {
        resultText.textContent = "You lost!"
    }

    resultsArea.appendChild(playerSelectionArea);
    resultsArea.appendChild(resultText);
    resultsArea.appendChild(computerSelectionArea);

    return resultsArea;
}

function createStartMatchButton () {
    const startMatchButton = document.createElement('button');
    startMatchButton.classList.add("menu-button");
    startMatchButton.setAttribute('id', 'start-match');
    startMatchButton.textContent = "Start Match";
    startMatchButton.id = "start-match-button"
    startMatchButton.addEventListener('click', startMatch);

    return startMatchButton;
}

function loadPlay() {
    const main = document.getElementById("main");
    reset(main);
    main.appendChild(createPlay());
}

export default loadPlay;