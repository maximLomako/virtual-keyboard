const data = [
    {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
]

const navElement =
  document.querySelectorAll('.nav__element');

for (let i = 0; i<=1; i++) {
  navElement[i].addEventListener('mouseover', () => {
    navElement[0].classList.remove('nav__element--active');
    navElement[i].classList.add('nav__element--active');
  })
}

for (let i = 0; i<=1; i++) {
  navElement[i].addEventListener('mouseout', () => {
    navElement[i].classList.remove('nav__element--active');
  })
}

const headerBurgerBtn = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuActive = document.querySelector('.burger-menu');
const headerBurger = document.querySelector('.header-burger--inside');
const headerLogo = document.querySelector('.header__logo');
const body = document.querySelector('body');
const html = document.querySelector('html');
const burgerNavElement = document.querySelectorAll('.burger-nav__element');


for (let i = 0; i<=1; i++) {
  burgerNavElement[i].addEventListener('mouseover', () => {
    burgerNavElement[0].classList.remove('burger-nav__element--active');
    burgerNavElement[i].classList.add('burger-nav__element--active');

  })
}

for (let i = 0; i<=1; i++) {
  burgerNavElement[i].addEventListener('mouseout', () => {
    burgerNavElement[i].classList.remove('burger-nav__element--active');
  })
}

document.addEventListener('click', (e) => {
  if ((e.target) === burgerNavElement[0]) {
    closeBurger();
  }
})

headerBurgerBtn.addEventListener('click', (e) => {
  burgerMenu.classList.add('burger-menu--active');
  body.style.overflowY='hidden';
  html.style.overflowY='hidden';
  headerLogo.style.animation = `logoFade 0.5s ease forwards 0.1s`
  headerBurgerBtn.style.animation = `rotateButton 0.5s ease forwards 0.1s`
  headerBurger.style.animation = `rotateForwardButton 0.5s ease forwards 0.1s`
})

headerBurger.addEventListener('click', (e) => {
  closeBurger();
})

document.addEventListener('click', (e) => {
  const target = e.target;
  if (target === burgerMenu) {
    closeBurger();
  }
})

function closeBurger() {
  burgerMenu.classList.remove('burger-menu--active')
  body.style.overflowY='auto';
  html.style.overflowY='auto';
  headerLogo.style.animation = `logoVisible 0.5s ease forwards 0.5s`
  headerBurgerBtn.style.animation = `rotateForwardButton 0.5s ease forwards 0.1s`
  headerBurger.style.animation = `rotateButtonInside 0.3s ease forwards 0.1s`
}


// slider
const slidesWrapper = document.querySelector('.slider__cards');
let div = document.createElement('div');
div.classList.add('slider__cards__inner')
div.innerHTML = data.map(t => `<div class="slider__card">
         <img src=${t.img} class="slider__card__img">
          <span class="slider__card__title">${t.name} </span>
              <button class="btn slider__card__button">Learn more</button>
              </div>`).join('')
slidesWrapper.appendChild(div);




// const prev = document.querySelector('.slide-arrow--left');
// const next = document.querySelector('.slide-arrow--right');
// const slidesField = document.querySelector('.slider__cards__inner');
// const slides = document.querySelectorAll('.slider__card');
// const width = window.getComputedStyle(slidesWrapper).width;

// let direction;

// let offset = 0;
// next.addEventListener('click', () => {
//   direction = -1;
//   slidesWrapper.style.justifyContent = 'flex-start'; 
//   offset -= 37;
//   slidesField.style.transform = `translate(${offset + '%'})`
//   slidesField.lastElementChild.style.marginRight=0
// })

// prev.addEventListener('click', () => {
//   direction = 1; 
//   offset += 10;
//   slidesWrapper.style.justifyContent = 'flex-end';
//   slidesField.style.transform = `translate(${offset + '%'})`
// })

// slidesField.addEventListener('transitionend', function() {
//   // slidesField.appendChild(slidesField.firstElementChild)
//   console.log('hello')
// })

// slidesField.addEventListener('transitionend', function() {
//   // get the last element and append it to the front
  
//   if (direction === 1) {
//     slidesField.prepend(slidesField.lastElementChild);
//   } else {
//     slidesField.appendChild(slidesField.firstElementChild);
//   }
  
//   slidesField.style.transition = 'none';
//   slidesField.style.transform = 'translate(0)';
// })
// slidesField.style.transition = '5s all';
// let direction;

// let offset = 0;
// next.addEventListener('click', () => {
//   slidesWrapper.style.justifyContent = 'flex-start'; 
//   offset -= 26 
//   slidesField.style.transition = '2s all';
//   slidesField.style.transform = `translate(${offset + '%'})`
 
//   slidesField.lastElementChild.style.marginRight=0
// })

// prev.addEventListener('click', () => {
//   slidesWrapper.style.justifyContent = 'flex-start'; 
//   offset += 26 
//   slidesField.style.transition = '2s all';
//   slidesField.style.transform = `translate(${offset + '%'})`
// })




// let slideIndex = 0;
// let offset = 0;
// let num = 0;

// slidesField.style.width = (+width.slice(0, width.length - 2)+90)*slides.length/3;
// slidesField.style.transition = '5s all';
// let slideWidth = (+width.slice(0, width.length - 2)+90);
// slidesField.style.transform = `translateX(-${offset}px) `

// next.addEventListener('click', () => {
//   offset += slideWidth;
//   slidesField.style.transform = `translateX(-${offset}px) `;
//   num === 3 ? num = 0 : num = num + 3

//   slidesWrapper.style.justifyContent = 'flex-start';

//   slidesField.insertAdjacentHTML('beforeend', `<div class="slider__card">
//          <img src=${data[0+num].img} class="slider__card__img">
//           <span class="slider__card__title">${data[0+num].name} </span>
//               <button class="btn slider__card__button">Learn more</button>
//               </div>`);
//   slidesField.insertAdjacentHTML('beforeend', `<div class="slider__card ">
//          <img src=${data[1+num].img} class="slider__card__img">
//           <span class="slider__card__title">${data[1+num].name} </span>
//               <button class="btn slider__card__button">Learn more</button>
//               </div>`);
//   slidesField.insertAdjacentHTML('beforeend', `<div class="slider__card ">
//          <img src=${data[2+num].img} class="slider__card__img">
//           <span class="slider__card__title">${data[2+num].name} </span>
//               <button class="btn slider__card__button">Learn more</button>
//               </div>`);

// })

// prev.addEventListener('click', () => {
//   offset -= (+width.slice(0, width.length - 2)+180);
//   slidesField.style.transform = `translateX(${-offset}px)`;
//   num === 3 ? num = 0 : num = num + 3
//   slidesWrapper.style.justifyContent = 'flex-end';

//   slidesField.insertAdjacentHTML('afterbegin', `<div class="slider__card">
//          <img src=${data[0+num].img} class="slider__card__img">
//           <span class="slider__card__title">${data[0+num].name} </span>
//               <button class="btn slider__card__button">Learn more</button>
//               </div>`);
//   slidesField.insertAdjacentHTML('afterbegin', `<div class="slider__card ">
//          <img src=${data[1+num].img} class="slider__card__img">
//           <span class="slider__card__title">${data[1+num].name} </span>
//               <button class="btn slider__card__button">Learn more</button>
//               </div>`);
//   slidesField.insertAdjacentHTML('afterbegin', `<div class="slider__card ">
//          <img src=${data[2+num].img} class="slider__card__img">
//           <span class="slider__card__title">${data[2+num].name} </span>
//               <button class="btn slider__card__button">Learn more</button>
//               </div>`);

    
// })

 
//pop
const modal = document.querySelector('.modal');
const sliderCard = document.querySelectorAll('.slider__card');
const sliderCardButton = document.querySelectorAll('.slider__card__button');
const modalWrapper = document.querySelector('.modal-wrapper');
 const closeButton = document.querySelector('.close__button');

sliderCard.forEach((card,i)=>card.addEventListener('click', () => {
   modalWrapper.insertAdjacentHTML('beforeend',  `
    </div>
      <img src=${data[i].img} alt="modal__img" class="modal__img">
    <div class="modal__content">
      <h3 class="modal-title">${data[i].name}</h3>
      <span class="modal-subtitle">${data[i].breed} </span>
      <p class="modal-describtion">
        ${data[i].description}
      </p>
      <ul class="modal-items">
        <li class="modal-item"><strong>Age:</strong>  ${data[i].age}</li>
        <li class="modal-item"><strong>Inoculations:</strong> ${data[i].inoculations}</li>
        <li class="modal-item"><strong>Diseases:</strong> ${data[i].inoculations}</li>
        <li class="modal-item"><strong>Parasites: </strong>${data[i].parasites}</li>
      </ul>
    </div>`) 

 modal.classList.add('active-modal');
}));


sliderCard.forEach(card=>card.addEventListener('mouseover', (e) => {
  if (e.target === card) {
    card.classList.add('slider__card__active');
  } else {
    card.classList.remove('slider__card__active');
  }
}));

modal.addEventListener('click', (e) => {
if (e.target === modal) {
  modal.classList.remove('active-modal');
  modalWrapper.innerHTML='<img src="../../assets/icons/modal_close_button.svg" alt="close-button" class="close__button" id="btn">'

} 
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('active-modal');
  modalWrapper.innerHTML='<img src="../../assets/icons/modal_close_button.svg" alt="close-button" class="close__button" id="btn">'
  
})

modal.addEventListener('mouseover', (e) => {
  if (e.target === modal) {
  closeButton.classList.add('close__button__active');
} else {
  closeButton.classList.remove('close__button__active');
}
})
