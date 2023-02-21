// assignment: https://www.theodinproject.com/lessons/foundations-calculator

let answer ='';

const calcContainer = document.querySelector(".calculatorContainer");

let buttonPressed = '';
let displayValue = '';
let addOperatorButton = '';
let subtractOperatorButton = '';
let multiplyOperatorButton = '';
let divideOperatorButton = '';
let equalSymbolButton = ''

let finalOperandValue = '';

const calcDisplay = document.createElement('div');
calcDisplay.classList.add('calculatorDisplay');
calcContainer.appendChild(calcDisplay);

function numButtons() {
  for (i = 0; i < 10; i++) {
  const numberButtons = document.createElement('button');
  numberButtons.classList.add('numberButtons');
  numberButtons.textContent = `${i}`; 
  calcContainer.appendChild(numberButtons);
  numberButtons.addEventListener('click', () => {
    buttonPressed = numberButtons.textContent;
    finalOperandValue += buttonPressed;
    console.log(`in the num buttons function. the button pressed was: ${finalOperandValue}`);
    passToDisplay(finalOperandValue);
    return finalOperandValue;
  });
  };
};

function passToDisplay() {
  displayValue = calcDisplay.textContent = `${finalOperandValue}`;
  console.log(`display value is: ${displayValue}`);
  return displayValue;
}

function arithmeticButtons() {
  const addSymbol = document.createElement('button');
  addSymbol.classList.add('arithmeticOperators');
  addOperatorButton = addSymbol.textContent = "+";
  calcContainer.appendChild(addSymbol);
  addSymbol.addEventListener('click', () => {
    addOperatorButton = addOperatorButton;
    console.log(`the add operator button is: ${addOperatorButton}`);
    return addOperatorButton;
  });

  const minusSymbol = document.createElement('button');
  minusSymbol.classList.add('arithmeticOperators');
  subtractOperatorButton = minusSymbol.textContent = "-";
  calcContainer.appendChild(minusSymbol);
  minusSymbol.addEventListener('click', () => {
    subtractOperatorButton = subtractOperatorButton;
    console.log(`the subtract operator button is: ${subtractOperatorButton}`);
    return subtractOperatorButton;
  });

  const divisionSymbol = document.createElement('button');
  divisionSymbol.classList.add('arithmeticOperators');
  divideOperatorButton = divisionSymbol.textContent = "/";
  calcContainer.appendChild(divisionSymbol);
  divisionSymbol.addEventListener('click', () => {
    divideOperatorButton = divideOperatorButton;
    console.log(`the divide operator button is: ${divideOperatorButton}`);
    return divideOperatorButton;
  });

  const multiplicationSymbol = document.createElement('button');
  multiplicationSymbol.classList.add('arithmeticOperators');
  multiplyOperatorButton = multiplicationSymbol.textContent = "*";
  calcContainer.appendChild(multiplicationSymbol);
  multiplicationSymbol.addEventListener('click', () => {
    multiplyOperatorButton = multiplyOperatorButton;
    console.log(`the multiply operator button is: ${multiplyOperatorButton}`);
    return multiplyOperatorButton;
  });
}

function equalButton() {
  const equalSymbol = document.createElement('button');
  equalSymbol.classList.add('arithmeticOperators');
  equalSymbolButton = equalSymbol.textContent = "=";
  calcContainer.appendChild(equalSymbol);
  equalSymbol.addEventListener('click', () => {
    equalSymbolButton = equalSymbolButton;
    console.log(`the equal operator button is: ${equalSymbolButton}`);
    return equalSymbolButton;
  });
}

function clearButton() {
  const clearSymbol = document.createElement('button');
  clearSymbol.classList.add('arithmeticOperators');
  clearSymbol.textContent = 'Clear';
  calcContainer.appendChild(clearSymbol);
  clearSymbol.addEventListener('click', () => {
    displayValue = calcDisplay.innerHTML = 0;
    finalOperandValue = '';
    console.log(`the clear operator button is: ${clearSymbol.textContent}`);
    console.log(`the displayValue is: ${displayValue}`)
  });
}

function getFirstNumber() {
  let firstNum = finalOperandValue;
  firstNum = Number(firstNum);
  console.log(`in getfirstNumber function, the number is: ${firstNum}`);
  return firstNum;
}

function getSecondNumber() {
  let secondNum = finalOperandValue;
  secondNum = Number(secondNum);
  console.log(`in getSecondNumber function, the number is: ${secondNum}`);
  return secondNum;
}

function getOperator() {
  let arithmeticOperator = arithmeticButtons;
  return arithmeticOperator;
}
 
function add(firstNum, secondNum) {
  answer = firstNum + secondNum;
  console.log(answer);
  return answer;
};

function subtract(firstNum, secondNum) {
  answer = firstNum - secondNum;
  console.log(answer);
  return answer;
}

function multiply(firstNum, secondNum) {
  answer = firstNum * secondNum;
  console.log(answer);
  return answer;
}

function divide(firstNum, secondNum) {
  answer = firstNum / secondNum;
  console.log(answer);
  return answer;
}

function operate(firstNum, arithmeticOperator, secondNum) {
  numButtons();
  passToDisplay(numButtons);
  arithmeticButtons();
  equalButton();
  clearButton();
  if (arithmeticOperator === "*") {
    multiply(firstNum, secondNum);
  }
  else if (arithmeticOperator === "/") {
    divide(firstNum, secondNum);
  }
  else if (arithmeticOperator === "+") {
    add(firstNum, secondNum);
  }
  else if (arithmeticOperator === "-") {
    subtract(firstNum, secondNum);
  }
  else {
    console.log("invalid operator. please enter arithmetic operator");
  }
}

operate();