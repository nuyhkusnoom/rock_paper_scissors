import loadPlay from "../render/play";
import { getState, setState } from "./state";

let state = getState();
let wins = null;

function startMatch() {

    wins = prompt("Play up to how many wins?", 5);
    while ( !(Number.isInteger(Number(wins))) || !(Number(wins) > 0) ) {
        wins = prompt("Play up to how many wins? (Please enter a positive integer)", 5);
    }

    state.winningScore = wins;
    state.matchOngoing = true;
    state.matchOutcome = "ONGOING";
    state.playerScore = 0;
    state.computerScore = 0;
    state.scoreboardText = `Playing to ${state.winningScore} wins. (Best of ${state.winningScore*2 - 1})`;

    setState(state); // save the new game info to state object in state.js file

    loadPlay(); // render the new Play Tab.
}

export default startMatch;