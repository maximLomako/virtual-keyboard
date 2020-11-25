const burgerMenu = document.querySelector(".burger-menu");

const toggleModal = () => {
  burgerMenu.classList.toggle("burger-menu_active");
  if (burgerMenu.classList.contains("burger-menu_active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};

burgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal();
});
