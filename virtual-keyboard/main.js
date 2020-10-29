const keyLayoutEng = [
  "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
  "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
  "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "enter",
  "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
  "showKeyboard", "voice", "lang", "space", "arrrowLeft", "arrowRight"
];

const keyLayoutRus = [
  "]", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
  "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
  "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "enter",
  "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".",
  "showKeyboard", "voice", "lang", "space", "arrrowLeft", "arrowRight"
]

const keyLayoutShifted = [
  "˜", "!", "@", "#", "$", "%", "6", "&", "*", "(", ")", "_", "+", "backspace",
  "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
  "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "enter",
  "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".",
  "showKeyboard", "voice", "lang", "space", "arrrowLeft", "arrowRight"
]

const body = document.querySelector('body');

const initKeyBoard = () => {

  const keyboard = document.createElement('div'),
    keys = document.createElement('div');

  keyboard.classList.add('keyboard');
  keys.classList.add('keys');

  body.insertAdjacentElement('afterbegin', keyboard);
  keyboard.appendChild(keys);

  keys.insertAdjacentHTML('afterbegin', keyLayoutEng.map((key, i) => `
      <div class="key">
        <span class="key__item" dataValue=${keyLayoutRus[i]}>${keyLayoutRus[i]}</span>
        <strong class="key__main-item" dataValue=${key}>${key}</strong> 
      </div>
  `).join(''));

  const key = document.querySelectorAll('.key'),
    keyMainItem = document.querySelectorAll('.key__main-item'),
    keyItem = document.querySelectorAll('.key__item');


  keyMainItem.forEach((element, index) => {
    if (element.textContent.toLocaleLowerCase().trim() === keyItem[index].textContent.toLocaleLowerCase().trim()) {
      keyItem[index].textContent = '';
    }
  })

  key.forEach(element => {
    switch (element.children[1].textContent.toLocaleLowerCase().trim()) {
      case "backspace":
        element.classList.add('key--medium__width')
        break;
      case "enter":
        element.classList.add('key--medium__width')
        break;
      case "caps":
        element.classList.add('key--medium__width')
        break;
      case "tab":
        element.classList.add('key--medium__width')
      case "done":
        element.classList.add('key--medium__width')
        break;
      case "shift":
        element.classList.add('key--medium__width')
        break;
      case "space":
        element.classList.add('key--high__width')
        break;
    }
  })
}
initKeyBoard();

const openCloseKeyboard = () => {
  const btn = document.querySelectorAll("[dataValue='showKeyboard']");
  const keyboard = document.querySelector('.keyboard');
  btn[1].addEventListener('click', () => {
    keyboard.classList.toggle('keyboard--active');
  })
}
openCloseKeyboard();

document.addEventListener('click', (e)=> {
  const keyboard = document.querySelector('.keyboard');
  if (e.target === body) {
    keyboard.classList.toggle('keyboard--active');
  }
})