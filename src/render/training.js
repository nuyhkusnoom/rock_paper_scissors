import reset from "../helper/reset";
import { getTrainingState, setTrainingState } from "../ai/GeneticAlgorithm";
import { population, repopulate, populationsize } from "../ai/Population";

let trainingState = getTrainingState();

function createTraining() {
    const training = document.createElement("div");
    training.classList.add("training");

    const populationArea = createPopulationArea();
    const buttonArea = createButtonArea();

    training.appendChild(populationArea);
    training.appendChild(buttonArea);

    return training;
}

function createPopulationArea() {

    const populationArea = document.createElement('div');
    populationArea.classList.add('population-area');

    for (let i = 0; i < populationsize; i++) {
        populationArea.appendChild(createMemberArea(i));
    }

    return populationArea;
}

function createMemberArea(iteration) {

    const memberArea = document.createElement('div');
    memberArea.classList.add('member-area');
    memberArea.id = `member-${iteration+1}`;
    memberArea.textContent = `${iteration+1}`;
    
    const memberInfo = document.createElement('div');
    memberInfo.classList.add('member-info');

    memberInfo.appendChild(createText(`Ranking: ${iteration+1}`));
    memberInfo.appendChild(createText(`Score: ${roundToTwo(population[iteration].score*100)}%`));
    memberInfo.appendChild(createText(`Age: ${population[iteration].age}`));
    memberInfo.appendChild(createText(`Prediction: ${population[iteration].prediction}`));
    memberInfo.appendChild(createText(`Confidence: ${roundToTwo(population[iteration].confidence*100)}%`));

    memberArea.appendChild(memberInfo);

    return memberArea;
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function createText(text) {
    const memberText = document.createElement('div');
    memberText.classList.add('member-text');
    memberText.textContent = text;

    return memberText;
}

function createButtonArea() {

    const buttonArea = document.createElement('div');
    buttonArea.classList.add('button-area');

    buttonArea.appendChild(createResetTrainingButton());
    buttonArea.appendChild(createToggleTrainingButton());

    return buttonArea;
}

function createResetTrainingButton() {

    const resetTrainingButton = document.createElement('button');
    resetTrainingButton.classList.add('menu-button');
    resetTrainingButton.textContent = "Reset Training";

    // resets population on click.
    resetTrainingButton.addEventListener('click', () => {
        repopulate();
        loadTraining();
    });

    return resetTrainingButton;
}

function createToggleTrainingButton() {

    const toggleTrainingButton = document.createElement('button');
    toggleTrainingButton.classList.add('menu-button');

    if (trainingState.currentlyTraining === true) {
        toggleTrainingButton.textContent = "Pause Training";
    } else {
        toggleTrainingButton.textContent = "Resume Training";
    }

    // toggles training status on click.
    toggleTrainingButton.addEventListener('click', () => {
        if (trainingState.currentlyTraining === true) {
            trainingState.currentlyTraining = false;
        } else {
            trainingState.currentlyTraining = true;
        }
        setTrainingState(trainingState);
        loadTraining();
    });

    return toggleTrainingButton;
}

function loadTraining() {
    const main = document.getElementById("main");
    reset(main);
    main.appendChild(createTraining());
}

export default loadTraining;