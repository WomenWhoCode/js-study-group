const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    const key = event.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if (action === 'decimal') {
      display.textContent = displayedNum + '.';
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    if (action === 'clear') {
      display.textContent = '';
    }

    if (action === 'equals') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
    }
  }
});

function calculate(x, operator, y) {
  let result = '';
  switch (operator) {
    case 'add':
      result = parseFloat(x) + parseFloat(y);
      break;
    case 'subtract':
      result = parseFloat(x) - parseFloat(y);
      break;
    case 'multiply':
      result = parseFloat(x) * parseFloat(y);
      break;
    case 'divide':
      result = parseFloat(x) / parseFloat(y);
      break;
  }
  return result;
}
