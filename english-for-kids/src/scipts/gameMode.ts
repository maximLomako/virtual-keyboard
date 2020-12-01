import {cardsItems, main} from "./category";

type cardItemsItem = {
  word: string
  translation: string
  image: string
  audioSrc: string
}

export const renderGameModeCards = (categoryNum: number) => {
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

  const addStarToTheScreen = (image: string) => {
    const gameStatus = document.querySelector(".game__status");
    gameStatus.insertAdjacentHTML("beforeend",
      `<img src=/src/assets/images/${image} alt=star-win class=game__status-item />`);
  };
  addStarToTheScreen("starSuccess.svg");
  addStarToTheScreen("starLoose.svg");

  // start game
  const voiceTheWord = (soundName: string) => {
    const audio = new Audio(`../src/assets/${soundName[0]}`);
    audio.play();
  };

  const startGame = () => {
    const arrayOfSounds = cardsItems[categoryNum].map((s: cardItemsItem) => s.audioSrc)
      .sort(() => Math.random() - 0.5);
    changeButtonStyle();
  };

  btn.addEventListener("click", () => {
    console.log("her");
  });
};



