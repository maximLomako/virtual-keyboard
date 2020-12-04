import {cardsItems, main} from "./category";
import {startRotate} from "./rotateCard";
import {makeActiveLinks} from "./burger";
const category = document.querySelectorAll(".category");

type cardItemsItem = {
  word: string
  translation: string
  image: string
  audioSrc: string
}

const renderGameModeCards = (categoryNum: number) => {
  main.insertAdjacentHTML("beforeend", "<div class=\"game__cards\"><div>");
  const gameCards = document.querySelector(".game__cards");
  gameCards.innerHTML = "";
  cardsItems.map((c: string, i: number) => gameCards.insertAdjacentHTML("beforeend",
    `<div class="category card">
            <div class="card__img game__card-img">
              <img src="../src/assets/${cardsItems[categoryNum][i].image}" alt="card-img-item" class="card__img-item game__card-img-item">
            </div>
          </div>`));
  main.insertAdjacentHTML("afterbegin", "<div class=\"game__status\"></div>");
  gameCards.insertAdjacentHTML("afterend", "<button class='btn'>New Game</button>");

  const btn = document.querySelector(".btn");
  const changeButtonStyle = () => {
    if (btn.textContent === "New Game") {
      btn.innerHTML = "<img src='../src/assets/images/repeat.png' alt='repeat-btn'/>";
    }
  };
};

export const startGameMode = (e: Event) => {
  const attributeFromCategoryCard = +(e.currentTarget as HTMLButtonElement).getAttribute("dataValue");
  main.innerHTML = "";
  renderGameModeCards(attributeFromCategoryCard);
};


