import loadHome from "./home";
import loadPlay from "./play";
import loadTraining from "./training";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const websiteName = document.createElement("h1");
    websiteName.textContent = "Rock Paper Scissors";
  
    header.appendChild(websiteName);
    header.appendChild(createNav());
  
    return header;
}

function createNav() {
    const nav = document.createElement("nav");
  
    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Information";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });
  
    const playButton = document.createElement("button");
    playButton.classList.add("button-nav");
    playButton.textContent = "Play vs Bot";
    playButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(playButton);
        loadPlay();
    });
  
    const trainingButton = document.createElement("button");
    trainingButton.classList.add("button-nav");
    trainingButton.textContent = "Neural Networks";
    trainingButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(trainingButton);
        loadTraining();
    });
  
    nav.appendChild(homeButton);
    nav.appendChild(playButton);
    nav.appendChild(trainingButton);
  
    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });
  
    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const credits = document.createElement("div");
    credits.textContent = "Made by ";

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/nuyhkusnoom";
    githubLink.textContent = "nuyhkusnoom"

    credits.appendChild(githubLink);
    footer.appendChild(credits);
  
    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");
  
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}

export default initializeWebsite;