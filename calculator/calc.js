// assignment: https://www.theodinproject.com/lessons/foundations-calculator

const calcContainer = document.querySelector(".calculatorContainer");

const addChar = '+';
const minusChar = '-';
const divideChar = '/';
const multiplyChar = '*';

// object creation 
let calculatorState = {
  finalOperandValue: '',
  secondFinalOperandValue: '',
  operatorClicked: '',
  answer: '',
}

function createCalculatorDisplay() {
  let calcDisplay = document.createElement('div');
  calcDisplay.setAttribute('id', 'calculatorDisplay');
  calcDisplay.classList.add('calculatorDisplay');
  calcContainer.appendChild(calcDisplay);  
  return calcDisplay;
}

function displayValue() {
  return document.getElementById('calculatorDisplay').textContent;
}

// this is the "display" for the calculator
function passToDisplay(number) {
  document.getElementById('calculatorDisplay').textContent = number;
}

function createNumButtons() {
  for (i = 0; i < 10; i++) {
    numberButton = document.createElement('button');
    numberButton.classList.add('numberButton');
    numberButton.textContent = `${i}`;
    calcContainer.appendChild(numberButton);
  }
}

function addNumButtonEventListeners() {
  numberButton = document.getElementsByClassName('numberButton');
  for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', () => {
      if (calculatorState.operatorClicked != "" ) { 
        calculatorState.secondFinalOperandValue += numberButton[i].textContent; 
        passToDisplay(calculatorState.secondFinalOperandValue); 
      }
      else { 
        calculatorState.finalOperandValue += numberButton[i].textContent;
        passToDisplay(calculatorState.finalOperandValue);
      }
  });
  }
}


function createArithmeticButton(symbolName, symbolChar) {
  let arithmeticButton = document.createElement('button');
  arithmeticButton.classList.add('arithmeticOperators', symbolName);
  arithmeticButton.textContent = symbolChar;
  calcContainer.appendChild(arithmeticButton);
}

function createArithmeticButtons() {
  createArithmeticButton('addSymbol', addChar);
  createArithmeticButton('minusSymbol', minusChar);
  createArithmeticButton('divisionSymbol', divideChar);
  createArithmeticButton('multiplicationSymbol', multiplyChar);
}

function addArithmeticButtonEventListener(symbolName) {
  let buttons = document.getElementsByClassName(symbolName);
  buttons[0].addEventListener('click', () => {
    if (calculatorState.secondFinalOperandValue != '') {
      operate(calculatorState.finalOperandValue, calculatorState.operatorClicked, calculatorState.secondFinalOperandValue);
      calculatorState.finalOperandValue = displayValue();
      calculatorState.secondFinalOperandValue = '';
    }
    calculatorState.operatorClicked = buttons[0].textContent;
  });
}

function addArithmeticButtonEventListeners() {
  addArithmeticButtonEventListener('addSymbol');
  addArithmeticButtonEventListener('minusSymbol');
  addArithmeticButtonEventListener('divisionSymbol');
  addArithmeticButtonEventListener('multiplicationSymbol');
}

function createEqualButton() {
  equalSymbol = document.createElement('button');
  equalSymbol.classList.add('arithmeticOperators', 'equalSymbol');
  equalSymbol.textContent = "=";
  calcContainer.appendChild(equalSymbol);
}

function addEqualButtonEventListener() {
  equalSymbol = document.getElementsByClassName('equalSymbol');
  equalSymbol[0].addEventListener('click', () => {
    operate(calculatorState.finalOperandValue, calculatorState.operatorClicked, calculatorState.secondFinalOperandValue);
    calculatorState.finalOperandValue = '';
    calculatorState.operatorClicked = '';
    calculatorState.secondFinalOperandValue = '';
  });
}

function createClearButton() {
  clearSymbol = document.createElement('button');
  clearSymbol.classList.add('arithmeticOperators', 'clearSymbol');
  clearSymbol.textContent = 'Clear';
  calcContainer.appendChild(clearSymbol);
}

function addClearButtonEventListener() {
  clearSymbol = document.getElementsByClassName('clearSymbol');
  clearSymbol[0].addEventListener('click', () => {
    passToDisplay(0);
    calculatorState.finalOperandValue = '';
    calculatorState.secondFinalOperandValue = '';
    calculatorState.operatorClicked  = '';
    calculatorState.answer = '';
  });
}

// does addition operation
function add(firstNum, secondNum) {
  calculatorState.answer = Number(firstNum) + Number(secondNum); // not sure why I have to declare the number type here again..
  calculatorState.answer = Math.round(calculatorState.answer * 100) / 100;
  return calculatorState.answer;
};

// does subtraction operation
function subtract(firstNum, secondNum) {
  calculatorState.answer = firstNum - secondNum;
  calculatorState.answer = Math.round(calculatorState.answer * 100) / 100;
  return calculatorState.answer;
}

// does multiplication operation
function multiply(firstNum, secondNum) {
  calculatorState.answer = firstNum * secondNum;
  calculatorState.answer = Math.round(calculatorState.answer * 100) / 100;
  return calculatorState.answer;
}

// does division operation
function divide(firstNum, secondNum) {
  if (secondNum == 0 || firstNum == 0) {
    alert("Can't divide by zero, clown");
  }
  calculatorState.answer = firstNum / secondNum;
  calculatorState.answer = Math.round(calculatorState.answer * 100) / 100;
  return calculatorState.answer;
}

// operate function takes in three params and depending on the operator in the param
// it sends it to one of the functions defined above
function operate(firstNum, arithmeticOperator, secondNum) {
  let answer = 0;
  if (calculatorState.answer != 0) {
    firstNum = calculatorState.answer;
    secondNum = 0;
    secondNum = calculatorState.secondFinalOperandValue;
  }
  if (arithmeticOperator == multiplyChar) {
    answer = multiply(firstNum, secondNum);  
  }
  else if (arithmeticOperator == divideChar) {
    answer = divide(firstNum, secondNum);  
  }
  else if (arithmeticOperator == addChar) {
    answer = add(firstNum, secondNum); 
  }
  else if (arithmeticOperator == minusChar) {
    answer = subtract(firstNum, secondNum);  
  }
  else {
    alert("invalid operator. please enter arithmetic operator");
  }
  passToDisplay(answer);
}

createCalculatorDisplay();
createNumButtons();
passToDisplay(0);
addNumButtonEventListeners();
createArithmeticButtons();
createEqualButton();
createClearButton();
addArithmeticButtonEventListeners();
addEqualButtonEventListener();
addClearButtonEventListener();

// pseudocode can be found here: https://jamboard.google.com/d/19jn6yRp9j1SMViSUJZOhzyi9M6nSDwYPEeXEj7kneQI/viewer?f=0

// notes
// 1. I think I figured out how to get the buttons function to be separated from the event listener for the numbers
// 2. will try and replicate that for the operation buttons after committing the current working code -- done, I think this works for all buttons now
