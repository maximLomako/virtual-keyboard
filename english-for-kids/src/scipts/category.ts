import cards from "./cards";
// import {makeActiveLinks} from "./burger";
import {startTrainMode} from "./trainMode";
import {makeActiveLinks} from "./burger";

export const main = document.querySelector(".main");
export const [categories, ...cardsItems] = cards;
export const categoriesAvatarIndex = 6;

export const renderCategoriesBlock = () => {
  main.innerHTML = "";
  categories.map((c: string, i: number) => main.insertAdjacentHTML("beforeend",
    ` <div class="category" dataValue=${i}>
              <div class="category__top"></div>
              <div class="category__bottom">
                <div class="category__icon">
                 <img src="../src/assets/${cardsItems[i][categoriesAvatarIndex].image}" alt="category__icon__img" class="category__icon__img">
                </div>
                <h3 class="category__description">${c}</h3>
               </div>
             </div>`));

};
renderCategoriesBlock();
