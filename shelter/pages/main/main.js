const navElement =
  document.querySelectorAll('.nav__element');

navElement.forEach(element => {
  element.addEventListener('mouseover', () => {
    navElement[0].classList.remove('nav__element--active');
    element.classList.add('nav__element--active');
  })
});


navElement.forEach(element => {
  element.addEventListener('mouseout', () => {
    element.classList.remove('nav__element--active');
  })
})