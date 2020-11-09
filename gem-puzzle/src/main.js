const createPage = () => {
  // create elements game field
  const body = document.querySelector('body');
  const container = document.createElement('div');
  const field = document.createElement('div');
  const gearIconDiv = document.createElement('div');
  const gearIconImg = document.createElement('img');

  //create timer and counter
  const indicators = document.createElement('div');
  const timer = document.createElement('div');
  const hours = document.createElement('div');
  const minutes = document.createElement('div');
  const seconds = document.createElement('div');
  const counter = document.createElement('div');
  const spanTimer = document.createElement('span');

  // create elements modal window
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalItems = document.createElement('ul');
  const modalItemContent = ['New Game', 'Save Game', 'Change size', 'Best scores'];
  const congratMessage = document.createElement('h2');
  const close = document.createElement('div');
  const closeIcon = document.createElement('img');




  //add classes game field
  container.className = 'container';
  field.className = 'field';
  gearIconDiv.className = 'gear';
  gearIconImg.src = './assets/icons/gear.svg'

  // add classes timer and counter
  indicators.className = 'indicators';
  timer.className = 'timer';
  hours.className = 'hours';
  minutes.className = 'minutes';
  seconds.className = 'seconds';
  counter.className = 'counter';

  // add classes modal window
  modal.className = 'modal';
  modalDialog.className = 'modal__dialog';
  modalItems.className = 'modal__items';
  close.className = 'close';
  closeIcon.src = './assets/icons/close.svg';




  //add element to the page game field
  body.prepend(container);
  container.appendChild(field);
  indicators.appendChild(gearIconDiv);
  gearIconDiv.appendChild(gearIconImg);

  //add element timer and counter
  container.prepend(indicators);
  indicators.prepend(timer);
  timer.appendChild(hours);
  timer.appendChild(spanTimer);
  timer.appendChild(minutes);
  timer.appendChild(spanTimer);
  timer.appendChild(seconds);
  indicators.prepend(counter);

  // add content element timer and counter
  hours.textContent = '24'
  minutes.textContent = '59'
  seconds.textContent = '59'
  spanTimer.textContent = ' : '
  counter.textContent = '000'



  //add element to the page modal window
  body.appendChild(modal);
  modal.appendChild(modalDialog);
  modalDialog.appendChild(modalItems);
  modalItemContent.forEach(item => modalItems.insertAdjacentHTML('beforeend', `<li class="modal__item">${item}</li>`))
  modalDialog.appendChild(close);
  close.appendChild(closeIcon);


  let numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);
  const cellSize = 100;
  const empty = {
    value: 0,
    top: 0,
    left: 0
  }
  const cells = [];
  cells.push(empty);

  //init game, create DOM
  function initGame() {

    for (let i = 1; i <= 15; i++) {

      const cell = document.createElement('div');
      const value = numbers[i - 1] + 1;
      cell.className = 'cell';
      cell.innerHTML = value;

      const left = i % 4
      const top = (i - left) / 4

      cells.push({
        value: value,
        left: left,
        top: top,
        element: cell
      })

      field.appendChild(cell)
      cell.style.left = `${left * cellSize}px`
      cell.style.top = `${top * cellSize}px`
      cell.addEventListener('click', () => {
        move(i);
      })
    }
  }

  //move cells
  function move(index) {
    const cell = cells[index];

    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff = Math.abs(empty.top - cell.top);

    if (leftDiff + topDiff > 1) {
      return
    }

    cell.element.style.left = `${empty.left * cellSize}px`
    cell.element.style.top = `${empty.top * cellSize}px`

    const emptyLeft = empty.left;
    const emptyTop = empty.top;
    empty.left = cell.left;
    empty.top = cell.top;
    cell.left = emptyLeft;
    cell.top = emptyTop;

    const isFinished = cells.every(cell => {
      return cell.value === cell.top * 4 + cell.left
    })



    if (isFinished) {
      alert('you win!')
    }
    countMoves();
  }

  //call functions
  initGame();

  // toogle modal
  const toggleModal = () => {
    modal.classList.toggle('modal__active')
    gearIconDiv.classList.toggle('active')
  }

  gearIconImg.addEventListener('click', toggleModal);
  close.addEventListener('click', toggleModal);

  document.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.toggle('modal__active')
      gearIconDiv.classList.toggle('active')
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      modal.classList.remove('modal__active')
      gearIconDiv.classList.toggle('active')
    }
  })


  //start new game 
  modalItems.addEventListener('click', (e) => {
    const container = document.querySelector('.container');
    if (e.target.textContent === 'New Game') {
      modal.classList.toggle('modal__active')
      gearIconDiv.classList.toggle('active')
      console.log('start game');
      container.remove();
      createPage();
    }
  })

  //count moves
  let counterValue = 0;
  const countMoves = () => {
    counterValue = counterValue + 1;
    if (counterValue < 10) {
       counter.textContent = '00' + counterValue;
    } else if (counterValue < 100) {
      counter.textContent = '0' + counterValue;
    } else {
      counter.textContent = counterValue;
    }   
  }
  
}
createPage();


// const cell = document.querySelectorAll('.cell');
// const cellValueFirstArr = [];
// for (let i = 0; i < 15; i++) {
//   cellValueFirstArr.push(cell[i].textContent)
// }
// console.log(cellValueFirstArr)