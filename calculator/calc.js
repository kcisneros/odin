// assignment: https://www.theodinproject.com/lessons/foundations-calculator

// my calc has to contain functions for all of the basic math operators
// start by creating functions for add, subtract, mult, and divide

// let answer = 0;


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