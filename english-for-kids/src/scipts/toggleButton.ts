import {makeActiveLinks} from "./burger";
import {startGameMode} from "./gameMode";
import {startTrainMode} from "./trainMode";

const toggleButton = document.querySelector(".toggleButton");
const btnTrain = document.querySelector(".btn__train");
const btnGame = document.querySelector(".btn__game");
const categoryTop = document.querySelectorAll(".category__top");
const category = document.querySelectorAll(".category");
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
  }
};
changeButtonStyle();

const changeColorCategory = () => {
  categoryTop.forEach(el => {
    if (!buttonValue) {
      el.classList.add("category-top--gameMod");
    } else {
      el.classList.remove("category-top--gameMod");
    }
  });
};

const changeGameMode = (e: Event) => {
  const target = e.target;
  if ((<Element>target).classList.contains("btn__train")) {
    buttonValue = true;

  } else {
    buttonValue = false;

  }
  changeButtonStyle();
  changeColorCategory();
};

const initGameMode = () => {
  if (buttonValue) {
    for (let i = 0; i < category.length; i += 1) {
      category[i].addEventListener("click", startTrainMode);
      category[i].addEventListener("click", () => {
        makeActiveLinks(i);
      });
    }
  } else {
    for (let i = 0; i < category.length; i += 1) {
      category[i].addEventListener("click", startGameMode);
      category[i].addEventListener("click", () => {
        makeActiveLinks(i);
      });
    }
  }
};
initGameMode();
toggleButton.addEventListener("click", changeGameMode);
