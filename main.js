// Functionize Minecraft Fishing Start Code

// HTML Variables
let resultImg = document.getElementById("result-img");
let codEl = document.getElementById("num-cod");
let salmonEl = document.getElementById("num-salmon");
let tropicalEl = document.getElementById("num-tropical");
let pufferEl = document.getElementById("num-puffer");

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;
  // Generate A Random Number
  let randNum = Math.random();
  console.log(randNum);

  if (character === "steve") {
    // Steve Fish Simulator

    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      codEl.innerHTML = numCod;
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical++;
      tropicalEl.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Alex Fish Simulator

    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      codEl.innerHTML = numCod;
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical++;
      tropicalEl.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
    }
  } else if (character === "villager") {
    // Villager Fish Simulator

    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      codEl.innerHTML = numCod;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical++;
      tropicalEl.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
    }
  }
}
