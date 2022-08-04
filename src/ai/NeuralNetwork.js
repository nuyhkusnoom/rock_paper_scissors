import { inputLayer } from "@tensorflow/tfjs-layers/dist/exports_layers";
// import {getState} from "../game/state";

// let state = getState();

// parameters
let denselayersize = 10;
let inputlayersize = 9;
let outputlayersize = 3;

// generates a fresh, randomized neural network
function generate() {

    // tunable parameters:
    // first dense layer weights, biases
    // second dense layer weights, biases
    // output layer weights, biases

    // network structure:
    //     [
    //         [first dense layer weights: number of inputs] 9 RPS 2d outcome matrix
    //         [first dense layer biases: number of nodes in this layer] 10
    //         [second dense layer weights: number of nodes in first layer] 10
    //         [second dense layer biases: number of nodes in this layer] 10
    //         [output layer weights: number of nodes in second layer] 10
    //         [output layer biases: number of nodes in this layer] 3
    //     ]

    // initialize brain (a.k.a. one member of the population)
    let member = [];

    // member[0] = first dense layer weights
    // member[0][0] = weights for the first node [10 (denselayersize)] (one for each input [9])
    // member[0][0][0] = weight for the first input into the first node
    // [first dense layer weights: number of inputs] 9 for 10 nodes = 90
    let firstdenselayerweights = [];
    for (let i = 0; i < denselayersize; i++) {
        let thisnodeweights = [];
        for (let w = 0; w < inputlayersize; w++) {
            thisnodeweights.push(getRandom(-1,1));
        }
        firstdenselayerweights.push(thisnodeweights);
    }
    member.push(firstdenselayerweights);

    // member[1] = firstdenselayerbiases
    // member[1][0] = bias for the first node in the dense layer
    // firstdenselayerbiases = number of dense layer nodes
    // [first dense layer biases: number of nodes in this layer] 20
    let firstdenselayerbiases = [];
    for (let i = 0; i < denselayersize; i++) {
        firstdenselayerbiases.push(getRandom(-1,1));
    }
    member.push(firstdenselayerbiases);

    // member[2] = second dense layer weights
    // member[2][0] = weights for the first node [10] (one for each input)
    // member[2][0][0] = weight for the first input into the first node
    // [second dense layer weights: number of 1hot encoded xdata] 10 for 10 nodes = 100
    let seconddenselayerweights = [];
    for (let i = 0; i < denselayersize; i++) {
        let thisnodeweights = [];
        for (let w = 0; w < denselayersize; w++) {
            thisnodeweights.push(getRandom(-1,1));
        }
        seconddenselayerweights.push(thisnodeweights);
    }
    member.push(seconddenselayerweights);

    // [second dense layer biases: number of nodes in this layer] 10
    let seconddenselayerbiases = [];
    for (let i = 0; i < denselayersize; i++) {
        seconddenselayerbiases.push(getRandom(-1,1));
    }
    member.push(seconddenselayerbiases);

    // [output layer weights: number of nodes in second layer] 10
    let outputlayerweights = [];
    for (let i = 0; i < outputlayersize; i++) {
        let thisnodeweights = [];
        for (let w = 0; w < denselayersize; w++) {
            thisnodeweights.push(getRandom(-1,1));
        }
        outputlayerweights.push(thisnodeweights);
    }
    member.push(outputlayerweights);

    // [output layer biases: number of nodes in this layer] 3
    let outputlayerbiases = [];
    for (let i = 0; i < outputlayersize; i++) {
        outputlayerbiases.push(getRandom(-1,1));
    }
    member.push(outputlayerbiases);

    return member;
}

// gets random number between min and max
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// runs the neural network on a defined input layer and returns the output layer.
// input layer is a one-hot encoded array of 9 size.
// [playerrock/computerrock, playerrock/computerpaper, playerrock/computerscissor, ...]
// if outcome was playerrock and computerrock, the inputlayer looks like [1, 0, 0, 0, 0, 0, 0, 0, 0]
// if input layer is null (haven't played the first round yet, then computerselection is randomized
function run(member, inputLayer) {
    return "ROCK, PAPER, or SCISSOR";
}

export {generate, run};