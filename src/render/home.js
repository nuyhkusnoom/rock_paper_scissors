import reset from "../helper/reset";

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
  
    home.appendChild(createParagraph("Play Rock Paper Scissors against an AI that learns as you play!"));
    home.appendChild(createParagraph(`Go to the "Play vs Bot" tab to play. The AI improves its predictive model each time you make a selection. Click the "Start Match" button to start a match up to any number of rounds of your choosing.`));
    home.appendChild(createParagraph(`You can see the results of the AI training under the "Neural Networks" tab. You can pause/resume/reset the training by pressing the respective buttons.`));

    return home;
}
  
function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}
  
function loadHome() {
    const main = document.getElementById("main");
    reset(main);
    main.appendChild(createHome());
}

export default loadHome;