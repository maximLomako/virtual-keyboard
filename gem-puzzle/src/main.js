  // create elements game field
  const body = document.querySelector('body');
  const container = document.createElement('div');
  const field = document.createElement('div');
  const gearIconDiv = document.createElement('div');
  const gearIconImg = document.createElement('img');

  // create elements modal window
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalItems = document.createElement('ul');
  const modalItem = document.createElement('li');
  const modalItemContent = ['New Game', 'Save Game', 'Change size', 'Best scores'];
  const congratMessage = document.createElement('h2');
  const close = document.createElement('div');
  const closeIcon = document.createElement('img');

  //add classes game field
  container.className = 'container';
  field.className = 'field';
  gearIconDiv.className = 'gear';
  gearIconImg.src = './assets/icons/gear.svg'

  // add classes modal window
  modal.className = 'modal';
  modalDialog.className = 'modal__dialog';
  modalItems.className = 'modal__items';
  modalItem.className = 'modal__item';
  close.className = 'close';
  closeIcon.src = './assets/icons/close.svg';

  //add element to the page game field
  body.prepend(container);
  container.appendChild(field);
  container.appendChild(gearIconDiv);
  gearIconDiv.appendChild(gearIconImg);

  //add element to the page modal window
  body.appendChild(modal);
  modal.appendChild(modalDialog);
  modalDialog.appendChild(modalItems);
  modalItemContent.forEach(item => modalItems.insertAdjacentHTML('beforeend', `<li class="modal__item">${item}</li>`))
  modalDialog.appendChild(close);
  close.appendChild(closeIcon);






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

    const numbers = [...Array(15).keys()]
      .sort(() => Math.random() - 0.5);


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
  }
  //start new game
  const newGame = () => {
    numbers = [...Array(15).keys()]
      .sort(() => Math.random() - 0.5);
  }
  initGame();


  // toogle modal
  const toggleModal = () => {
    modal.classList.toggle('modal__active')
  }

  gearIconImg.addEventListener('click',toggleModal);
  close.addEventListener('click', toggleModal);

  document.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.toggle('modal__active')
    }
  })
  
  document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        modal.classList.remove('modal__active')
      }
    })



