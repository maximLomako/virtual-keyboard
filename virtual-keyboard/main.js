const keyLayoutEng = [
  "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
  "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
  "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "enter",
  "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
  "showKeyboard", "voice", "en", "space", "arrowLeft", "arrowRight"
];

const keyLayoutRus = [
  "˜", "!", "@", "#", "$", "%", "ˆ", "&", "*", "(", ")", "_", "+","backspace",
  "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
  "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "enter",
  "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".",
  "showKeyboard", "voice", "ru", "space", "arrowLeft", "arrowRight"
]

const body = document.querySelector('body'),
  textarea = document.querySelector('textarea');
 let capsLock = false,
  shift = false,
  lang = false;

const initKeyBoard = () => {

  const keyboard = document.createElement('div'),
    keys = document.createElement('div');

  keyboard.classList.add('keyboard');
  keys.classList.add('keys');

  body.insertAdjacentElement('afterbegin', keyboard);
  keyboard.appendChild(keys);

  keys.insertAdjacentHTML('afterbegin', keyLayoutEng.map((key, i) => `
      <div class="key" dataValue=${key.toLowerCase()}>
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

  document.addEventListener('click', (e) => {
    if (e.target === body) {
      keyboard.classList.toggle('keyboard--active');
    }
  })
}
openCloseKeyboard();

const inputItemFromKeyboard = () => {

  const capsBtn = document.querySelectorAll(("[dataValue='caps']"))[0];
  const shiftBtn = document.querySelectorAll(("[dataValue='shift']"))[0];

  capsBtn.addEventListener('click', () => {
    capsLock = !capsLock;
    capsBtn.classList.toggle('key--activeAlways');
  })

  shiftBtn.addEventListener('click', () => {
    shift = !shift;
    shiftBtn.classList.toggle('key--activeAlways');
  })

  const key = document.querySelectorAll(".key");
  key.forEach(element => element.addEventListener('mouseover', (e) => {
    const target = e.currentTarget;
    if (target === element) {
      element.classList.add('key--active')
    }
  }))

  key.forEach(element => element.addEventListener('mouseout', (e) => {
    const target = e.currentTarget;
    if (target === element) {
      element.classList.remove('key--active')
    }
  }))

  key.forEach((element,i) => element.addEventListener('click', (e) => {
    const target = e.currentTarget;
    if (target === element) {
      switch (element.getAttribute('dataValue').toLowerCase()) {
        case "backspace":
          textarea.value = textarea.value.slice(0, -1)
          break;
        case "enter":
          textarea.value += "\n"
          break;
        case "caps":
          textarea.value += '';
          break;
        case "tab":
          textarea.value += '';
          break;
        case "shift":
          textarea.value += ""
          break;
        case "space":
          textarea.value += " "
          break;
        case "voice":
          textarea.value += ""
          break;
        case "ru":
          textarea.value += ""
          break;
        case "en":
        textarea.value += ""
        break;
        case "arrowleft":
          textarea.value += ""
          break;
        case "arrowright":
          textarea.value += ""
          break;
        case "showkeyboard":
          textarea.value += ""
          break;
        default:
          if (capsLock && shift) {
            switchShiftKey(keyItemValue);
            textarea.value += element.getAttribute('dataValue').toLowerCase();
             
          }
          if (!capsLock && shift) {
            switchShiftKey(keyItemValue);
            textarea.value += element.getAttribute('dataValue').toUpperCase();
          }
          if (capsLock && !shift) {
            switchShiftKey(keyMainItemValue);
            textarea.value += element.getAttribute('dataValue').toUpperCase();
          }
          if (!capsLock && !shift) {
            switchShiftKey(keyMainItemValue);
            textarea.value += element.getAttribute('dataValue').toLowerCase();
          }
          break;
      }
    }
  }))

}
inputItemFromKeyboard();


const keyValue = document.querySelectorAll('.key');
const keyMainItemValue = document.querySelectorAll('.key__main-item');
let keyItemValue = document.querySelectorAll('.key__item');
const reg = /([А-Я, A-Z])/i;

const switchShiftKey = (fakeArr) => {
 keyValue.forEach((element, i) => {
   if (!reg.test(keyItemValue[i].getAttribute('datavalue'))) {
     element.setAttribute('dataValue', fakeArr[i].getAttribute('datavalue'));
   }
 })
}

const changeLang = () => {

  const langBtn = !lang ? document.querySelectorAll(("[dataValue='en']"))[0] : document.querySelectorAll(("[dataValue='ru']"))[0];
  let langValue = document.querySelectorAll(("[dataValue='en']"))[1];
  let langValueSpan = document.querySelector(("[dataValue='ru']"));
  console.log(langValueSpan)
  langBtn.addEventListener('click', (e) => {

    if (e.currentTarget === langBtn) {
      langBtn.classList.toggle('key--activeAlways');
      lang = !lang;
      console.log(lang);

      keyValue.forEach((element, i) => {
        if (reg.test(keyItemValue[i].getAttribute('datavalue'))) {
          lang ? element.setAttribute('dataValue', keyItemValue[i].getAttribute('datavalue')) : element.setAttribute('dataValue', keyMainItemValue[i].getAttribute('datavalue'));
          lang ? langValue.textContent = 'ru' : langValue.textContent = 'en';
          lang ? langValueSpan.textContent = 'en' : langValueSpan.textContent = 'ru';
        }
      })
    }
  })
}
changeLang();


// const keyValue = document.querySelectorAll('.key');
// const keyMainItemValue = document.querySelectorAll('.key__main-item');
// let keyItemValue = document.querySelectorAll('.key__item');
// const reg = /([А-Я, A-Z])/i;