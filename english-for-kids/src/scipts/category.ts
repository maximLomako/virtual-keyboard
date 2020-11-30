import cards from "./cards";

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

export const category = document.querySelectorAll(".category");
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
