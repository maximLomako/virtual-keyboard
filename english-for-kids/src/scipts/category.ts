import cards from "./cards";
import {renderTrainModeCarts} from "./trainMode";
import {startRotate} from "./rotateCard";

export const main = document.querySelector(".main");
export const [categories, ...cardsItems] = cards;
const categoriesAvatarIndex = 6;

const renderCategoriesBlock = () => {
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

const category = document.querySelectorAll(".category");
const categoryTop = document.querySelectorAll(".category__top");

export const changeColorCategory = (buttonValue: boolean) => {
  categoryTop.forEach(el => {
    if (!buttonValue) {
      el.classList.add("category-top--gameMod");
    } else {
      el.classList.remove("category-top--gameMod");
    }
  });
};

const getAttributeFromCategoryCard = (e: Event) => {
  const attributeFromCategoryCard = +(e.currentTarget as HTMLButtonElement).getAttribute("dataValue");
  main.innerHTML = "";
  renderTrainModeCarts(attributeFromCategoryCard);
  startRotate();
};

for (let i = 0; i < category.length; i += 1) {
  category[i].addEventListener("click", getAttributeFromCategoryCard);
}
