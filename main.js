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

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}



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
getName();
getFocus();
showDate();

// set name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText)
  }
}


// Get Name
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// set focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      e.preventDefault();
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText)
  }
}

name.addEventListener('keyPress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keyPress', setFocus);
focus.addEventListener('blur', setFocus);

