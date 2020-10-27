const navElement =
  document.querySelectorAll('.nav__element');

for (let i = 0; i<=1; i++) {
  navElement[i].addEventListener('mouseover', () => {
    navElement[0].classList.remove('nav__element--active');
    navElement[i].classList.add('nav__element--active');
  })
}

for (let i = 0; i<=1; i++) {
  navElement[i].addEventListener('mouseout', () => {
    navElement[i].classList.remove('nav__element--active');
  })
}

const headerBurgerBtn = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuActive = document.querySelector('.burger-menu');
const headerBurger = document.querySelector('.header-burger--inside');
const headerLogo = document.querySelector('.header__logo');
const body = document.querySelector('body');
const html = document.querySelector('html');
const burgerNavElement = document.querySelectorAll('.burger-nav__element');


for (let i = 0; i<=1; i++) {
  burgerNavElement[i].addEventListener('mouseover', () => {
    burgerNavElement[0].classList.remove('burger-nav__element--active');
    burgerNavElement[i].classList.add('burger-nav__element--active');

  })
}

for (let i = 0; i<=1; i++) {
  burgerNavElement[i].addEventListener('mouseout', () => {
    burgerNavElement[i].classList.remove('burger-nav__element--active');
  })
}

document.addEventListener('click', (e) => {
  if ((e.target) === burgerNavElement[0]) {
    closeBurger();
  }
})

headerBurgerBtn.addEventListener('click', (e) => {
  burgerMenu.classList.add('burger-menu--active');
  body.style.overflowY='hidden';
  html.style.overflowY='hidden';
  headerLogo.style.animation = `logoFade 0.5s ease forwards 0.1s`
  headerBurgerBtn.style.animation = `rotateButton 0.5s ease forwards 0.1s`
  headerBurger.style.animation = `rotateForwardButton 0.5s ease forwards 0.1s`
})

headerBurger.addEventListener('click', (e) => {
  closeBurger();
})

document.addEventListener('click', (e) => {
  const target = e.target;
  if (target === burgerMenu) {
    closeBurger();
  }
})

function closeBurger() {
  burgerMenu.classList.remove('burger-menu--active')
  body.style.overflowY='auto';
  html.style.overflowY='auto';
  headerLogo.style.animation = `logoVisible 0.5s ease forwards 0.5s`
  headerBurgerBtn.style.animation = `rotateForwardButton 0.5s ease forwards 0.1s`
  headerBurger.style.animation = `rotateButtonInside 0.3s ease forwards 0.1s`
}