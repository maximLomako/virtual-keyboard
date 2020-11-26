const categoryTop = document.querySelectorAll(".category__top");

export const changeColorCategory = (buttonValue: boolean) => {
  categoryTop.forEach(el => {
    if (!buttonValue) {
      el.classList.add("category-top--gameMod");
    } else {
      el.classList.remove("category-top--gameMod");
    }
  });
};

