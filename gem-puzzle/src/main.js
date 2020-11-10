const createPage = (cellSizeValue = 100, arrItemsValue = 15, columsRowsQuntity = 4, fieldWidth = '400px', fieldHeight = '400px') => {

  // create elements game field
  const body = document.querySelector('body');
  const container = document.createElement('div');
  const field = document.createElement('div');
  const gearIconDiv = document.createElement('div');
  const gearIconImg = document.createElement('img');

  //create timer and counter
  const indicators = document.createElement('div');
  const timer = document.createElement('div');
  const counter = document.createElement('div');

  // create elements modal window
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalItems = document.createElement('ul');
  const modalItemContent = ['New Game', 'Save Game', 'Change size', 'Best scores'];
  const close = document.createElement('div');
  const closeIcon = document.createElement('img');

  //congrat modal
  const congratModal = document.createElement('div');
  const congratModalDialog = document.createElement('div');

  //field size modal
  const fieldSizeValue = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];



  //add classes game field
  container.className = 'container';
  field.className = 'field';
  gearIconDiv.className = 'gear';
  gearIconImg.src = './assets/icons/gear.svg'

  // add classes timer and counter
  indicators.className = 'indicators';
  timer.className = 'timer';
  counter.className = 'counter';

  // add classes modal window
  modal.className = 'modal';
  modalDialog.className = 'modal__dialog';
  modalItems.className = 'modal__items';
  close.className = 'close';
  closeIcon.src = './assets/icons/close.svg';

  // add classes congrat modal 
  congratModal.className = 'congrat-modal';
  congratModalDialog.className = 'congrat-modal__dialog';


  //add element to the page game field
  body.prepend(container);
  container.appendChild(field);
  indicators.appendChild(gearIconDiv);
  gearIconDiv.appendChild(gearIconImg);

  //add element timer and counter
  container.prepend(indicators);
  indicators.prepend(timer);
  indicators.prepend(counter);
  indicators.style.width = fieldWidth;

  // add content element timer and counter
  counter.textContent = '000'

  //add element to the page modal window
  body.appendChild(modal);
  modal.appendChild(modalDialog);
  modalDialog.appendChild(modalItems);
  modalItemContent.forEach(item => modalItems.insertAdjacentHTML('beforeend', `<li class="modal__item">${item}</li>`))
  modalDialog.appendChild(close);
  close.appendChild(closeIcon);
  //add congrat modal
  body.appendChild(congratModal);
  congratModal.appendChild(congratModalDialog);


  let numbers = [...Array(arrItemsValue).keys()].sort(() => Math.random() - 0.5);
  const cellSize = cellSizeValue;
  const empty = {
    value: 0,
    top: 0,
    left: 0
  }
  const cells = [];
  cells.push(empty);

  field.style.width = fieldWidth;
  field.style.height = fieldHeight;

  //init game, create DOM
  function initGame() {

    for (let i = 1; i <= arrItemsValue; i++) {

      const cell = document.createElement('div');
      const value = numbers[i - 1] + 1;
      cell.className = 'cell';
      cell.innerHTML = value;

      const left = i % columsRowsQuntity;
      const top = (i - left) / columsRowsQuntity;

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
      // alert('you win!')
      congratModal.classList.add('modal__active');
      congratModalDialog.innerHTML = `Congrats! You are win with ${counterValue} moves and your time is ${timer.textContent}`
    }
    countMoves();
    audio.play();
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
  const startGame = (e) => {
    const container = document.querySelector('.container');
    if (e.target.textContent === 'New Game') {
      modal.classList.toggle('modal__active')
      gearIconDiv.classList.toggle('active')
      console.log('start game');
      refreshField();
    }
  }

  //refresh field
  const refreshField = (cellSizeValue = 100, arrItemsValue = 15, columsRowsQuntity = 4, fieldWidth = '400px', fieldHeight = '400px') => {
    container.remove();
    createPage(cellSizeValue, arrItemsValue, columsRowsQuntity, fieldWidth, fieldHeight);
  }


  modalItems.addEventListener('click', startGame);

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



  //start timer
  timer.innerHTML = '00:00:00:00'
  let milliseconds = 0;
  const startTimer = () => {
    if (counterValue > 0) {
      milliseconds += 10;
      let dateTimer = new Date(milliseconds);
      timer.innerHTML =
        ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
        ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
        ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
        ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }
  }
  setInterval(startTimer, 10)

  // stop timer
  const stopTimer = () => {
    clearInterval(startTimer);
  }

  //reset timer
  const resetTimer = () => {
    clearInterval(startTimer);
    timer.innerHTML = '00:00:00:00'
  }

  //save results

  let cellTextValueArr = [];

  const getNumbersValueFromScreen = () => {
    const cell = document.querySelectorAll('.cell');
    for (let i = 0; i < cell.length; i++) {
      cellTextValueArr.push(+cell[i].textContent);
    }
  }

  field.addEventListener('click', (e) => {
    getNumbersValueFromScreen();
    if (e.currentTarget === field) {
      console.log(cellTextValueArr)
      cellTextValueArr = [];
    }

  })

  //change board size
  modal.addEventListener('click', (e) => {
    if (e.target.textContent === 'Change size') {
      modalDialog.innerHTML = '';
      fieldSizeValue.map(s => {
        modalDialog.insertAdjacentHTML('beforeend',
          `<span class='field__size'>${s}</span>`)
      });
    }
  });

  modalDialog.addEventListener('click', (e) => {
    changeBoardSize(e.target.textContent);
    if (e.target.classList.contains('field__size')) {
      modal.classList.remove('modal__active');
    }
  })


  const changeBoardSize = (fieldSizeValue) => {
    let fieldWidth = '';
    let fieldHeight = '';

    if (fieldSizeValue === '3x3') {
      arrItemsValue = 8,
        cellSizeValue = 100,
        columsRowsQuntity = 3;
      field.style.width = '300px'
      field.style.height = '300px'
      fieldWidth = field.style.width
      fieldHeight = field.style.height
      indicators.style.width = fieldWidth;
      refreshField(cellSizeValue, arrItemsValue, columsRowsQuntity, fieldWidth, fieldHeight);;
      localStorage.setItem('cellSizeValue', cellSizeValue);
      localStorage.setItem('arrItemsValue', arrItemsValue);
      localStorage.setItem('columsRowsQuntity', columsRowsQuntity);
      localStorage.setItem('fieldWidth', fieldWidth);
      localStorage.setItem('fieldHeight', fieldHeight);

    }
    if (fieldSizeValue === '4x4') {
      arrItemsValue = 15,
        cellSizeValue = 100,
        columsRowsQuntity = 4;
      field.style.width = '400px'
      field.style.height = '400px'
      fieldWidth = field.style.width
      fieldHeight = field.style.height
      indicators.style.width = fieldWidth;
      refreshField(cellSizeValue, arrItemsValue, columsRowsQuntity, fieldWidth, fieldHeight);

      localStorage.setItem('cellSizeValue', cellSizeValue);
      localStorage.setItem('arrItemsValue', arrItemsValue);
      localStorage.setItem('columsRowsQuntity', columsRowsQuntity);
      localStorage.setItem('fieldWidth', fieldWidth);
      localStorage.setItem('fieldHeight', fieldHeight);

    }
    if (fieldSizeValue === '5x5') {
      arrItemsValue = 24,
        cellSizeValue = 100,
        columsRowsQuntity = 5;
      field.style.width = '500px'
      field.style.height = '500px'
      fieldWidth = field.style.width
      fieldHeight = field.style.height
      indicators.style.width = fieldWidth;
      refreshField(cellSizeValue, arrItemsValue, columsRowsQuntity, fieldWidth, fieldHeight);

      localStorage.setItem('cellSizeValue', cellSizeValue);
      localStorage.setItem('arrItemsValue', arrItemsValue);
      localStorage.setItem('columsRowsQuntity', columsRowsQuntity);
      localStorage.setItem('fieldWidth', fieldWidth);
      localStorage.setItem('fieldHeight', fieldHeight);

    }
    if (fieldSizeValue === '6x6') {
      arrItemsValue = 35,
        cellSizeValue = 100,
        columsRowsQuntity = 6;
      field.style.width = '600px'
      field.style.height = '600px'
      fieldWidth = field.style.width
      fieldHeight = field.style.height
      indicators.style.width = fieldWidth;
      refreshField(cellSizeValue, arrItemsValue, columsRowsQuntity, fieldWidth, fieldHeight);

      localStorage.setItem('cellSizeValue', cellSizeValue);
      localStorage.setItem('arrItemsValue', arrItemsValue);
      localStorage.setItem('columsRowsQuntity', columsRowsQuntity);
      localStorage.setItem('fieldWidth', fieldWidth);
      localStorage.setItem('fieldHeight', fieldHeight);

    }
    if (fieldSizeValue === '7x7') {
      arrItemsValue = 48,
        cellSizeValue = 100,
        columsRowsQuntity = 7;
      field.style.width = '700px'
      field.style.height = '700px'
      fieldWidth = field.style.width
      fieldHeight = field.style.height
      indicators.style.width = fieldWidth;
      refreshField(cellSizeValue, arrItemsValue, columsRowsQuntity, fieldWidth, fieldHeight);

      localStorage.setItem('cellSizeValue', cellSizeValue);
      localStorage.setItem('arrItemsValue', arrItemsValue);
      localStorage.setItem('columsRowsQuntity', columsRowsQuntity);
      localStorage.setItem('fieldWidth', fieldWidth);
      localStorage.setItem('fieldHeight', fieldHeight);

    }
    if (fieldSizeValue === '8x8') {
      arrItemsValue = 63,
        cellSizeValue = 100,
        columsRowsQuntity = 8;
      field.style.width = '800px'
      field.style.height = '800px'
      fieldWidth = field.style.width
      fieldHeight = field.style.height
      indicators.style.width = fieldWidth;
      refreshField(cellSizeValue, arrItemsValue, columsRowsQuntity, fieldWidth, fieldHeight);
      localStorage.setItem('columsRowsQuntity', columsRowsQuntity);
      localStorage.setItem('cellSizeValue', cellSizeValue);
      localStorage.setItem('arrItemsValue', arrItemsValue);
      localStorage.setItem('columsRowsQuntity', columsRowsQuntity);
      localStorage.setItem('fieldWidth', fieldWidth);
      localStorage.setItem('fieldHeight', fieldHeight);

    }
  }


  //congrats modal toggle

  document.addEventListener('click', (e) => {
    if (e.target === congratModal) {
      congratModal.classList.toggle('modal__active')
      gearIconDiv.classList.toggle('active')
      refreshField();

    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      congratModal.classList.remove('modal__active')
      gearIconDiv.classList.toggle('active')
      refreshField();
    }
  })


  //audio
  let audio = new Audio('./assets/audio/button.wav');
}


if (localStorage.getItem('columsRowsQuntity')) {
  createPage(
    localStorage.getItem('cellSizeValue'),
    +localStorage.getItem('arrItemsValue'),
    +localStorage.getItem('columsRowsQuntity'),
    localStorage.getItem('fieldWidth'),
    localStorage.getItem('fieldHeight')

  );
} else {
  createPage();
}
