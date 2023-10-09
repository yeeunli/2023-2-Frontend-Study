document.addEventListener('DOMContentLoaded', function () {
  const inputText = document.querySelector('.input-text');
  const acButton = document.querySelector('.reset');
  let currentNumber = '';
  let previousNumber = '';
  let currentOperator = '';
  let operatorJustClicked = false;

  const updateDisplay = () => {
    inputText.value = currentNumber;
  };

  const clearData = () => {
    currentNumber = '';
    previousNumber = '';
    currentOperator = '';
    acButton.innerText = 'AC';
  };

  const operate = () => {
    previousNumber = parseFloat(previousNumber);
    currentNumber = parseFloat(currentNumber);

    switch (currentOperator) {
      case '+':
        currentNumber = previousNumber + currentNumber;
        break;
      case '&#8722':
        currentNumber = previousNumber - currentNumber;
        break;
      case '&#215':
        currentNumber = previousNumber * currentNumber;
        break;
      case '&#247':
        currentNumber = previousNumber / currentNumber;
        break;
      default:
        return;
    }
    currentOperator = '';
  };

  document
    .querySelector('.button-wrapper')
    .addEventListener('click', function (e) {
      const buttonValue = e.target.innerText;
      acButton.innerText = 'C';
      if (e.target.matches('.number')) {
        if (operatorJustClicked) {
          currentNumber = '';
          operatorJustClicked = false;
        }
        currentNumber += buttonValue;
        updateDisplay();
      } else if (e.target.matches('.operator')) {
        if (currentOperator && currentNumber && previousNumber) {
          operate();
          updateDisplay();
          previousNumber = currentNumber;
          currentNumber = '';
        } else if (!previousNumber) {
          previousNumber = currentNumber;
          currentNumber = '';
        }

        if (buttonValue === '=') {
          if (previousNumber && currentOperator) {
            operate();
            updateDisplay();
            previousNumber = '';
          }
        } else if (['+', '&#8722', '&#215', '&#247'].includes(buttonValue)) {
          currentOperator = buttonValue;
          currentNumber = buttonValue;
          updateDisplay();
          operatorJustClicked = true;
        } else if (buttonValue === '.') {
          if (!currentNumber.includes('.')) {
            currentNumber += '.';
            updateDisplay();
          }
        }
      } else if (e.target.matches('.reset')) {
        clearData();
        updateDisplay();
      }
    });
});