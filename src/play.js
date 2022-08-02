import reset from "./helper/reset";

function createPlay() {
    const home = document.createElement("div");
    home.classList.add("play");
  
    return home;
}
  
function loadPlay() {
    const main = document.getElementById("main");
    reset(main);
    main.appendChild(createPlay());
}

export default loadPlay;