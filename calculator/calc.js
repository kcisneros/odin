// assignment: https://www.theodinproject.com/lessons/foundations-calculator

const calcContainer = document.querySelector(".calculatorContainer");

let firstNumberClicked = '';
let secondNumberClicked = '';

let numberButton = '';

let equalSymbolClicked = ''

// object creation for operator buttons
const operatorButtons = {
  addSymbol: "+",
  minusSymbol: "-",
  divisionSymbol: "/",
  multiplicationSymbol: "*",
}

let symbols = Object.keys(operatorButtons);
console.log(symbols);

// object creation 
let calculatorState = {
  displayValue: '',
  finalOperandValue: '',
  secondFinalOperandValue: '',
  operatorClicked: '',
  answer: '',
}

const calcDisplay = document.createElement('div');
calcDisplay.classList.add('calculatorDisplay');
calcContainer.appendChild(calcDisplay);

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
        secondNumberClicked = numberButton[i].textContent; 
        calculatorState.secondFinalOperandValue += secondNumberClicked;
        console.log(`the second number value clicked is: ${secondNumberClicked}`);
        console.log(`the second operand value clicked is: ${calculatorState.secondFinalOperandValue}`); 
        passToDisplay(calculatorState.secondFinalOperandValue); 
      }
      else { 
        firstNumberClicked = numberButton[i].textContent;
        calculatorState.finalOperandValue += firstNumberClicked;
        console.log(`the first number clicked is: ${firstNumberClicked}`);
        console.log(`the first operand clicked is: ${calculatorState.finalOperandValue}`);
        passToDisplay(calculatorState.finalOperandValue);
      }
  });
  }
}

// this is the "display" for the calculator
function passToDisplay(number) {
  calculatorState.displayValue = calcDisplay.textContent = number;
  console.log(`display value is: ${calculatorState.displayValue}`);
  return calculatorState.displayValue;
}

function createArithmeticButtons() {
  symbols.forEach((symbolName) => {
    let arithmeticButton = document.createElement('button');
    arithmeticButton.classList.add('arithmeticOperators', symbolName);
    arithmeticButton.textContent = `${operatorButtons[symbolName]}`;
    calcContainer.appendChild(arithmeticButton);
  })
}

function addArithmeticButtonsEventListeners() {
  symbols.forEach((symbolName) => {
    let buttons = document.getElementsByClassName(symbolName);
    buttons[0].addEventListener('click', () => {
      if (calculatorState.secondFinalOperandValue != '') {
        operate(calculatorState.finalOperandValue, calculatorState.operatorClicked, calculatorState.secondFinalOperandValue);
        calculatorState.finalOperandValue = calcDisplay.textContent;
        calculatorState.secondFinalOperandValue = '';
      }
      calculatorState.operatorClicked = buttons[0].textContent;
      return calculatorState.operatorClicked;
    });
  })
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
    equalSymbolClicked = equalSymbol[0].textContent;
    console.log(`the equal operator button is: ${equalSymbolClicked}`);
    operate(calculatorState.finalOperandValue, calculatorState.operatorClicked, calculatorState.secondFinalOperandValue);
    calculatorState.finalOperandValue = '';
    calculatorState.operatorClicked = '';
    calculatorState.secondFinalOperandValue = '';
  });
}

function createClearButton() {
  clearSymbol = document.createElement('button');
  clearSymbol.classList.add('arithmeticOperators');
  clearSymbol.classList.add('clearSymbol');
  clearSymbol.textContent = 'Clear';
  calcContainer.appendChild(clearSymbol);
}

function addClearButtonEventListener() {
  clearSymbol = document.getElementsByClassName('clearSymbol');
  clearSymbol[0].addEventListener('click', () => {
    calcDisplay.textContent = 0;
    calculatorState.displayValue = calcDisplay.textContent;
    calculatorState.finalOperandValue = '';
    calculatorState.secondFinalOperandValue = '';
    calculatorState.operatorClicked  = '';
    calculatorState.answer = '';
    console.log(`the displayValue is: ${calculatorState.displayValue}`)
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
  if (arithmeticOperator === "*") {
    if (calculatorState.answer == 0) {
      passToDisplay(multiply(firstNum, secondNum));  
    }
    else {
      firstNum = calculatorState.answer;
      secondNum = 0;
      secondNum = calculatorState.secondFinalOperandValue;
      passToDisplay(multiply(firstNum, secondNum));  
    }
  }
  else if (arithmeticOperator === "/") {
    if (calculatorState.answer == 0) {
      passToDisplay(divide(firstNum, secondNum));  
    }
    else {
      firstNum = calculatorState.answer;
      secondNum = 0;
      secondNum = calculatorState.secondFinalOperandValue;
      passToDisplay(divide(firstNum, secondNum));  
    }
  }
  else if (arithmeticOperator === "+") {
    if (calculatorState.answer == 0) {
      passToDisplay(add(firstNum, secondNum)); 
    }
    else {
      firstNum = calculatorState.answer;
      secondNum = 0;
      secondNum = calculatorState.secondFinalOperandValue;
      passToDisplay(add(firstNum, secondNum));  
    }
  }
  else if (arithmeticOperator === "-") {
    if (calculatorState.answer == 0) {
      passToDisplay(subtract(firstNum, secondNum)); // have if/else? if dispalyvalue is nil do math else set to answer?  
    }
    else {
      firstNum = calculatorState.answer;
      secondNum = 0;
      secondNum = calculatorState.secondFinalOperandValue;
      passToDisplay(subtract(firstNum, secondNum));  
    }
  }
  else {
    alert("invalid operator. please enter arithmetic operator");
  }
}

createNumButtons();
passToDisplay(0);
addNumButtonEventListeners();
createArithmeticButtons();
createEqualButton();
createClearButton();
addArithmeticButtonsEventListeners();
addEqualButtonEventListener();
addClearButtonEventListener();

// pseudocode can be found here: https://jamboard.google.com/d/19jn6yRp9j1SMViSUJZOhzyi9M6nSDwYPEeXEj7kneQI/viewer?f=0

// notes
// 1. I think I figured out how to get the buttons function to be separated from the event listener for the numbers
// 2. will try and replicate that for the operation buttons after committing the current working code -- done, I think this works for all buttons now
