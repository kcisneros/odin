// assignment: https://www.theodinproject.com/lessons/foundations-calculator

let answer = 0;

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
    // alert(`You pressed button number ${numberButtons.textContent}`);
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
    alert(`You pressed the ${addOperatorButton} button`);
    return addOperatorButton;
  });

  const minusSymbol = document.createElement('button');
  minusSymbol.classList.add('arithmeticOperators');
  subtractOperatorButton = minusSymbol.textContent = "-";
  calcContainer.appendChild(minusSymbol);
  minusSymbol.addEventListener('click', () => {
    alert(`You pressed the ${subtractOperatorButton} button`);
    return subtractOperatorButton;
  });

  const divisionSymbol = document.createElement('button');
  divisionSymbol.classList.add('arithmeticOperators');
  divideOperatorButton = divisionSymbol.textContent = "/";
  calcContainer.appendChild(divisionSymbol);
  divisionSymbol.addEventListener('click', () => {
    alert(`You pressed the ${divideOperatorButton} button`);
    return divideOperatorButton;
  });

  const multiplicationSymbol = document.createElement('button');
  multiplicationSymbol.classList.add('arithmeticOperators');
  multiplyOperatorButton = multiplicationSymbol.textContent = "*";
  calcContainer.appendChild(multiplicationSymbol);
  multiplicationSymbol.addEventListener('click', () => {
    alert(`You pressed the ${multiplyOperatorButton} button`);
    return multiplyOperatorButton;
  });

  const equalSymbol = document.createElement('button');
  equalSymbol.classList.add('arithmeticOperators');
  equalSymbolButton = equalSymbol.textContent = "=";
  calcContainer.appendChild(equalSymbol);
  equalSymbol.addEventListener('click', () => {
    alert(`You pressed the ${equalSymbolButton} button`);
    return equalSymbolButton;
  });

  const clearSymbol = document.createElement('button');
  clearSymbol.classList.add('arithmeticOperators');
  clearSymbol.textContent = 'Clear';
  calcContainer.appendChild(clearSymbol);
  clearSymbol.addEventListener('click', () => {
    alert(`You pressed the ${clearSymbol.textContent} button`);
  });
}

// function getFirstNumber, getSecondNumber, and getOperator are to see how it would work in
// the web browser console


// getFirstNumber, getSecondNumber, and getOperator functions work. commenting out for now since I don't need to prompt..
// function getFirstNumber() {
//   let firstNum = prompt("Please enter first number");
//   firstNum = Number(firstNum);
//   return firstNum;
// }

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

// function getSecondNumber() {
//   let secondNum = prompt("Please enter second number");
//   secondNum = Number(secondNum);
//   return secondNum;
// }

// function getOperator() {
//   let arithmeticOperator = prompt("Please enter an operator for these two numbers. Ex: +, -, /, *");
//   return arithmeticOperator;
// }
 
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

// create a new function `operate` that takes an operator and 2 nums
// then calls one of the above functions on the numbers
function operate(getFirstNumber, getOperator, getSecondNumber) {
  numButtons();
  passToDisplay(numButtons);
  arithmeticButtons();
  if (getOperator === "*") {
    multiply(getFirstNumber, getSecondNumber);
  }
  else if (getOperator === "/") {
    divide(getFirstNumber, getSecondNumber);
  }
  else if (getOperator === "+") {
    add(getFirstNumber, getSecondNumber);
  }
  else if (getOperator === "-") {
    subtract(getFirstNumber, getSecondNumber);
  }
  else {
    console.log("invalid operator. please enter arithmetic operator");
  }
}

// testing the operate function with functions as parameters
// getting the user input for first number, operator, and second number.
// operate(getFirstNumber(), getOperator(), getSecondNumber());
// numButtons();
// // passToDisplay(numButtons);
// arithmeticButtons();
// getFirstNumber();
operate();