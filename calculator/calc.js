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

let finalOperandValue = '';

const calcDisplay = document.createElement('div');
calcDisplay.classList.add('calculatorDisplay');
calcContainer.appendChild(calcDisplay);

function numButtons() {
  for (i = 0; i < 10; i++) {
    const numberButton = document.createElement('button');
    numberButton.classList.add('numberButton');
    numberButton.textContent = `${i}`; 
    calcContainer.appendChild(numberButton);
    numberButton.addEventListener('click', () => {
      // firstNumberClicked = numberButton.textContent; // read number from DOM don't rely on textContent
      if (operatorClicked != "" ) { // operator button has been clicked
        secondNumberClicked = numberButton.textContent; // read number from DOM don't rely on textContent
        console.log(`second number clicked is: ${secondNumberClicked}`);
        passToDisplay(secondNumberClicked);
      }
      else { // the operator button hasn't been clicked
        firstNumberClicked = numberButton.textContent; // read number from DOM don't rely on textContent
        console.log(`first number clicked is: ${firstNumberClicked}`);
        passToDisplay(firstNumberClicked);
      }
      // finalOperandValue += buttonPressed;
      // passToDisplay(firstNumberClicked);
      // return firstNumberClicked;
    });
  };
};

function passToDisplay(number) {
  displayValue = calcDisplay.textContent = number;
  console.log(`display value is: ${displayValue}`);
  // return displayValue;
}

// user clicks number 4 ✅
// number 4 is stored in global variable called firstNumberClicked ✅
// user clicks "+" button ✅
// "+" string is stored in global var called operatorClicked ✅
// user clicks number 3 ✅
// number 3 is stored in global variable called secondNumberClicked ✅
// user clicks "=" button
// operate method is called with (firstNumberClicked, operatorClicked, secondNumberClicked) values
// then somehow calculator UI displays result of operate method

function arithmeticButtons() {
  const addSymbol = document.createElement('button');
  addSymbol.classList.add('arithmeticOperators');
  // addOperatorButton = addSymbol.textContent = "+";
  addSymbol.textContent = "+";
  calcContainer.appendChild(addSymbol);
  addSymbol.addEventListener('click', () => {
    operatorClicked = "+"; // use DOM to find value
    console.log(`the add operator button is: ${operatorClicked}`);
    return operatorClicked;
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
  equalSymbol.textContent = "=";
  calcContainer.appendChild(equalSymbol);
  equalSymbol.addEventListener('click', () => {
    equalSymbolClicked = "=";
    console.log(`the equal operator button is: ${equalSymbolClicked}`);
    operate(firstNumberClicked, operatorClicked, secondNumberClicked);
    // return equalSymbolClicked;
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
  if (arithmeticOperator === "*") {
    multiply(firstNum, secondNum);
  }
  else if (arithmeticOperator === "/") {
    divide(firstNum, secondNum);
  }
  else if (arithmeticOperator === "+") {
    passToDisplay(add(firstNum, secondNum));
  }
  else if (arithmeticOperator === "-") {
    subtract(firstNum, secondNum);
  }
  else {
    console.log("invalid operator. please enter arithmetic operator");
  }
}

// operate();

numButtons();
passToDisplay(0);
arithmeticButtons();
equalButton();
clearButton();