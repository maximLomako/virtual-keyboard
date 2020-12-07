import {CardItemsDataType, cardsItemsData, main} from "./state";
import cards from "./cards";

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

  type arraySoundsType = {
    image: string
    audioSrc: string
  }

  const btn = document.querySelector(".btn");
  const gameStatus = document.querySelector(".game__status");
  const cardsForGameMode = [...cards];
  cardsForGameMode.shift();
  let dataForGameMode = cardsForGameMode[categoryNum].filter((d: CardItemsDataType) => ({...d}));
  dataForGameMode = dataForGameMode.sort(() => Math.random() - 0.5);
  console.log(dataForGameMode);

  const voiceTheWord = () => {
    const audio = new Audio(`../src/assets/${dataForGameMode[categoryNum].audioSrc}`);
    audio.play();
  };

  const voiceMistake = () => {
    const audio = new Audio("../src/assets/audio/error.mp3");
    audio.play();
    console.log("mistake");
  };

  const voiceRight = () => {
    const audio = new Audio("../src/assets/audio/correct.mp3");
    audio.play();
    console.log("rigth");
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

  }

  const rerenderBtn = () => {
    btn.innerHTML = "<img src='../src/assets/images/repeat.svg'/>";
  };

  btn.addEventListener("click", () => {
    console.log("hello");
    voiceTheWord();
    rerenderBtn();
  });

  main.addEventListener("click", (e) => {
    const target = e.target;
    let imgSrc = "";
    if ((<Element>target).classList.contains("game__card-img-item")) {
      imgSrc = (<Element>target).getAttribute("src").replace("../src/assets/", "");
      if (imgSrc !== dataForGameMode[categoryNum].image) {
        voiceMistake();
        addStarWrongAnswer();
      }
      if (imgSrc === dataForGameMode[categoryNum].image) {
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
  });
};
renderGameModeCards(0);
