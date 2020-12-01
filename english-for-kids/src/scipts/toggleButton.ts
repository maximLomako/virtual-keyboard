import { changeColorCategory } from "./category";
import { renderGameModeCards } from "./gameMode";

const toggleButton = document.querySelector(".toggleButton");
const btnTrain = document.querySelector(".btn__train");
const btnGame = document.querySelector(".btn__game");

let buttonValue = true;

const changeButtonStyle = () => {
  if (buttonValue) {
    btnTrain.classList.add("active");
    btnGame.classList.remove("active");
    buttonValue = true;
  } else {
    btnTrain.classList.remove("active");
    btnGame.classList.add("active");
    buttonValue = false;
    renderGameModeCards(0);
  }
  console.log(buttonValue);
};
changeButtonStyle();

const changeGameMode = (e: Event) => {
  const target = e.target;
  if ((<Element>target).classList.contains("btn__train")) {
    buttonValue = true;
  } else {
    buttonValue = false;
  }
  changeButtonStyle();
  changeColorCategory(buttonValue);
};

toggleButton.addEventListener("click", changeGameMode);

export default buttonValue;
