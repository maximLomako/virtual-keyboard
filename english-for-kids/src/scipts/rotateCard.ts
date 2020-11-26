const card = document.querySelector(".card");
const cardFront = document.querySelector(".card__front");
const cardBack = document.querySelector(".card__back");
const cardChangeBtnIcon = document.querySelector(".card__change-btn__icon");
const trainCards = document.querySelector(".train__cards");

const rotateCard = () => {
  card.classList.toggle("card__rotated");
  cardFront.classList.toggle("card__hidden");
  cardBack.classList.toggle("card__hidden");
};

const rotateCardBack = (e: Event) => {
  const target = e.currentTarget;
  if (card.classList.contains("card__rotated") && (<Element>target).classList.contains("card")) {
    rotateCard();
  }
};

cardChangeBtnIcon.addEventListener("click", rotateCard);
card.addEventListener("mouseleave", rotateCardBack);


