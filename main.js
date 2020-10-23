const time = document.getElementById('time'),
  fullDate = document.getElementById('date'),
  greeting = document.getElementById('greeting'),
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

function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = "url('./images/morning/01.jpg')";
        greeting.textContent='Good Morning';
    } else if (hour> 18) {
      document.body.style.backgroundImage = "url('./images/evening/01.jpg')"
      greeting.textContent='Good Afternoon';
    } else {
      document.body.style.backgroundImage = "url('./images/night/01.jpg')"
      greeting.textContent='Good Evening';
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

// Run
showTime();
setBgGreet();
showDate();
getName();
getFocus();
