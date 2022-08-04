import randomSelection from "../ai/random";
import loadPlay from "../render/play";
import { getState, setState } from "./state";

let state = getState();

// continue the match for one round. proccessed on click of player selection.
function playRound(selection) {

    // if AI is still training, don't do anything.

    // get player selections
    let playerSelection = null;

    if (selection === "rock-selection") {
        playerSelection = "ROCK";
    } else if (selection === "paper-selection") {
        playerSelection = "PAPER";
    } else if (selection === "scissor-selection") {
        playerSelection = "SCISSOR";
    }

    let computerSelection = randomSelection();

    // update selections
    state.playerSelection = playerSelection;
    state.computerSelection = computerSelection;

    // W/L/T logic
    if (playerSelection === computerSelection) {
        state.roundOutcome = "TIE";
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            state.roundOutcome = "LOSS";
        } else if (computerSelection === "SCISSOR") {
            state.roundOutcome = "WIN";
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSOR") {
            state.roundOutcome = "LOSS";
        } else if (computerSelection === "ROCK") {
            state.roundOutcome = "WIN";
        }
    } else if (playerSelection === "SCISSOR") {
        if (computerSelection === "ROCK") {
            state.roundOutcome = "LOSS";
        } else if (computerSelection === "PAPER") {
            state.roundOutcome = "WIN";
        }
    }

    // Match Logic

    // if the match was ongoing, assign score.
    if (state.matchOngoing === true) {
        if (state.roundOutcome === "WIN") {
            state.playerScore += 1;
        } else if (state.roundOutcome === "LOSS") {
            state.computerScore += 1;
        }
    }

    // if the new score change results in someone reaching the score goal, end the match.
    if (state.playerScore == state.winningScore) {
        state.matchOngoing = false;
        state.matchOutcome = "WIN";
        state.scoreboardText = `You won! Final Score:`;
    } else if (state.computerScore == state.winningScore) {
        state.matchOngoing = false;
        state.matchOutcome = "LOSS";
        state.scoreboardText = `You lost! Final Score:`;
    }

    // update one-hot encoded input layer for AI training
    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK") {
            state.inputLayer = [1, 0, 0, 0, 0, 0, 0, 0, 0];
        } else if (computerSelection === "PAPER") {
            state.inputLayer = [0, 1, 0, 0, 0, 0, 0, 0, 0];
        } else if (computerSelection === "SCISSOR") {
            state.inputLayer = [0, 0, 1, 0, 0, 0, 0, 0, 0];
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            state.inputLayer = [0, 0, 0, 1, 0, 0, 0, 0, 0];
        } else if (computerSelection === "PAPER") {
            state.inputLayer = [0, 0, 0, 0, 1, 0, 0, 0, 0];
        } else if (computerSelection === "SCISSOR") {
            state.inputLayer = [0, 0, 0, 0, 0, 1, 0, 0, 0];
        }
    } else if (playerSelection === "SCISSOR") {
        if (computerSelection === "ROCK") {
            state.inputLayer = [0, 0, 0, 0, 0, 0, 1, 0, 0];
        } else if (computerSelection === "PAPER") {
            state.inputLayer = [0, 0, 0, 0, 0, 0, 0, 1, 0];
        } else if (computerSelection === "SCISSOR") {
            state.inputLayer = [0, 0, 0, 0, 0, 0, 0, 0, 1];
        }
    }

    setState(state);
    loadPlay();
}

export default playRound;