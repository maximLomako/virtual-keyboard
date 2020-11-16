const numbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const decimalBtn = document.querySelector('[data-decimal]');
const negativeNumberBtn = document.querySelector('[negative-number]');
const display = document.querySelector('.output__num');

const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  display.innerText = calculator.displayValue;
}

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }

  console.log(calculator);
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = '0.'
    calculator.waitingForSecondOperand = false;
    return
  }

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}


function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator === 'ˆ2' || operator === '√') {
    calculator.waitingForSecondOperand = false;
  }

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    if (typeof (result) === 'undefined') {
      resetCalculator();
    } else {
      calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
      calculator.firstOperand = result;
    }
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}


function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  } else if (operator === 'ˆ') {
    return firstOperand ** secondOperand;
  } else if (operator === '√') {
    return firstOperand > 0 ? Math.sqrt(firstOperand) : alert('Нельзя взять корень из отрицательного числа!')
  }

  return secondOperand;
}

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}


numbers.forEach(button => {
  button.addEventListener('click', (e) => {
    inputDigit(e.target.innerText);
    updateDisplay();
  })
})

operations.forEach(button => {
  button.addEventListener('click', (e) => {
    handleOperator(e.target.innerText);
    updateDisplay();
  })
})

deleteButton.addEventListener('click', (e) => {
  calculator.displayValue = calculator.displayValue.slice(0, -1);
  updateDisplay();
})

allClearButton.addEventListener('click', (e) => {
  resetCalculator();
  updateDisplay();
})

decimalBtn.addEventListener('click', (e) => {
  inputDecimal(e.target.innerText);
  updateDisplay();
})

negativeNumberBtn.addEventListener('click', () => {
  if (calculator.displayValue != 0 && calculator.displayValue[0] !='-') {
    calculator.displayValue = '-' + calculator.displayValue;
    updateDisplay();
  }
})

const name = 'Maxim';
console.log(name.slice('Petya', 2));