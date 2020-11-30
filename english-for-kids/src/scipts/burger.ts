import {cardsItems, categories, categoriesAvatarIndex, renderCategoriesBlock} from "./category";
import {startTrainMode} from "./trainMode";

const burgerMenuNav = document.querySelector(".burger-menu_nav");
const burgerCategories = [...categories];
const firstArrayItem = 0;
const arrayLength = 7;

burgerCategories.unshift("Main Page");
burgerCategories.push("Statistics");

const burgerCardItems = [...cardsItems];
burgerCardItems.unshift([Array(arrayLength)]);
burgerCardItems[firstArrayItem][categoriesAvatarIndex] = {
  image: "images/house.png"
};

burgerCardItems.push([Array(arrayLength)]);
const lastArrayItem = burgerCardItems.length - 1;
burgerCardItems[lastArrayItem][categoriesAvatarIndex] = {
  image: "images/stat.png"
};


const createBurgerMenu = () => {
  burgerCategories.map((t:string, i:number) => burgerMenuNav.insertAdjacentHTML("beforeend",
    `<a href="#section-1" class="burger-menu_link" dataValue=${i - 1}>
              <img src="../src/assets/${burgerCardItems[i][categoriesAvatarIndex].image}" alt="bird" class="burger-menu_nav-icon">
              <li class="burger-menu_nav-title">${t.toUpperCase()}</li>
            </a>`));
};
const burgerMenu = document.querySelector(".burger-menu");
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
createBurgerMenu();

const burgerMenuLink = document.querySelectorAll(".burger-menu_link");
const makeActiveFirstLink = () => {
  burgerMenuLink[firstArrayItem].classList.add("burger-menu_link_active");
};
export const makeActiveLinks = (i: number) => {
  for (let j = 0; j < burgerCategories.length; j += 1) {
    burgerMenuLink[j].classList.remove("burger-menu_link_active");
  }
  burgerMenuLink[i].classList.add("burger-menu_link_active");
};
makeActiveFirstLink();

export const chooseCategory = (e: Event, i: number) => {
  if (i === 0) {
    window.location.reload();
  }
  if (i > 0 && i < 9) {
    startTrainMode(e);
  }
  if (i === 9) {
    alert("Statistics");
  }
  makeActiveLinks(i);
};

for (let i = 0; i < burgerCategories.length; i += 1) {
  burgerMenuLink[i].addEventListener("click", (e) => {
    chooseCategory(e, i);
  });
}

burgerMenu.addEventListener("click", toggleModal);
