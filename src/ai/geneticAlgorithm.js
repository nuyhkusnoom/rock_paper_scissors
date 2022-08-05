import { population, createMember, populationsize } from "./Population";
import { mutate } from "./NeuralNetwork";
import { getState } from "../game/state";
import { purgerate } from "../parameters";

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

// gets scores of all the members for the last round. and updates scores.
// calculates average score and ranks by average score. top 50% survive and are cloned with mutations to populate the other 50%.
function geneticAlgorithm() {

    advanceGeneration();
    rankPopulation();
    purgePopulation();
    replenishPopulation();
}

// adds age, advances scores, gets new score, and calculates average score.
function advanceGeneration() {

    for (let i = 0; i < populationsize; i++) {
        
        let thisMember = population[i];

        // adds age
        thisMember.age += 1;

        // advances scores
        thisMember.score5 = thisMember.score4;
        thisMember.score4 = thisMember.score3;
        thisMember.score3 = thisMember.score2;
        thisMember.score2 = thisMember.score1;

        // gets new score
        if (state.playerSelection === "ROCK") {
            thisMember.score1 = thisMember.paperConfidence;
        } else if (state.playerSelection === "PAPER") {
            thisMember.score1 = thisMember.scissorConfidence;
        } else if (state.playerSelection === "SCISSOR") {
            thisMember.score1 = thisMember.rockConfidence;
        }

        // array of past scores; used for average function
        let scores = [
            thisMember.score1,
            thisMember.score2,
            thisMember.score3,
            thisMember.score4,
            thisMember.score5,
        ]

        // gets average score
        thisMember.score = average(scores);
    }
}

// get average of array function
const average = array => array.reduce((a, b) => a + b) / array.length;

// sort population by score
function rankPopulation() {

    population.sort((a,b) => b.score - a.score);
}

// kills off bottom {purgerate} of population
function purgePopulation() {

    let numberToPurge = Math.round(populationsize * purgerate);

    for (let i = 0; i < numberToPurge; i++) {
        population.pop();
    }
}

// starting from top (best) of population, add a new member into the population derived (mutated) from selected surviving member.
function replenishPopulation() {

    let numberToReplenish = Math.round(populationsize * purgerate);

    for (let i = 0; i < numberToReplenish; i++) {

        let survivingMember = population[i];

        let newMemberBrain = mutate(survivingMember.brain);

        let newmember = createMember(newMemberBrain);

        population.push(newmember);
    }
}

export {
    getTrainingState,
    setTrainingState,
    geneticAlgorithm,
}