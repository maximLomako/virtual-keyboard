import {CardItemsDataType, cardsItemsData, main} from "./state";
import cards from "./cards";
import {renderCategoriesBlock} from "./category";

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
  let dataForGameMode = cardsForGameMode[categoryNum].filter((d: CardItemsDataType) => ({...d}));
  dataForGameMode = dataForGameMode.sort(() => Math.random() - 0.5);
  let mistakeCounter = 0;
  let newGameButtonStatus = false;


  const voiceMistake = () => {
    const audio = new Audio("../src/assets/audio/error.mp3");
    audio.play();
  };

  const voiceRight = () => {
    const audio = new Audio("../src/assets/audio/correct.mp3");
    audio.play();
  };

  const deleteFirstItemFromArray = () => {
    dataForGameMode.shift();
  };

  const addStarCorrectAnswer = () => {
    if (gameStatus.childElementCount === 18) {
      gameStatus.removeChild(gameStatus.childNodes[0]);
    }
    gameStatus.insertAdjacentHTML("beforeend", "<img src='../src/assets/images/starSuccess.svg' class='game__status-item'>");
  };

  const addStarWrongAnswer = () => {
    if (gameStatus.childElementCount === 18) {
      gameStatus.removeChild(gameStatus.childNodes[0]);
    }
    gameStatus.insertAdjacentHTML("beforeend", "<img src='../src/assets/images/starLoose.svg' class='game__status-item'>");
  };

  const rerenderBtn = () => {
    btn.innerHTML = "<img src='../src/assets/images/repeat.svg'/>";
  };

  const countMistake = () => {
    mistakeCounter += 1;
  };

  const congratSound = () => {
    const audio = new Audio("../src/assets/audio/success.mp3");
    audio.play();
  };

  const failureSound = () => {
    const audio = new Audio("../src/assets/audio/failure.mp3");
    audio.play();
  };

  const finishedGame = () => {
    if (mistakeCounter === 0) {
      congratSound();
      main.innerHTML = "<img src='../src/assets/images/wiseOwl.png' class='wiseOwl'>";
      mistakeCounter = 0;
      setTimeout(() => {
        renderCategoriesBlock();
      }, 2000);
    }
    if (mistakeCounter > 0) {
      failureSound();
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
        voiceMistake();
        addStarWrongAnswer();
        countMistake();
      }
      if (imgSrc === dataForGameMode[0].image) {
        voiceRight();
        deleteFirstItemFromArray();
        setTimeout(() => {
          voiceTheWord();
        }, 1000);
        // @ts-ignore
        (<Element>target).parentNode.parentNode.classList.add("disabled-card");
        addStarCorrectAnswer();
      }
    }
  };
  btn.addEventListener("click", () => {
    voiceTheWord();
    rerenderBtn();
    newGameButtonStatus = true;
  });
  main.addEventListener("click", (e) => {
    if (newGameButtonStatus) {
      startGameInGameMOde(e);
    }
  });
  const header = document.querySelector("header");
  header.addEventListener("click", (e) => {
    const target = e.target;
    if (!(<Element>target).classList.contains("header")) {
      newGameButtonStatus = false;
    }
  });
};

