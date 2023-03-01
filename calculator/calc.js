// assignment: https://www.theodinproject.com/lessons/foundations-calculator

let answer ='';

const calcContainer = document.querySelector(".calculatorContainer");

let firstNumberClicked = '';
let displayValue = '';
let addOperatorButton = '';
let subtractOperatorButton = '';
let multiplyOperatorButton = '';
let divideOperatorButton = '';
let equalSymbolClicked = ''
let operatorClicked = '';
let secondNumberClicked = '';

let numberButton = '';
let addSymbol = '';
let minusSymbol = '';
let divisionSymbol = '';
let multiplicationSymbol = '';
let equalSymbol = '';
let clearSymbol = '';

let finalOperandValue = '';
let secondFinalOperandValue = '';

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
      if (operatorClicked != "" ) { // operator button has been clicked
        // second if? if secondNumberClicked is not empty then add to it, else make it just second number?
        secondNumberClicked = numberButton[i].textContent; 
        secondFinalOperandValue += secondNumberClicked;
        console.log(`the second number value clicked is: ${secondNumberClicked}`);
        console.log(`the second operand value clicked is: ${secondFinalOperandValue}`); // shows double digit nums
        // console.log(`second number clicked is: ${secondFinalOperandValue}`);
        passToDisplay(secondFinalOperandValue); //commenting this line out seemed to clear out the display value issue i was seeing where it was adding the string data type numbers together (aka 21 instead of just 2 and just 1)
        // passToDisplay(secondNumberClicked);
      }
      else { // the operator button hasn't been clicked
        firstNumberClicked = numberButton[i].textContent;
        finalOperandValue += firstNumberClicked;
        console.log(`the first number clicked is: ${firstNumberClicked}`);
        console.log(`the first operand clicked is: ${finalOperandValue}`); // shows double digit nums
        // console.log(`first number clicked is: ${finalOperandValue}`);
        passToDisplay(finalOperandValue);
      }
  });
  }
}

// this is the "display" for the calculator
function passToDisplay(number) {
  displayValue = calcDisplay.textContent = number;
  console.log(`display value is: ${displayValue}`);
  return displayValue;
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
    operatorClicked = addSymbol[0].textContent;
    console.log(`the add operator button is: ${operatorClicked}`);
    if (secondFinalOperandValue != '') {
      operate(finalOperandValue, operatorClicked, secondFinalOperandValue);
      finalOperandValue = calcDisplay.textContent;
      secondFinalOperandValue = '';
    }
    return operatorClicked;
  });

  minusSymbol = document.getElementsByClassName('minusButton');
  minusSymbol[0].addEventListener('click', () => {
    operatorClicked = minusSymbol[0].textContent;
    console.log(`the subtract operator button is: ${operatorClicked}`);
    return operatorClicked;  
  });

  divisionSymbol = document.getElementsByClassName('divideButton');
  divisionSymbol[0].addEventListener('click', () => {
    operatorClicked = divisionSymbol[0].textContent;
    console.log(`the division operator button is: ${operatorClicked}`);
    return operatorClicked;  
  });

  multiplicationSymbol = document.getElementsByClassName('multiplyButton');
  multiplicationSymbol[0].addEventListener('click', () => {
    operatorClicked = multiplicationSymbol[0].textContent;
    console.log(`the multiply operator button is: ${operatorClicked}`);
    return operatorClicked;
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
    operate(finalOperandValue, operatorClicked, secondFinalOperandValue);
    finalOperandValue = '';
    operatorClicked = '';
    secondFinalOperandValue = '';
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
    displayValue = calcDisplay.textContent = 0;
    finalOperandValue = '';
    secondFinalOperandValue = '';
    operatorClicked = '';
    answer = '';
    console.log(`the displayValue is: ${displayValue}`)
  });
}

// does addition operation
function add(firstNum, secondNum) {
  answer = Number(firstNum) + Number(secondNum); // not sure why I have to declare the number type here again..
  answer = Math.round(answer * 100) / 100;
  return answer;
};

// does subtraction operation
function subtract(firstNum, secondNum) {
  answer = firstNum - secondNum;
  answer = Math.round(answer * 100) / 100;
  // console.log(`the subtraction answer is: ${answer}`);
  return answer;
}

// does multiplication operation
function multiply(firstNum, secondNum) {
  answer = firstNum * secondNum;
  answer = Math.round(answer * 100) / 100;
  // console.log(`the multiplication answer is: ${answer}`);
  // displayValue = answer;
  return answer;
}

// does division operation
function divide(firstNum, secondNum) {
  answer = firstNum / secondNum;
  answer = Math.round(answer * 100) / 100;
  // console.log(`the division answer is: ${answer}`);
  return answer;
}

// operate function takes in three params and depending on the operator in the param
// it sends it to one of the functions defined above
function operate(firstNum, arithmeticOperator, secondNum) {
  if (arithmeticOperator === "*") {
    if (answer == 0) {
      passToDisplay(multiply(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${answer}`);
    }
    else {
      firstNum = answer;
      secondNum = 0;
      secondNum = secondFinalOperandValue;
      console.log(`firstnum is ${firstNum}`);
      console.log(`secondnum is ${secondNum}`);
      passToDisplay(multiply(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${answer}`);
    }
  }
  else if (arithmeticOperator === "/") {
    if (answer == 0) {
      passToDisplay(divide(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${answer}`);
    }
    else {
      firstNum = answer;
      secondNum = 0;
      secondNum = secondFinalOperandValue;
      console.log(`firstnum is ${firstNum}`);
      console.log(`secondnum is ${secondNum}`);
      passToDisplay(divide(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${answer}`);
    }
  }
  else if (arithmeticOperator === "+") {
    if (answer == 0) {
      passToDisplay(add(firstNum, secondNum)); 
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${answer}`); 
    }
    else {
      firstNum = answer;
      secondNum = 0;
      secondNum = secondFinalOperandValue;
      console.log(`firstnum is ${firstNum}`);
      console.log(`secondnum is ${secondNum}`);
      passToDisplay(add(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${answer}`); 
    }
  }
  else if (arithmeticOperator === "-") {
    if (answer == 0) {
      passToDisplay(subtract(firstNum, secondNum)); // have if/else? if dispalyvalue is nil do math else set to answer?  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${answer}`);
    }
    else {
      firstNum = answer;
      secondNum = 0;
      secondNum = secondFinalOperandValue;
      console.log(`firstnum is ${firstNum}`);
      console.log(`secondnum is ${secondNum}`);
      passToDisplay(subtract(firstNum, secondNum));  
      console.log(`the math that's happening: ${firstNum} ${arithmeticOperator} ${secondNum}, the answer is ${answer}`);
    }
  }
  else {
    console.log("invalid operator. please enter arithmetic operator");
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
// current issue:
// 1. trying to figure out how to chain operations without pressing the = button

// notes
// 1. I think I figured out how to get the buttons function to be separated from the event listener for the numbers
// 2. will try and replicate that for the operation buttons after committing the current working code -- done, I think this works for all buttons now