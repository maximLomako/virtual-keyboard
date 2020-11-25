const toggleButton = document.querySelector(".toggleButton");
const btnTrain = document.querySelector(".btn__train");
const btnGame = document.querySelector(".btn__game");

const buttonValue = true;

const changeButtonStyle = () => {
  if (buttonValue) {
    btnTrain.classList.add("active");
    btnGame.classList.remove("active");
  } else {
    btnTrain.classList.remove("active");
    btnGame.classList.add("active");
  }
};



btnTrain.addEventListener("click", changeButtonStyle);
