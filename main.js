const time = document.getElementById('time'),
  fullDate = document.getElementById('date'),
  greeting = document.getElementById('greeting'),
  btn = document.getElementById('btn'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');


//show time
function showTime() {
  let today = new Date(),
  //  let today = new Date (2020, 10, 11 , 17 , 59, 00);
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

    if (hour >= 6 && hour < 12) {
        document.body.style.backgroundImage = `url('./assets/images/morning/${res[slideIndex]}.jpg')`;
        greeting.textContent='Good Morning,';
        document.body.style.color='black';
    } else if (hour >= 12 && hour < 18) {
      document.body.style.backgroundImage = `url('./assets/images/afternoon/${res[slideIndex]}.jpg')`;
      greeting.textContent='Good Afternoon,';
      document.body.style.color='black';
    } else if (hour >= 18 && hour < 24) {
      document.body.style.backgroundImage = `url('./assets/images/evening/${res[slideIndex]}.jpg')`;
      greeting.textContent='Good Evening,';
      document.body.style.color='white';
    } else if (hour >=0 && hour < 6) {
      document.body.style.backgroundImage = `url('./assets/images/night/${res[slideIndex]}.jpg')`;
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
    res[i] = i+1
     res.sort(() => Math.random() - 0.5);
   
  }
   return res = res.map(el => el < 10 ? ('0'+el) : el ) 
  }

let res = randomNumGenerator();

let slideIndex = 0
const showSlides = () => {    
  if (slideIndex < 19) {
     slideIndex++
  } else {
    slideIndex = 0
  }
}
setInterval(showSlides, 3590000);

showTime();
setBgGreet(res,slideIndex);
setInterval(()=>{setBgGreet(res,slideIndex)}, 3600000);
showDate();
getName();
getFocus();
showSlides();

  const allDayPart = ['morning', 'afternoon', 'evening', 'night'];
function getPartOfDay() {

  let nowDayPart = greeting.textContent.split(' ')[1];
  nowDayPart = nowDayPart.substring(0, nowDayPart.length - 1).toLowerCase();
  let resOfSearch = allDayPart.findIndex(el => el === nowDayPart);
  return resOfSearch
}

let indexOfArray = getPartOfDay();
let counter = 0;

function changeBckgImage() {
  counter++
   if (counter % 20 === 0) {
    counter = 0
    if (indexOfArray < 3) {
      indexOfArray++
    } else {
      indexOfArray = 0
    }
  }

function checkTextColor() {
    if (indexOfArray === 0 || indexOfArray === 1) {
    document.body.style.color='black';
  }

  if (indexOfArray === 2 || indexOfArray === 3) {
    document.body.style.color='white';
  }
}
checkTextColor();

  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 2000);

let img = document.createElement('img');
img.src = `./assets/images/${allDayPart[indexOfArray]}/${res[slideIndex]}.jpg`
document.head.append(img);
img.onload = function(){
  document.body.style.backgroundImage = `url(${img.src})`;
}

  showSlides();
}
btn.addEventListener('click', changeBckgImage);

// joke

const blockquote = document.querySelector('.setup');
const figcaption = document.querySelector('.punchline');
const button = document.querySelector('.btn');


async function getQuote() {  
  const url = `https://official-joke-api.appspot.com/random_joke`;
 
  const res = await fetch(url).then();
  const data = await res.json(); 
  blockquote.textContent =  data.setup;
  figcaption.textContent =  data.punchline;

}
document.addEventListener('DOMContentLoaded', getQuote);
button.addEventListener('click', getQuote);


// weather

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const error = document.querySelector('.error');


async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=976ec1d5f68a6a42fe2bd2e6c461df13&units=metric`;
  const res = await fetch(url);
  const data = await res.json();


  if (data.cod === '404') {
    city.style.border = '1px solid red';
    error.style.color='red';
    error.textContent = `${data.message}`;

  } else {
      weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  windSpeed.textContent = `${data.wind.speed} m/s`
  humidity.textContent = `${data.main.humidity}%`
  error.style.color='white';
  error.textContent = ``;
  city.style.border = '1px solid white';
  }

 

  
}



document.addEventListener('DOMContentLoaded', getWeather);


function getCity() {
    if (localStorage.getItem('city') === null) {
        city.textContent = 'Minsk';
    } else {
        city.textContent = localStorage.getItem('city');
    }
}

function setCity(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.key === 'Enter' && e.target.innerText !== '') {
            localStorage.setItem('city', e.target.innerText);
            city.blur();
            getWeather();
        }
        if (e.key === 'Enter' && e.target.innerText === '') {
            city.blur();
            getCity();
            getWeather();
        }
    }else if (e.type === 'click'){
        e.target.innerText = '';
        city.focus();
    } else {
        getCity();
        
    }
}

 getCity();

 city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);
city.addEventListener('click', setCity);


const buttonWeather = document.querySelector('.button-weather');
const close = document.querySelector('.close');
const active = document.querySelector('.active');
const weather = document.querySelector('.weather');
const html = document.querySelector('html');


buttonWeather.addEventListener('click', () => {
  
  weather.style.animation = `animateBottom 0.5s ease forwards 0.5s`
    weather.classList.add('active');


})

close.addEventListener('click', () => {
    setTimeout(()=>{
    weather.classList.remove('active');
  }), 2000;
})