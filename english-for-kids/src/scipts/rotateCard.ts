export const startRotate = () => {
  const card = document.querySelectorAll(".card");
  const cardFront = document.querySelectorAll(".card__front");
  const cardBack = document.querySelectorAll(".card__back");
  const cardChangeBtnIcon = document.querySelectorAll(".card__change-btn__icon");

  for (let i = 0; i < card.length; i += 1) {
    const rotateCard = () => {
      card[i].classList.toggle("card__rotated");
      cardFront[i].classList.toggle("card__hidden");
      cardBack[i].classList.toggle("card__hidden");
    };

    const rotateCardBack = (e: Event) => {
      const target = e.currentTarget;
      if (card[i].classList.contains("card__rotated") && (<Element>target).classList.contains("card")) {
        rotateCard();
      }
    };

    cardChangeBtnIcon[i].addEventListener("click", rotateCard);
    card[i].addEventListener("mouseleave", rotateCardBack);
  }
};
