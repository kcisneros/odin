// assignment: https://www.theodinproject.com/lessons/foundations-calculator

const calcContainer = document.querySelector(".calculatorContainer");

let firstNumberClicked = '';
let addOperatorButton = '';
let subtractOperatorButton = '';
let multiplyOperatorButton = '';
let divideOperatorButton = '';
let equalSymbolClicked = ''
let secondNumberClicked = '';

let numberButton = '';
let addSymbol = '';
let minusSymbol = '';
let divisionSymbol = '';
let multiplicationSymbol = '';
let equalSymbol = '';
let clearSymbol = '';

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

// create buttons first
function numButtons() {
  for (i = 0; i < 10; i++) {
    numberButton = document.createElement('button');
    numberButton.classList.add('numberButton');
    numberButton.textContent = `${i}`;
    calcContainer.appendChild(numberButton);
  }
}

// create event listener for buttons
function numButtonEventListener() {
  numberButton = document.getElementsByClassName('numberButton');
  // console.log(`numbner button is ${numberButton}`);
  for (let i = 0; i < numberButton.length; i++) {
    // console.log(`numbner button is ${numberButton[i]}`);
    numberButton[i].addEventListener('click', () => {
      if (calculatorState.operatorClicked != "" ) { // operator button has been clicked
        // second if? if secondNumberClicked is not empty then add to it, else make it just second number?
        secondNumberClicked = numberButton[i].textContent; 
        calculatorState.secondFinalOperandValue += secondNumberClicked;
        console.log(`the second number value clicked is: ${secondNumberClicked}`);
        console.log(`the second operand value clicked is: ${calculatorState.secondFinalOperandValue}`); // shows double digit nums
        // console.log(`second number clicked is: ${secondFinalOperandValue}`);
        passToDisplay(calculatorState.secondFinalOperandValue); //commenting this line out seemed to clear out the display value issue i was seeing where it was adding the string data type numbers together (aka 21 instead of just 2 and just 1)
        // passToDisplay(secondNumberClicked);
      }
      else { // the operator button hasn't been clicked
        firstNumberClicked = numberButton[i].textContent;
        calculatorState.finalOperandValue += firstNumberClicked;
        console.log(`the first number clicked is: ${firstNumberClicked}`);
        console.log(`the first operand clicked is: ${calculatorState.finalOperandValue}`); // shows double digit nums
        // console.log(`first number clicked is: ${finalOperandValue}`);
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

// creates arithmetic buttons (+, -, *, /)
function arithmeticButtons() {
  addSymbol = document.createElement('button');
  addSymbol.classList.add('arithmeticOperators');
  addSymbol.classList.add('addButton');
  addSymbol.textContent = "+";
  calcContainer.appendChild(addSymbol);

  minusSymbol = document.createElement('button');
  minusSymbol.classList.add('arithmeticOperators');
  minusSymbol.classList.add('minusButton');
  minusSymbol.textContent = "-";
  calcContainer.appendChild(minusSymbol);

  divisionSymbol = document.createElement('button');
  divisionSymbol.classList.add('arithmeticOperators');
  divisionSymbol.classList.add('divideButton');
  divisionSymbol.textContent = "/";
  calcContainer.appendChild(divisionSymbol);

  multiplicationSymbol = document.createElement('button');
  multiplicationSymbol.classList.add('arithmeticOperators');
  multiplicationSymbol.classList.add('multiplyButton');
  multiplicationSymbol.textContent = "*";
  calcContainer.appendChild(multiplicationSymbol);
}

// event listener (click) for arithmetic buttons
function arithmeticButtonsEventListener() {

  addSymbol = document.getElementsByClassName('addButton');
  addSymbol[0].addEventListener('click', () => {
    if (calculatorState.secondFinalOperandValue != '') {
      operate(calculatorState.finalOperandValue, calculatorState.operatorClicked, calculatorState.secondFinalOperandValue);
      calculatorState.finalOperandValue = calcDisplay.textContent;
      calculatorState.secondFinalOperandValue = '';
    }
    calculatorState.operatorClicked = addSymbol[0].textContent;
    return calculatorState.operatorClicked;
  });

  minusSymbol = document.getElementsByClassName('minusButton');
  minusSymbol[0].addEventListener('click', () => {
    if (calculatorState.secondFinalOperandValue != '') {
      operate(calculatorState.finalOperandValue, calculatorState.operatorClicked, calculatorState.secondFinalOperandValue);
      calculatorState.finalOperandValue = calcDisplay.textContent;
      calculatorState.secondFinalOperandValue = '';
    }
    calculatorState.operatorClicked = minusSymbol[0].textContent;
    return calculatorState.operatorClicked;  
  });

  divisionSymbol = document.getElementsByClassName('divideButton');
  divisionSymbol[0].addEventListener('click', () => {
    if (calculatorState.secondFinalOperandValue != '') {
      operate(calculatorState.finalOperandValue, calculatorState.operatorClicked, calculatorState.secondFinalOperandValue);
      calculatorState.finalOperandValue = calcDisplay.textContent;
      calculatorState.secondFinalOperandValue = '';
    }
    calculatorState.operatorClicked = divisionSymbol[0].textContent;
    console.log(`the division operator button is: ${calculatorState.operatorClicked}`);
    return calculatorState.operatorClicked;  
  });

  multiplicationSymbol = document.getElementsByClassName('multiplyButton');
  multiplicationSymbol[0].addEventListener('click', () => {
    if (calculatorState.secondFinalOperandValue != '') {
      operate(calculatorState.finalOperandValue, calculatorState.operatorClicked, calculatorState.secondFinalOperandValue);
      calculatorState.finalOperandValue = calcDisplay.textContent;
      calculatorState.secondFinalOperandValue = '';
    }
    calculatorState.operatorClicked = multiplicationSymbol[0].textContent;
    console.log(`the multiply operator button is: ${calculatorState.operatorClicked}`);
    return calculatorState.operatorClicked;
  });
}

// creates equal button
function equalButton() {
  equalSymbol = document.createElement('button');
  equalSymbol.classList.add('arithmeticOperators');
  equalSymbol.classList.add('equalButton');
  equalSymbol.textContent = "=";
  calcContainer.appendChild(equalSymbol);
}

// event listener for equal button
function equalButtonEventListener() {
  equalSymbol = document.getElementsByClassName('equalButton');
  equalSymbol[0].addEventListener('click', () => {
    equalSymbolClicked = equalSymbol[0].textContent;
    console.log(`the equal operator button is: ${equalSymbolClicked}`);
    operate(calculatorState.finalOperandValue, calculatorState.operatorClicked, calculatorState.secondFinalOperandValue);
    calculatorState.finalOperandValue = '';
    calculatorState.operatorClicked = '';
    calculatorState.secondFinalOperandValue = '';
  });
}

// creates clear button
function clearButton() {
  clearSymbol = document.createElement('button');
  clearSymbol.classList.add('arithmeticOperators');
  clearSymbol.classList.add('clearButton');
  clearSymbol.textContent = 'Clear';
  calcContainer.appendChild(clearSymbol);
}

// event listener for clear button
function clearButtonEventListener() {
  clearSymbol = document.getElementsByClassName('clearButton');
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
  // console.log(`the subtraction answer is: ${answer}`);
  return calculatorState.answer;
}

// does multiplication operation
function multiply(firstNum, secondNum) {
  calculatorState.answer = firstNum * secondNum;
  calculatorState.answer = Math.round(calculatorState.answer * 100) / 100;
  // console.log(`the multiplication answer is: ${answer}`);
  // displayValue = answer;
  return calculatorState.answer;
}

// does division operation
function divide(firstNum, secondNum) {
  if (secondNum == 0 || firstNum == 0) {
    alert("Can't divide by zero, clown");
  }
  calculatorState.answer = firstNum / secondNum;
  calculatorState.answer = Math.round(calculatorState.answer * 100) / 100;
  // console.log(`the division answer is: ${answer}`);
  return calculatorState.answer;
}

// operate function takes in three params and depending on the operator in the param
// it sends it to one of the functions defined above
function operate(firstNum, arithmeticOperator, secondNum) {
  if (arithmeticOperator === "*") {
    if (calculatorState.answer == 0) {
      passToDisplay(multiply(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${calculatorState.answer}`);
    }
    else {
      firstNum = calculatorState.answer;
      secondNum = 0;
      secondNum = calculatorState.secondFinalOperandValue;
      console.log(`firstnum is ${firstNum}`);
      console.log(`secondnum is ${secondNum}`);
      passToDisplay(multiply(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${calculatorState.answer}`);
    }
  }
  else if (arithmeticOperator === "/") {
    if (calculatorState.answer == 0) {
      passToDisplay(divide(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${calculatorState.answer}`);
    }
    else {
      firstNum = calculatorState.answer;
      secondNum = 0;
      secondNum = calculatorState.secondFinalOperandValue;
      console.log(`firstnum is ${firstNum}`);
      console.log(`secondnum is ${secondNum}`);
      passToDisplay(divide(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${calculatorState.answer}`);
    }
  }
  else if (arithmeticOperator === "+") {
    if (calculatorState.answer == 0) {
      passToDisplay(add(firstNum, secondNum)); 
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${calculatorState.answer}`); 
    }
    else {
      firstNum = calculatorState.answer;
      secondNum = 0;
      secondNum = calculatorState.secondFinalOperandValue;
      console.log(`firstnum is ${firstNum}`);
      console.log(`secondnum is ${secondNum}`);
      passToDisplay(add(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${calculatorState.answer}`); 
    }
  }
  else if (arithmeticOperator === "-") {
    if (calculatorState.answer == 0) {
      passToDisplay(subtract(firstNum, secondNum)); // have if/else? if dispalyvalue is nil do math else set to answer?  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${calculatorState.answer}`);
    }
    else {
      firstNum = calculatorState.answer;
      secondNum = 0;
      secondNum = calculatorState.secondFinalOperandValue;
      console.log(`firstnum is ${firstNum}`);
      console.log(`secondnum is ${secondNum}`);
      passToDisplay(subtract(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${calculatorState.answer}`);
    }
  }
  else {
    alert("invalid operator. please enter arithmetic operator");
  }
}

numButtons();
passToDisplay(0);
numButtonEventListener();
arithmeticButtons();
equalButton();
clearButton();
arithmeticButtonsEventListener();
equalButtonEventListener();
clearButtonEventListener();

// pseudocode can be found here: https://jamboard.google.com/d/19jn6yRp9j1SMViSUJZOhzyi9M6nSDwYPEeXEj7kneQI/viewer?f=0

// notes
// 1. I think I figured out how to get the buttons function to be separated from the event listener for the numbers
// 2. will try and replicate that for the operation buttons after committing the current working code -- done, I think this works for all buttons now
