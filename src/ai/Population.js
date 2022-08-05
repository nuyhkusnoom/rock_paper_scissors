import {generate, run} from "./NeuralNetwork";
import { getState } from "../game/state";
import randomSelection from "./random";

let state = getState();

// parameters
let populationsize = 100;

let population = [];

// create an object member of population with a generated brain and other characteristics.
function createMember(brain, score, age) {
    return {
        brain: brain,
        score: score,
        age: age,
        prediction: null,
        confidence: null,
        score1: 1/3,
        score2: 1/3,
        score3: 1/3,
        score4: 1/3,
        score5: 1/3,
        score6: 1/3,
        score7: 1/3,
        score8: 1/3,
        score9: 1/3,
        score10: 1/3,
    }
}

// initialized with a population of (population size) on launch.
function repopulate() {

    population = [];

    for (let i = 0; i < populationsize; i++) {
        population.push(createMember(generate(), 0, 0));
    }
}

function setPopulation(newPopulation) {
    population = newPopulation;
}

// takes a vote from population to determine computerSelection of "ROCK" "PAPER" or "SCISSOR"
function getComputerSelection() {

    let rockVotes = 0;
    let paperVotes = 0;
    let scissorVotes = 0;

    let rockScore = 0;
    let paperScore = 0;
    let scissorScore = 0;

    for (let i = 0; i < populationsize; i++) {

        let thisSelection = run(population[i].brain, state.inputLayer);

        if (thisSelection.memberSelection === "ROCK") {
            population[i].prediction = "ROCK";
            population[i].confidence = thisSelection.rockConfidence;
            rockVotes += 1;
            rockScore += population[i].score;
        } else if (thisSelection.memberSelection === "PAPER") {
            population[i].prediction = "PAPER";
            population[i].confidence = thisSelection.paperConfidence;
            paperVotes += 1;
            paperScore += population[i].score;
        } else if (thisSelection.memberSelection === "SCISSOR") {
            population[i].prediction = "SCISSOR";
            population[i].confidence = thisSelection.scissorConfidence;
            scissorVotes += 1;
            scissorScore += population[i].score;
        }
    }

    if (rockVotes > paperVotes && rockVotes > scissorVotes) {
        return "ROCK";
    } else if (paperVotes > rockVotes && paperVotes > scissorVotes) {
        return "PAPER";
    } else if (scissorVotes > rockVotes && scissorVotes > paperVotes) {
        return "SCISSOR";
    } else if (rockScore > paperScore && rockScore > scissorScore) {
        return "ROCK";
    } else if (paperScore > rockScore && paperScore > scissorScore) {
        return "PAPER";
    } else if (scissorScore > rockScore && scissorScore > paperScore) {
        return "SCISSOR";
    } else {
        return "ROCK";
    }
}

export { population, setPopulation, createMember, repopulate, getComputerSelection, populationsize};