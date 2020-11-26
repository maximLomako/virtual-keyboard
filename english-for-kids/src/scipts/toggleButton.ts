import { changeColorCategory } from "./category";

const toggleButton = document.querySelector(".toggleButton");
const btnTrain = document.querySelector(".btn__train");
const btnGame = document.querySelector(".btn__game");

let buttonValue = true;

const changeButtonStyle = () => {
  if (buttonValue) {
    btnTrain.classList.add("active");
    btnGame.classList.remove("active");
  } else {
    btnTrain.classList.remove("active");
    btnGame.classList.add("active");
  }
};

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
