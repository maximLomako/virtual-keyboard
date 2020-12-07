import {
  buttonValue,
  cardsItemsData, categoriesAvatarIndex, categoriesData, categoryValue, getCategoryValue, main
} from "./state";
import {renderGameModeCards} from "./gameModeCards";
import {renderTrainModeCartsBlock} from "./trainModeCards";
import {changeColorCategory} from "./toogleModeButton";
let attributeFromCategoryCard: null | number = null;


export const renderCategoriesBlock = () => {
  main.innerHTML = "";
  categoriesData.map((c: string, i: number) => main.insertAdjacentHTML("beforeend",
    ` <div class="category" dataValue=${i}>
              <div class="category__top"></div>
              <div class="category__bottom">
                <div class="category__icon">
                 <img src="../src/assets/${cardsItemsData[i][categoriesAvatarIndex].image}" alt="category__icon__img" class="category__icon__img">
                </div>
                <h3 class="category__description">${c}</h3>
               </div>
             </div>`));
  changeColorCategory();
};
renderCategoriesBlock();

const getAttributeFromCategoryCard = (e: Event) => {
  const target = e.target;
  if ((<Element>target).closest(".category")) {
    attributeFromCategoryCard = +(<Element>target).closest(".category").getAttribute("dataValue");
    getCategoryValue(attributeFromCategoryCard);
  }
};

const chooseGameMode = (e: Event) => {
  const target = e.target;
  if ((<Element>target).closest(".category")) {
    if (buttonValue) {
      renderTrainModeCartsBlock(categoryValue);
    } else {
      renderGameModeCards(categoryValue);
    }
  }
};

main.addEventListener("click", getAttributeFromCategoryCard);
main.addEventListener("click", chooseGameMode);
