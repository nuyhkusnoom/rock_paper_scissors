// random computer choice
function randomSelection() {
    let randomChoice = Math.random()

    if (randomChoice < 1/3) {
        return "ROCK";
    } else if (randomChoice >= 1/3 && randomChoice < 2/3) {
        return "PAPER";
    } else if (randomChoice >= 2/3 && randomChoice < 1) {
        return "SCISSOR";
    } else {
        return "ERROR";
    }
}

// // checks if random computer choice is uniform
// function checkAccuracy() {

//     let rockcount = 0;
//     let papercount = 0;
//     let scissorscount = 0;
//     let errorcount = 0;

//     for (let i = 0; i < 10000000; i++) {

//         let computerchoice = getComputerChoice();

//         if (computerchoice === "ROCK") {
//             rockcount += 1;
//         } else if (computerchoice === "PAPER") {
//             papercount += 1;
//         } else if (computerchoice === "SCISSORS") {
//             scissorscount += 1;
//         } else {
//             errorcount += 1;
//         }
//     }

//     console.log(
//         `Rock: ${rockcount}, Paper: ${papercount}, Scissors: ${scissorscount}, Errors: ${errorcount}`
//     )
// }

export default randomSelection;