import {cardsItems, main} from "./category";

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

