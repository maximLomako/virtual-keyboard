const key = document.querySelector('.key');
const shift = document.querySelector('.shift');
const capsLock = document.querySelector('.capsLock');
const backspace = document.querySelector('.backspace');
const enter = document.querySelector('.enter');
const keySound = document.getElementById('key-sound');


key.addEventListener('click', () => {
  keySound.play();
})