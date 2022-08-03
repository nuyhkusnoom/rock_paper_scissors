// the game data that needs to be updated.
// this is the initial state of the game

let state = {
    playerScore: 0,
    computerScore: 0,
    matchOngoing: false,
    winningScore: null,
    playerSelection: "ROCK",
    computerSelection: "PAPER",
    roundOutcome: "TIE",
    matchOutcome: "LOSS",
};

export const getState = () => state;
export const setState = (newState) => {
    state = newState;
};