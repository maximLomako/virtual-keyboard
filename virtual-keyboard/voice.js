
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const textarea = document.querySelector('.use-keyboard-input');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'ru-Ru';
recognition.continuous = true;



recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  const poopScript = transcript;
  textarea.textContent = poopScript;


});


btn.addEventListener('click', () => {
  recognition.start();
})

btn2.addEventListener('click', () => {
  recognition.stop();
})

btn3.addEventListener('click', () => {
  recognition.lang = 'ru-RU';
})



  // < textarea class = "use-keyboard-input"
  // placeholder = "Click here" > < /textarea> <
  //   div class = "btn" > listen < /div> <
  //   div class = "btn2" > stop < /div> <
  //   div class = "btn3" > ChangeLang < /div>