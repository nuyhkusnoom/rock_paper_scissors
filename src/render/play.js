import reset from "../helper/reset";
import { getState } from "../data/state";

let state = getState();

function createPlay() {
    const play = document.createElement("div");
    play.classList.add("play");

    const scoreboard = createScoreboard();

    const selectionArea = createSelectionArea();
    selectionArea.classList.add("selection-area");

    const resultsArea = document.createElement('div');
    resultsArea.classList.add("results-area");

    const startMatchButton = createStartMatchButton();
    startMatchButton.classList.add("menu-button");
    startMatchButton.setAttribute('id', 'start-match');

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

    const scoreboardText = document.createElement('div');
    scoreboardText.setAttribute('id', 'scoreboard-text');
    scoreboardText.textContent = "BaHH";

    scoreboard.appendChild(scoreboardText);
    scoreboard.appendChild(scores);

    return scoreboard;
}

function createSelectionArea() {
    const selectionArea = document.createElement('div');

    const rockSelection = document.createElement('button');
    rockSelection.classList.add('selection-button');
    rockSelection.setAttribute('id', 'rock-selection');

    const paperSelection = document.createElement('button');
    paperSelection.classList.add('selection-button');
    paperSelection.setAttribute('id', 'paper-selection');

    const scissorSelection = document.createElement('button');
    scissorSelection.classList.add('selection-button');
    scissorSelection.setAttribute('id', 'scissor-selection');

    selectionArea.appendChild(rockSelection);
    selectionArea.appendChild(paperSelection);
    selectionArea.appendChild(scissorSelection);

    return selectionArea;
}

function createStartMatchButton () {
    const startMatchButton = document.createElement('button');
    startMatchButton.textContent = "Start Match";
    
    return startMatchButton;
}

function loadPlay() {
    const main = document.getElementById("main");
    reset(main);
    main.appendChild(createPlay());
}

export default loadPlay;