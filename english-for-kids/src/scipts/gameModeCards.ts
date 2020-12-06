import {cardsItemsData, main} from "./state";

export const renderGameModeCards = (categoryNum: number) => {
  main.innerHTML = "";
  main.insertAdjacentHTML("beforeend", "<div class=\"game__cards\"><div>");
  const gameCards = document.querySelector(".game__cards");
  gameCards.innerHTML = "";
  cardsItemsData.map((c: string, i: number) => gameCards.insertAdjacentHTML("beforeend",
    `<div class="category__item card">
            <div class="card__img game__card-img">
              <img src="../src/assets/${cardsItemsData[categoryNum][i].image}" 
              alt="card-img-item" 
              class="card__img-item game__card-img-item">
            </div>
          </div>`));
  main.insertAdjacentHTML("afterbegin", "<div class=\"game__status\"></div>");
  gameCards.insertAdjacentHTML("afterend", "<button class='btn'>New Game</button>");
};