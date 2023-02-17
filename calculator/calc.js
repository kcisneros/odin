// assignment: https://www.theodinproject.com/lessons/foundations-calculator

// let answer = 0;

const calcContainer = document.querySelector(".calculatorContainer");

let buttonPressed = '';
let displayValue = '';

function numButtons() {
  for (i = 0; i < 10; i++) {
  const numberButtons = document.createElement('button');
  numberButtons.classList.add('numberButtons');
  numberButtons.textContent = `${i}`; 
  calcContainer.appendChild(numberButtons);
  numberButtons.addEventListener('click', () => {
    // alert(`You pressed button number ${numberButtons.textContent}`);
    buttonPressed = numberButtons.textContent;
    console.log(`in the num buttons function. the button pressed was: ${buttonPressed}`);
    passToDisplay(buttonPressed);
    return buttonPressed;
  });
  };
};

const calcDisplay = document.createElement('div');
calcDisplay.classList.add('calculatorDisplay');
calcContainer.appendChild(calcDisplay);

function passToDisplay() {
  displayValue = calcDisplay.textContent = `${buttonPressed}`;
  console.log(`display value is: ${displayValue}`);
  return displayValue;
}

function arithmeticButtons() {
  const addSymbol = document.createElement('button');
  addSymbol.classList.add('arithmeticOperators');
  addSymbol.textContent = "+";
  calcContainer.appendChild(addSymbol);
  addSymbol.addEventListener('click', () => {
    alert(`You pressed the ${addSymbol.textContent} button`);
  });

  const minusSymbol = document.createElement('button');
  minusSymbol.classList.add('arithmeticOperators');
  minusSymbol.textContent = "-";
  calcContainer.appendChild(minusSymbol);
  minusSymbol.addEventListener('click', () => {
    alert(`You pressed the ${minusSymbol.textContent} button`);
  });

  const divisionSymbol = document.createElement('button');
  divisionSymbol.classList.add('arithmeticOperators');
  divisionSymbol.textContent = "/";
  calcContainer.appendChild(divisionSymbol);
  divisionSymbol.addEventListener('click', () => {
    alert(`You pressed the ${divisionSymbol.textContent} button`);
  });

  const multiplicationSymbol = document.createElement('button');
  multiplicationSymbol.classList.add('arithmeticOperators');
  multiplicationSymbol.textContent = "*";
  calcContainer.appendChild(multiplicationSymbol);
  multiplicationSymbol.addEventListener('click', () => {
    alert(`You pressed the ${multiplicationSymbol.textContent} button`);
  });

  const equalSymbol = document.createElement('button');
  equalSymbol.classList.add('arithmeticOperators');
  equalSymbol.textContent = "=";
  calcContainer.appendChild(equalSymbol);
  equalSymbol.addEventListener('click', () => {
    alert(`You pressed the ${equalSymbol.textContent} button`);
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
function operate(firstNum, operator, secondNum) {
  if (operator === "*") {
    multiply(firstNum, secondNum);
  }
  else if (operator === "/") {
    divide(firstNum, secondNum);
  }
  else if (operator === "+") {
    add(firstNum, secondNum);
  }
  else if (operator === "-") {
    subtract(firstNum, secondNum);
  }
  else {
    console.log("invalid operator. please enter arithmetic operator");
  }
}

// testing the operate function with functions as parameters
// getting the user input for first number, operator, and second number.
// operate(getFirstNumber(), getOperator(), getSecondNumber());
numButtons();
// passToDisplay(numButtons);
arithmeticButtons();
