// parameters
let denselayersize = 10;
let inputlayersize = 9;
let outputlayersize = 3;
let hardmutationrate = 0.10;
let softmutationrate = 0.50;
let mutationvariance = 0.05;

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

    // output = dotandadd(weights, biases, inputlayer)
    let firstDenseLayer = dotandadd(member[0], member[1], inputLayer);

    // ReLU activation (gets rid of negative values) and tanh to tame extreme values
    firstDenseLayer = firstDenseLayer.map(x => Math.max(0, Math.tanh(x)));

    // output = dotandadd(weights, biases, inputlayer)
    let secondDenseLayer = dotandadd(member[2], member[3], firstDenseLayer);

    // ReLU activation (gets rid of negative values) and tanh to tame extreme values
    secondDenseLayer = secondDenseLayer.map(x => Math.max(0, Math.tanh(x)));

    // output = dotandadd(weights, biases, inputlayer)
    let outputLayer = dotandadd(member[4], member[5], secondDenseLayer);

    // sigmoid the output layer (returns an array where the sum of all values equals 1)
    outputLayer = outputLayer.map(x => sigmoid(x));
    let sumNumber = outputLayer.reduce((a, b) => a + b, 0)
    outputLayer = outputLayer.map(x => x/sumNumber);

    let winner = largestNum(outputLayer);
    let result;

    if (outputLayer[0] === winner) {
        result = {
            memberSelection: "ROCK",
            rockConfidence: outputLayer[0],
            paperConfidence: outputLayer[1],
            scissorConfidence: outputLayer[2],
        };
    } else if (outputLayer[1] === winner) {
        result = {
            memberSelection: "PAPER",
            rockConfidence: outputLayer[0],
            paperConfidence: outputLayer[1],
            scissorConfidence: outputLayer[2],
        };
    } else if (outputLayer[2] === winner) {
        result = {
            memberSelection: "SCISSOR",
            rockConfidence: outputLayer[0],
            paperConfidence: outputLayer[1],
            scissorConfidence: outputLayer[2],
        };
    }

    return result;
}

function largestNum(array) {

    let largest = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    return largest;
}

// dot product for each thing then sum then add bias
function dotandadd (weights, biases, inputlayer) {

    // output layer size is length of member 1, 3, 5 (biases)
    // input layer size is length of inputlayer

    // length of weights[0] = output layer size;
    // length of weights = input layer size;

    // I want to get final result of an outputlayer with length of outputlayersize

    let outputlayerlength = biases.length;
    let inputlayerlength = inputlayer.length;
    let finalresult = [];

    for (let n = 0; n < outputlayerlength; n++) {

        let nodevalue = 0;

        for (let v = 0; v < inputlayerlength; v++) {

            nodevalue += weights[n][v] * inputlayer[v];
        }
        nodevalue += biases[n];
    
        finalresult.push(nodevalue);
    }
    return finalresult;
}

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

// possible hard mutate, then soft mutate based on variance
function mutate(member) {

    let layer1 = [];
    for (let i = 0; i < member[0].length; i++) {
        let thisnodeweights = [];
        for (let w = 0; w < member[0][i].length; w++) {
            thisnodeweights.push(member[0][i][w]);
        }
        layer1.push(thisnodeweights);
    }

    let layer2 = [];
    for (let i = 0; i < member[1].length; i++) {
        layer2.push(member[1][i])
    }

    let layer3 = [];
    for (let i = 0; i < member[2].length; i++) {
        let thisnodeweights = [];
        for (let w = 0; w < member[2][i].length; w++) {
            thisnodeweights.push(member[2][i][w]);
        }
        layer3.push(thisnodeweights);
    }

    let layer4 = [];
    for (let i = 0; i < member[3].length; i++) {
        layer4.push(member[3][i])
    }

    let layer5 = [];
    for (let i = 0; i < member[4].length; i++) {
        let thisnodeweights = [];
        for (let w = 0; w < member[4][i].length; w++) {
            thisnodeweights.push(member[4][i][w]);
        }
        layer5.push(thisnodeweights);
    }

    let layer6 = [];
    for (let i = 0; i < member[5].length; i++) {
        layer6.push(member[5][i])
    }
    
    newmember = [];
    let P;
    let Q;

    // first dense layer weights: member[0]
    for (let i = 0; i < layer1.length; i++) {
        for (let w = 0; w < layer1[i].length; w++) {
            P = probabilityMatrix(layer1[i].length);
            if (P[w] < hardmutationrate) {
                layer1[i][w] = getRandom(-1,1);
            }
            Q = probabilityMatrix(layer1[i].length);
            if (Q[w] < softmutationrate) {
                layer1[i][w] *= getRandom(1-mutationvariance, 1+mutationvariance);
            }
            if (layer1[i][w] > 1) {
                layer1[i][w] = 1;
            }
            if (layer1[i][w] < -1) {
                layer1[i][w] = -1;
            }
        }
    }
    newmember.push(layer1);

    // first dense layer biases: member[1]
    P = probabilityMatrix(layer2.length);
    Q = probabilityMatrix(layer2.length);
    for (let i = 0; i < layer2.length; i++) {
        if (P[i] < hardmutationrate) {
            layer2[i] = getRandom(-1,1);
        }
        if (Q[i] < softmutationrate) {
            layer2[i] *= getRandom(1-mutationvariance, 1+mutationvariance);
        }
        if (layer2[i] > 1) {
            layer2[i] = 1;
        }
        if (layer2[i] < -1) {
            layer2[i] = -1;
        }
    }
    newmember.push(layer2);

    // second dense layer weights: member[2]
    for (let i = 0; i < layer3.length; i++) {
        for (let w = 0; w < layer3[i].length; w++) {
            P = probabilityMatrix(layer3[i].length);
            if (P[w] < hardmutationrate) {
                layer3[i][w] = getRandom(-1,1);
            }
            Q = probabilityMatrix(layer3[i].length);
            if (Q[w] < softmutationrate) {
                layer3[i][w] *= getRandom(1-mutationvariance, 1+mutationvariance);
            }
            if (layer3[i][w] > 1) {
                layer3[i][w] = 1;
            }
            if (layer3[i][w] < -1) {
                layer3[i][w] = -1;
            }
        }
    }
    newmember.push(layer3);

    // second dense layer biases: member[3]
    P = probabilityMatrix(layer4.length);
    Q = probabilityMatrix(layer4.length);
    for (let i = 0; i < layer4.length; i++) {
        if (P[i] < hardmutationrate) {
            layer4[i] = getRandom(-1,1);
        }
        if (Q[i] < softmutationrate) {
            layer4[i] *= getRandom(1-mutationvariance, 1+mutationvariance);
        }
        if (layer4[i] > 1) {
            layer4[i] = 1;
        }
        if (layer4[i] < -1) {
            layer4[i] = -1;
        }
    }
    newmember.push(layer4);

    // output layer weights: member[4]
    for (let i = 0; i < layer5.length; i++) {
        for (let w = 0; w < layer5[i].length; w++) {
            P = probabilityMatrix(layer5[i].length);
            if (P[w] < hardmutationrate) {
                layer5[i][w] = getRandom(-1,1);
            }
            Q = probabilityMatrix(layer5[i].length);
            if (Q[w] < softmutationrate) {
                layer5[i][w] *= getRandom(1-mutationvariance, 1+mutationvariance);
            }
            if (layer5[i][w] > 1) {
                layer5[i][w] = 1;
            }
            if (layer5[i][w] < -1) {
                layer5[i][w] = -1;
            }
        }
    }
    newmember.push(layer5);

    // output layer biases: member[5]
    P = probabilityMatrix(layer6.length);
    Q = probabilityMatrix(layer6.length);
    for (let i = 0; i < layer6.length; i++) {
        if (P[i] < hardmutationrate) {
            layer6[i] = getRandom(-1,1);
        }
        if (Q[i] < softmutationrate) {
            layer6[i] *= getRandom(1-mutationvariance, 1+mutationvariance);
        }
        if (layer6[i] > 1) {
            layer6[i] = 1;
        }
        if (layer6[i] < -1) {
            layer6[i] = -1;
        }
    }
    newmember.push(layer6);

    return newmember;
}

function probabilityMatrix(length) {

    let array = [];

    for (let i = 0; i < length; i++) {
        array.push(getRandom(0,1));
    }

    return array;
}

export {generate, run, mutate};