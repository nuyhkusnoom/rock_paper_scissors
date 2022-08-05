import { population, repopulate, populationsize } from "../ai/Population";
import { generate, run, mutate } from "../ai/NeuralNetwork";
import { getState, setState } from "../game/state";

let trainingState = {
    currentlyTraining: true
}

function getTrainingState() {
    return trainingState;
}

function setTrainingState(state) {
    trainingState = state;
}

let state = getState();
let inputLayer = state.inputLayer;

// function advanceGeneration() {



// }






export {
    getTrainingState,
    setTrainingState,
    // advanceGeneration,
}