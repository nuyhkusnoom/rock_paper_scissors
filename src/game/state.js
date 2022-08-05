// the game data that needs to be updated.
// this is the initial state of the game

let state = {
    playerScore: 0,
    computerScore: 0,
    matchOngoing: false,
    winningScore: null,
    playerSelection: null,
    computerSelection: null,
    roundOutcome: null,
    matchOutcome: null,
    scoreboardText: `Click "Start Match" to play up to any number of rounds of your choosing.`,
    inputLayer: [0,0,0,0,0,0],
};

export const getState = () => state;
export const setState = (newState) => {
    state = newState;
};