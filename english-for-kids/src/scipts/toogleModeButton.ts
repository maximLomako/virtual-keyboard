import {btnGame, btnTrain, buttonValue, categoryValue, setButtonValue, toggleButton} from "./state";
import {renderGameModeCards} from "./gameModeCards";
import {renderTrainModeCartsBlock} from "./trainModeCards";



export const changeColorCategory = () => {
  const categoryTop = document.querySelectorAll(".category__top");
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
    btnTrain.classList.add("active");
    btnGame.classList.remove("active");
    setButtonValue(true);
    changeColorCategory();
    if (categoryValue !== null && categoryValue >= 0) {
      renderTrainModeCartsBlock(categoryValue);
    }
  }
  if ((<Element>target).classList.contains("btn__game")) {
    btnTrain.classList.remove("active");
    btnGame.classList.add("active");
    setButtonValue(false);
    changeColorCategory();
    if (categoryValue !== null && categoryValue >= 0) {
      renderGameModeCards(categoryValue);
    }
  }
};

toggleButton.addEventListener("click", changeGameMode);
