import {cardsItems, main} from "./category";
import {startRotate} from "./rotateCard";

export const renderTrainModeCarts = (categoryNum: number) => {
  cardsItems.map((c: string, i: number) => main.insertAdjacentHTML("beforeend",
    `           <div class="category card ">
            <div class="card__front ">
              <div class="card__img">
                <img src=../src/assets/${cardsItems[categoryNum][i].image} alt="card-img-item" class="card__img-item">
              </div>
              <div class="card__info">
                <div class="card__description">${cardsItems[categoryNum][i].word}</div>
                <div class="card__change-btn">
                  <img src="../src/assets/images/icon-change.png" alt="icon change" class="card__change-btn__icon">
                </div>
              </div>
            </div>
            <div class="card__back card__hidden">
              <div class="card__img">
                <img src=../src/assets/${cardsItems[categoryNum][i].image} alt="card-img-item" class="card__img-item">
              </div>
              <div class="card__info">
                <div class="card__description">${cardsItems[categoryNum][i].translation}</div>
              </div>
            </div>
          </div>`));
};

const playSound = (e: Event, categoryNum: number, i: number) => {
  const target = e.target;
  if (!(<Element>target).classList.contains("card__change-btn__icon")) {
    const audio = new Audio(`../src/assets/${cardsItems[categoryNum][i].audioSrc}`);
    audio.play();
  }
};

export const addVoiceOfWord = (categoryNum: number) => {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].addEventListener("click", (e) => {
      playSound(e, categoryNum, i);
    });
  }
};

export const startTrainMode = (e: Event) => {
  const attributeFromCategoryCard = +(e.currentTarget as HTMLButtonElement).getAttribute("dataValue");
  main.innerHTML = "";
  renderTrainModeCarts(attributeFromCategoryCard);
  startRotate();
  addVoiceOfWord(attributeFromCategoryCard);
};
