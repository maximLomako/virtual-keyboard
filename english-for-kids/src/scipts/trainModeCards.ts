import {cardsItemsData, main} from "./state";
import {startRotate} from "./rotateCards";

export const renderTrainModeCartsBlock = (categoryNum: number) => {
  main.innerHTML = "";
  cardsItemsData.map((c: string, i: number) => main.insertAdjacentHTML("beforeend",
    `           <div class="category__item card ">
            <div class="card__front ">
              <div class="card__img">
                <img src=../src/assets/${cardsItemsData[categoryNum][i].image} alt="card-img-item" class="card__img-item">
              </div>
              <div class="card__info">
                <div class="card__description">${cardsItemsData[categoryNum][i].word}</div>
                <div class="card__change-btn">
                  <img src="../src/assets/images/icon-change.png" alt="icon change" class="card__change-btn__icon">
                </div>
              </div>
            </div>
            <div class="card__back card__hidden">
              <div class="card__img">
                <img src=../src/assets/${cardsItemsData[categoryNum][i].image} alt="card-img-item" class="card__img-item">
              </div>
              <div class="card__info">
                <div class="card__description">${cardsItemsData[categoryNum][i].translation}</div>
              </div>
            </div>
          </div>`));

  const playSound = (e: Event, i: number) => {
    const target = e.target;
    if (!(<Element>target).classList.contains("card__change-btn__icon") && (<Element>target).closest(".card__front")) {
      const audio = new Audio(`../src/assets/${cardsItemsData[categoryNum][i].audioSrc}`);
      audio.play();
    }
  };

  const addVoiceOfWord = () => {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i += 1) {
      cards[i].addEventListener("click", (e) => {
        playSound(e, i);
      });
    }
  };

  addVoiceOfWord();
  startRotate();
};

