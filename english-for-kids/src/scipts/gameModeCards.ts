import { CardItemsDataType, cardsItemsData, main } from "./state";
import cards from "./cards";
import { renderCategoriesBlock } from "./category";

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

  const btn = document.querySelector(".btn");
  const gameStatus = document.querySelector(".game__status");
  const cardsForGameMode = [...cards];
  cardsForGameMode.shift();
  let dataForGameMode = cardsForGameMode[categoryNum].filter((d: CardItemsDataType) => ({ ...d }));
  dataForGameMode = dataForGameMode.sort(() => Math.random() - 0.5);
  let mistakeCounter = 0;
  let newGameButtonStatus = false;
  const gameStatusMaxValueChild = 18;

  const playSoundFunc = (soundName: string) => {
    const audio = new Audio(`../src/assets/audio/${soundName}`);
    audio.play();
  };

  const deleteFirstItemFromArray = () => {
    dataForGameMode.shift();
  };

  const addStarAnswer = (imgName: string) => {
    if (gameStatus.childElementCount === gameStatusMaxValueChild) {
      gameStatus.removeChild(gameStatus.childNodes[0]);
    }
    gameStatus.insertAdjacentHTML("beforeend",
      `<img src=../src/assets/images/${imgName} class=game__status-item>`);
  };

  const rerenderBtn = () => {
    btn.innerHTML = "<img src='../src/assets/images/repeat.svg'/>";
  };

  const countMistake = () => {
    mistakeCounter += 1;
  };

  const finishedGame = () => {
    if (mistakeCounter === 0) {
      playSoundFunc("success.mp3");
      main.innerHTML = "<img src='../src/assets/images/wiseOwl.png' class='wiseOwl'>";
      mistakeCounter = 0;
      setTimeout(() => {
        renderCategoriesBlock();
      }, 2000);
    }
    if (mistakeCounter > 0) {
      playSoundFunc("failure.mp3");
      main.innerHTML = `<img src='../src/assets/images/sadOwl.png' class='wiseOwl'>
        <h2 class="category__description">You ended the game with ${mistakeCounter} mistakes</h2>`;
      mistakeCounter = 0;
      setTimeout(() => {
        renderCategoriesBlock();
      }, 3000);
    }
    newGameButtonStatus = false;
  };

  const voiceTheWord = () => {
    if (dataForGameMode.length === 0) {
      finishedGame();
      return;
    }
    const audio = new Audio(`../src/assets/${dataForGameMode[0].audioSrc}`);
    audio.play();
  };

  const startGameInGameMOde = (e: Event) => {
    const target = e.target;
    let imgSrc = "";
    if ((<Element>target).classList.contains("game__card-img-item")) {
      imgSrc = (<Element>target).getAttribute("src").replace("../src/assets/", "");
      if (imgSrc !== dataForGameMode[0].image) {
        playSoundFunc("error.mp3");
        addStarAnswer("starLoose.svg");
        countMistake();
      }
      if (imgSrc === dataForGameMode[0].image) {
        playSoundFunc("correct.mp3");
        deleteFirstItemFromArray();
        setTimeout(() => {
          voiceTheWord();
        }, 1000);
        // @ts-ignore
        (<Element>target).parentNode.parentNode.classList.add("disabled-card");
        addStarAnswer("starSuccess.svg");
      }
    }
  };

  const protection = (e: Event) => {
    const target = e.target;
    if (!(<Element>target).classList.contains("header")) {
      newGameButtonStatus = false;
    }
  };

  const buttonClickHandler = () => {
    voiceTheWord();
    rerenderBtn();
    newGameButtonStatus = true;
  };

  const checkGameStatus = (e: Event) => {
    if (newGameButtonStatus) {
      startGameInGameMOde(e);
    }
  };

  btn.addEventListener("click", buttonClickHandler);
  main.addEventListener("click", checkGameStatus);
  const header = document.querySelector("header");
  header.addEventListener("click", protection);
};
