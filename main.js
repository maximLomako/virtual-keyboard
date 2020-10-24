const time = document.getElementById('time'),
  fullDate = document.getElementById('date'),
  greeting = document.getElementById('greeting'),
  btn = document.getElementById('btn'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');


//show time
function showTime() {
  let today = new Date(),
  // let today = new Date (2020, 10, 11 , 01 , 10, 30);
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();

  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);

  function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '')+ n
  }
}

function setBgGreet(res, slideIndex) {
    let today = new Date(),
    hour = today.getHours();

    if (hour > 6 && hour < 12) {
        document.body.style.backgroundImage = `url('./images/morning/${res[slideIndex]===undefined ? '07' : res[slideIndex]}.jpg')`;
        greeting.textContent='Good Morning,';
        document.body.style.color='black';
    } else if (hour > 12 && hour < 18) {
      document.body.style.backgroundImage = `url('./images/day/${res[slideIndex]===undefined ? '07' : res[slideIndex]}.jpg')`;
      greeting.textContent='Good Afternoon,';
      document.body.style.color='black';
    } else if (hour > 18 && hour < 24) {
      document.body.style.backgroundImage = `url('./images/evening/${res[slideIndex]===undefined ? '07' : res[slideIndex]}.jpg')`;
      greeting.textContent='Good Evening,';
      document.body.style.color='white';
    } else {
      document.body.style.backgroundImage = `url('./images/night/${res[slideIndex]===undefined ? '07' : res[slideIndex]}.jpg')`;
      greeting.textContent='Good Night,';
      document.body.style.color='white';
    }
  }

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Input Your]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.key === 'Enter' && e.target.innerText !== '') {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
        if (e.key === 'Enter' && e.target.innerText === '') {
            name.blur();
            getName()
        }
    }else if (e.type === 'click'){
        e.target.innerText = '';
        name.focus();
    } else {
        getName()
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Input Your Goal!]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.key === 'Enter' && e.target.innerText !== '') {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
        if (e.key === 'Enter' && e.target.innerText === '') {
            focus.blur();
            getFocus()
        }
    }else if (e.type === 'click'){
        e.target.innerText = '';
        focus.focus();
    } else {
        getFocus()
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', setFocus);



// show date
function showDate() {

  const today = new Date(),
    dayNum = today.getDay(),
    day=today.getUTCDate(),
    date=today.getUTCMonth() + 1,
    nameOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

    fullDate.innerHTML = `${nameOfDays[dayNum]}<span>,</span> ${day} ${month[date]}`;

  setTimeout(showTime, 1000);

}


//changeImg
    const randomNumGenerator = () => {
  let res = [];
  for (let i = 0; i < 20; i++) {
    res[i] = (Math.floor(Math.random() * (19 - 0 + 1)) + 1);
  }
   return res = res.map(el => el < 10 ? ('0'+el) : el ) 
  }
let res = randomNumGenerator();
console.log(res);

let slideIndex = 0
const showSlides = () => {    
  if (slideIndex < 20) {
     slideIndex++
  } else {
    slideIndex = 0
  }
}
setInterval(showSlides, 359999);

btn.addEventListener('click', () => {

  showSlides();
  setBgGreet(res,slideIndex);
})






// Run
showTime();
setBgGreet(res,slideIndex);
setInterval(()=>{setBgGreet(res,slideIndex)}, 3600000);
showDate();
getName();
getFocus();

