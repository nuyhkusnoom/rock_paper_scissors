import reset from "./helper/reset";

function createTraining() {
    const home = document.createElement("div");
    home.classList.add("training");
  
    return home;
}
  
function loadTraining() {
    const main = document.getElementById("main");
    reset(main);
    main.appendChild(createTraining());
}

export default loadTraining;