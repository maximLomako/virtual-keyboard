import {
  burgerCardItems,
  burgerCategories, buttonValue,
  categoriesAvatarIndex, categoryValue,
  firstArrayItemIndex, getCategoryValue
} from "./state";
import {renderCategoriesBlock} from "./category";
import {renderTrainModeCartsBlock} from "./trainModeCards";
import {renderGameModeCards} from "./gameModeCards";

const burgerMenuNav = document.querySelector(".burger-menu_nav");
export let attributeFromBurgerItem: null | number = null;

const renderBurgerMenu = () => {
  burgerCategories.map((t: string, i: number) => burgerMenuNav.insertAdjacentHTML("beforeend",
    `<a href="#section-1" class="burger-menu_link" dataValue=${i - 1}>
              <img src="../src/assets/${burgerCardItems[i][categoriesAvatarIndex].image}" alt="bird" class="burger-menu_nav-icon">
              <li class="burger-menu_nav-title">${t.toUpperCase()}</li>
            </a>`));
};
renderBurgerMenu();

const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuLink = document.querySelectorAll(".burger-menu_link");

const toggleModal = (e: Event) => {
  e.preventDefault();
  const target = e.target;
  if ((<Element>target).closest(".burger-menu_link")
    || (<Element>target).closest(".burger-menu_button")
    || (<Element>target).classList.contains("burger-menu_overlay")) {
    burgerMenu.classList.toggle("burger-menu_active");
  }
  if (burgerMenu.classList.contains("burger-menu_active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};

const makeActiveFirstLink = () => {
  burgerMenuLink[firstArrayItemIndex].classList.add("burger-menu_link_active");
};
export const makeActiveLinks = (i: number) => {
  for (let j = 0; j < burgerCategories.length; j += 1) {
    burgerMenuLink[j].classList.remove("burger-menu_link_active");
  }
  burgerMenuLink[i].classList.add("burger-menu_link_active");
};
makeActiveFirstLink();

export const chooseCategory = (i: number, e: Event) => {
  const target = e.target;
  if ((<Element>target).closest(".burger-menu_link")
    && !(<Element>target).closest(".burger-menu_button")) {
    if (i === 0) {
      renderCategoriesBlock();
    }
    if (i > 0 && i < 9) {
      if (buttonValue) {
        renderTrainModeCartsBlock(categoryValue);
      } else {
        renderGameModeCards(categoryValue);
      }
    }
    if (i === 9) {
      alert("Statistics");
    }
    makeActiveLinks(i);
  }
};

const getAttributeFromBurgerCard = (e: Event) => {
  const target = e.target;
  if ((<Element>target).closest(".burger-menu_link")
    && !(<Element>target).closest(".burger-menu_button")) {
    attributeFromBurgerItem = +(<Element>target).closest(".burger-menu_link").getAttribute("dataValue");
    getCategoryValue(attributeFromBurgerItem);
  }
};

burgerMenu.addEventListener("click", getAttributeFromBurgerCard);
burgerMenu.addEventListener("click", (e) => {
  chooseCategory(categoryValue + 1, e);
});

burgerMenu.addEventListener("click", toggleModal);
