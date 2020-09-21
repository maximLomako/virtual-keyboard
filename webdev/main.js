const headerNavElement =
  document.querySelectorAll('.header-nav__link');
console.log(headerNavElement);

headerNavElement.forEach(element => {
  element.addEventListener('mouseover', () => {
    headerNavElement[0].classList.remove('header-nav__link--active');
    element.classList.add('header-nav__link--active');
  })
});


headerNavElement.forEach(element => {
  element.addEventListener('mouseout', () => {
    element.classList.remove('header-nav__link--active');
  })
})