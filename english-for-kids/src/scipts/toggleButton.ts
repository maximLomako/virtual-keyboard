import {makeActiveLinks} from "./burger";
import {renderGameModeCards, startGameMode} from "./gameMode";
import {addVoiceOfWord, renderTrainModeCarts, startTrainMode} from "./trainMode";
import {main} from "./category";
import {startRotate} from "./rotateCard";

const toggleButton = document.querySelector(".toggleButton");
const btnTrain = document.querySelector(".btn__train");
const btnGame = document.querySelector(".btn__game");
const categoryTop = document.querySelectorAll(".category__top");
const category = document.querySelectorAll(".category");
export let buttonValue = true;
export let attributeFromCategoryCard: null | number = null;

const saveCategoryCardDataValue = () => {
  const saveCardDataValue = (e: Event) => {
    attributeFromCategoryCard = +(e.currentTarget as HTMLButtonElement).getAttribute("dataValue");
  };
  for (let i = 0; i < category.length; i += 1) {
    category[i].addEventListener("click", (e) => {
      saveCardDataValue(e);
    });
  }
};
saveCategoryCardDataValue();

const callingTrainMode = () => {
  if (attributeFromCategoryCard === null) {
    return;
  }
  main.innerHTML = "";
  renderTrainModeCarts(attributeFromCategoryCard);
  startRotate();
  addVoiceOfWord(attributeFromCategoryCard);
};

const callingGameMode = () => {
  if (attributeFromCategoryCard === null) {
    return;
  }
  main.innerHTML = "";
  renderGameModeCards(attributeFromCategoryCard);
};

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

const changeColorCategory = () => {
  categoryTop.forEach(el => {
    if (!buttonValue) {
      el.classList.add("category-top--gameMod");
    } else {
      el.classList.remove("category-top--gameMod");
    }
  });
};

const startPlayTrainMode = () => {
  for (let i = 0; i < category.length; i += 1) {
    category[i].addEventListener("click", startTrainMode);
    category[i].addEventListener("click", () => {
      makeActiveLinks(i);
    });
  }
};
const startPlayGameMode = () => {
  for (let i = 0; i < category.length; i += 1) {
    category[i].addEventListener("click", startGameMode);
    category[i].addEventListener("click", () => {
      makeActiveLinks(i);
    });
  }
};

export const initGameMode = () => {
  if (buttonValue) {
    startPlayTrainMode();
  } else {
    startPlayGameMode();
  }
};
const changeGameMode = (e: Event) => {
  const target = e.target;
  if ((<Element>target).classList.contains("btn__train")) {
    buttonValue = true;
    callingTrainMode();
  } else {
    buttonValue = false;
    callingGameMode();
  }
  changeButtonStyle();
  changeColorCategory();
  initGameMode();
};
initGameMode();

toggleButton.addEventListener("click", changeGameMode);
