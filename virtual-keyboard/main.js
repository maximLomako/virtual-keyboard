const keyLayoutEng = [
  "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
  "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
  "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "enter",
  "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
  "showKeyboard", "voice", "en", "space", "arrowLeft", "arrowRight"
];

const keyLayoutRus = [
  "˜", "!", "@", "#", "$", "%", "ˆ", "&", "*", "(", ")", "_", "+", "backspace",
  "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
  "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "enter",
  "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".",
  "showKeyboard", "voice", "ru", "space", "arrowLeft", "arrowRight"
]

const keyCode = [
  "IntlBackslash", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
  "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash",
  "ShiftRight", "ControlLeft", "AltLeft", "Space", "ArrowLeft", "ArrowRight"
]

const iphoneSound = document.getElementById('iphoneSound'),
  caps = document.getElementById('caps'),
  enter = document.getElementById('enter'),
  backspace = document.getElementById('backspace'),
  langSound = document.getElementById('switchLang');


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

  key.forEach((element, i) => element.addEventListener('click', (e) => {
    const target = e.currentTarget;
    if (target === element) {
      switch (element.getAttribute('dataValue').toLowerCase()) {
        case "backspace":
          textarea.value = textarea.value.slice(0, -1)
          backspace.play();
          break;
        case "enter":
          textarea.value += "\n"
          enter.play();
          break;
        case "caps":
          textarea.value += '';
          caps.play();
          break;
        case "tab":
          textarea.value += '';
          iphoneSound.play();
          break;
        case "shift":
          textarea.value += ""
          langSound.play();
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
          !lang ? iphoneSound.play() : langSound.play();
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
  langBtn.addEventListener('click', (e) => {

    if (e.currentTarget === langBtn) {
      langBtn.classList.toggle('key--activeAlways');
      lang = !lang;
      console.log(lang);
      checkLanguage();

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





const arrowLeft = document.querySelectorAll(("[dataValue='arrowleft']"))[0];
const arrowRight = document.querySelectorAll(("[dataValue='arrowright']"))[0];
let pos = 0;
document.getElementById('use-keyboard-input').addEventListener('keydown', e => {
  pos = e.target.selectionStart;
})
document.body.addEventListener('click', e => {
  pos = e.target.selectionStart;
  if (e.target = textarea) {
    pos = +textarea.selectionStart;
  }
})

function setCaretPosition(elemId, caretPos = textarea.value.length) {
  let elem = document.getElementById(elemId);
  if (elem != null) {
    if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.move('character', caretPos);
      range.select();
    } else {
      if ((elem.selectionStart || elem.selectionStart === 0)) {
        elem.focus();
        elem.setSelectionRange(caretPos, caretPos);
      } else
        elem.focus();
    }
  }
}

arrowLeft.addEventListener('click', () => {
  if (pos <= 0) {
    pos = 0
  } else {
    pos = pos - 1;
  }
  setCaretPosition('use-keyboard-input', pos);
})

arrowRight.addEventListener('click', () => {
  if (pos >= textarea.value.length) {
    pos = textarea.value.length
  } else {
    pos = pos + 1;
  }
  setCaretPosition('use-keyboard-input', pos);
})

window.addEventListener('keydown', (e) => {
  const capsBtn = document.querySelectorAll("[dataValue='caps']")[0];
  const shiftBtn = document.querySelectorAll("[dataValue='shift']")[0];
  if (e.code === 'Tab') {
    e.preventDefault();
  }
  if (e.code === 'CapsLock') {
    if (e.getModifierState("CapsLock")) {
      capsLock = !capsLock;
      capsBtn.classList.toggle('key--activeAlways');
    }
  }

  if (e.code === 'ShiftLeft') {
      shift = !shift;
      shiftBtn.classList.toggle('key--activeAlways');
      
    }
  })

body.addEventListener('keyup', (e) => {
  const virtualKey = document.querySelectorAll('.key');
  virtualKey.forEach((item, i) => {
      if (e.code === keyCode[i]) {
        item.classList.add('key--active');
        setTimeout(() => {
          item.classList.remove('key--active');
        }, 1000)
      }
  })
})


const voiceBtn = document.querySelectorAll("[dataValue='voice']")[0];
const changeLangBtn = (document.querySelectorAll("[dataValue='en']")[0] || document.querySelectorAll("[dataValue='en']")[0]);
let voiceStatus = 0;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = !lang ? 'en-US' : 'ru-RU';
recognition.continuous = true;

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  const poopScript = transcript;
  textarea.value = poopScript;
});

const startVoiceRec = () => {
  voiceStatus = voiceStatus + 1;
  recognition.start();
  voiceBtn.classList.add('key--activeAlways')
  changeLangBtn.style.pointerEvents='none';
}
const stopVoiceRec = () => {
  voiceStatus = voiceStatus - 1;
  recognition.stop();
  voiceBtn.classList.remove('key--activeAlways')
  changeLangBtn.style.pointerEvents = '';
}

function checkLanguage() {
  recognition.lang = !lang ? 'en-US' : 'ru-RU';
}

voiceBtn.addEventListener('click', () => {
  voiceStatus <= 0 ? startVoiceRec() : stopVoiceRec();
})






