// state.js
let state = {
    playerScore: 0,
    computerScore: 0,
    matchOngoing: false,
    winningScore: null,
};

export const getState = () => state;
export const setState = (newState) => {
    state = newState;
};