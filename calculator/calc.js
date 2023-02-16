// assignment: https://www.theodinproject.com/lessons/foundations-calculator

// my calc has to contain functions for all of the basic math operators
// start by creating functions for add, subtract, mult, and divide

// let answer = 0;


// get existing container div from main html file
const calcContainer = document.querySelector(".calculator-container");

// // create a div called firstSquare
// const firstSquare = document.createElement('div');
// // add css class called firstSquare to the created div above
// firstSquare.classList.add('firstSquare');
// // add text to the firstSquare div
// firstSquare.textContent = "1";

// calcContainer.appendChild(firstSquare);

function numButtons() {
  // try and create 9 squares..
  for (i = 0; i < 10; i++) {
    // each const will be a button
    const numberButtons = document.createElement('button');
  // add css class called numberButtons to the created button above
  numberButtons.classList.add('numberButtons');
  // add text to the numberButtons button. the number is each iteration
  // the loop
  numberButtons.textContent = `${i}`; 

  // not sure if i need a dataset rn, maybe just for keyboard clicks?
  // numberButtons.dataset.key = `${i}`;
  // add numberButtons to the main container
  calcContainer.appendChild(numberButtons);

  // add event listener for each button on click
  // it just alerts which number was pressed. 
  numberButtons.addEventListener('click', () => {
    let buttonPressed = `${numberButtons.textContent}`;
    alert(`You pressed button number ${buttonPressed}`);
    // return buttonPressed;
  });
  // return numberButtons;
  };
};

// this doesn't work..
// // create display that shows number pressed
// const calcDisplay = document.createElement('div');
// calcDisplay.textContent = `the btton that was pressed is: ${buttonPressed}`;

// create add arithmetic operator button
const addSymbol = document.createElement('button');
addSymbol.textContent = "+";
calcContainer.appendChild(addSymbol);
addSymbol.addEventListener('click', () => {
  alert(`You pressed the ${addSymbol.textContent} button`);
});

// create subtraction arithmetic operator button
const minusSymbol = document.createElement('button');
minusSymbol.textContent = "-";
calcContainer.appendChild(minusSymbol);
minusSymbol.addEventListener('click', () => {
  alert(`You pressed the ${minusSymbol.textContent} button`);
});

// create division arithmetic operator button
const divisionSymbol = document.createElement('button');
divisionSymbol.textContent = "/";
calcContainer.appendChild(divisionSymbol);
divisionSymbol.addEventListener('click', () => {
  alert(`You pressed the ${divisionSymbol.textContent} button`);
});

// create multiplication arithmetic operator button
const multiplicationSymbol = document.createElement('button');
multiplicationSymbol.textContent = "*";
calcContainer.appendChild(multiplicationSymbol);
multiplicationSymbol.addEventListener('click', () => {
  alert(`You pressed the ${multiplicationSymbol.textContent} button`);
});

// function getFirstNumber, getSecondNumber, and getOperator are to see how it would work in
// the web browser console
function getFirstNumber() {
  let firstNum = prompt("Please enter first number");
  firstNum = Number(firstNum);
  return firstNum;
}

function getSecondNumber() {
  let secondNum = prompt("Please enter second number");
  secondNum = Number(secondNum);
  return secondNum;
}

function getOperator() {
  let arithmeticOperator = prompt("Please enter an operator for these two numbers. Ex: +, -, /, *");
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

// testing individ arithmetic funcs
// add(2, 2);
// subtract(2, 3);
// multiply(3, 3);
// divide(12, 3);

// testing operate function
// operate("+", 1, 5);
// operate("/", 10, 5);
// operate("*", 1, 5);
// operate("-", 1, 5);

// testing the operate function with functions as parameters
// getting the user input for first number, operator, and second number.
operate(getFirstNumber(), getOperator(), getSecondNumber());
numButtons();