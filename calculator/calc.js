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
let secondFinalOperandValue = '';

const calcDisplay = document.createElement('div');
calcDisplay.classList.add('calculatorDisplay');
calcContainer.appendChild(calcDisplay);

// // const numberButton = document.createElement('button');

// let numberButton = '';

// // create buttons first
// function numButtons() {
//   for (i = 0; i < 10; i++) {
//     numberButton = document.createElement('button');
//     numberButton.classList.add('numberButton');
//     numberButton.textContent = `${i}`;
//     calcContainer.appendChild(numberButton);
//   }
//   console.log(`number button is: ${numberButton.length}`);

// }

// // numberButton = document.getElementsByClassName('numberButton');

// // create event listener for buttons
// function numButtonEventListener() {
//   numberButton = document.getElementsByClassName('numberButton');
//   // console.log(`numbner button is ${numberButton}`);
//   for (let i = 0; i < numberButton.length; i++) {
//     // console.log(`numbner button is ${numberButton[i]}`);
//     numberButton[i].addEventListener('click', () => {
//       if (operatorClicked != "" ) { // operator button has been clicked
//         // second if? if secondNumberClicked is not empty then add to it, else make it just second number?
//         secondNumberClicked = Number(numberButton[i].textContent); 
//         secondFinalOperandValue += secondNumberClicked;
//         console.log(`the second number value clicked is: ${secondNumberClicked}`);
//         console.log(`the second operand value clicked is: ${secondFinalOperandValue}`); // shows double digit nums
//         // console.log(`second number clicked is: ${secondFinalOperandValue}`);
//         console.log(`number button is ${numberButton[i]}`);
//         passToDisplay(secondFinalOperandValue); //commenting this line out seemed to clear out the display value issue i was seeing where it was adding the string data type numbers together (aka 21 instead of just 2 and just 1)
//         // passToDisplay(secondNumberClicked);
//       }
//       else { // the operator button hasn't been clicked
//         firstNumberClicked = numberButton[i].textContent;
//         finalOperandValue += firstNumberClicked;
//         console.log(`the first number clicked is: ${firstNumberClicked}`);
//         console.log(`the first operand clicked is: ${finalOperandValue}`); // shows double digit nums
//         // console.log(`first number clicked is: ${finalOperandValue}`);
//         console.log(`number button is ${numberButton[i]}`);

//         passToDisplay(finalOperandValue);
//       }
//   });
//   }
// }

function numButtons() {
  for (i = 0; i < 10; i++) {
    const numberButton = document.createElement('button');
    numberButton.classList.add('numberButton');
    numberButton.textContent = `${i}`; 
    calcContainer.appendChild(numberButton);
    numberButton.addEventListener('click', () => {
      if (operatorClicked != "" ) { // operator button has been clicked
        // second if? if secondNumberClicked is not empty then add to it, else make it just second number?
        secondNumberClicked = Number(numberButton.textContent); 
        secondFinalOperandValue += secondNumberClicked;
        console.log(`the second number value clicked is: ${secondNumberClicked}`);
        console.log(`the second operand value clicked is: ${secondFinalOperandValue}`); // shows double digit nums

        // console.log(`second number clicked is: ${secondFinalOperandValue}`);
        passToDisplay(secondFinalOperandValue); //commenting this line out seemed to clear out the display value issue i was seeing where it was adding the string data type numbers together (aka 21 instead of just 2 and just 1)
        // passToDisplay(secondNumberClicked);

      }
      else { // the operator button hasn't been clicked
        firstNumberClicked = Number(numberButton.textContent);
        finalOperandValue += firstNumberClicked;
        console.log(`the first number clicked is: ${firstNumberClicked}`);
        console.log(`the first operand clicked is: ${finalOperandValue}`); // shows double digit nums
        // console.log(`first number clicked is: ${finalOperandValue}`);
        passToDisplay(finalOperandValue);
      }
    });
  };
};


function passToDisplay(number) {
  displayValue = calcDisplay.textContent = number;
  console.log(`display value is: ${displayValue}`);
  return displayValue;
}

function arithmeticButtons() {
  const addSymbol = document.createElement('button');
  addSymbol.classList.add('arithmeticOperators');
  addSymbol.textContent = "+";
  calcContainer.appendChild(addSymbol);
  addSymbol.addEventListener('click', () => {
    operatorClicked = addSymbol.textContent;
    console.log(`the add operator button is: ${operatorClicked}`);
    return operatorClicked;
  });

  const minusSymbol = document.createElement('button');
  minusSymbol.classList.add('arithmeticOperators');
  minusSymbol.textContent = "-";
  calcContainer.appendChild(minusSymbol);
  minusSymbol.addEventListener('click', () => {
    operatorClicked = minusSymbol.textContent;
    console.log(`the subtract operator button is: ${operatorClicked}`);
    return operatorClicked;
  });

  const divisionSymbol = document.createElement('button');
  divisionSymbol.classList.add('arithmeticOperators');
  divisionSymbol.textContent = "/";
  calcContainer.appendChild(divisionSymbol);
  divisionSymbol.addEventListener('click', () => {
    operatorClicked = divisionSymbol.textContent;
    console.log(`the divide operator button is: ${operatorClicked}`);
    return operatorClicked;
  });

  const multiplicationSymbol = document.createElement('button');
  multiplicationSymbol.classList.add('arithmeticOperators');
  multiplicationSymbol.textContent = "*";
  calcContainer.appendChild(multiplicationSymbol);
  multiplicationSymbol.addEventListener('click', () => {
    operatorClicked = multiplicationSymbol.textContent;
    console.log(`the multiply operator button is: ${operatorClicked}`);
    return operatorClicked;
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
    operate(finalOperandValue, operatorClicked, secondFinalOperandValue);
    finalOperandValue = 0;
    operatorClicked = '';
    secondFinalOperandValue = 0;
  });
}

function clearButton() {
  const clearSymbol = document.createElement('button');
  clearSymbol.classList.add('arithmeticOperators');
  clearSymbol.textContent = 'Clear';
  calcContainer.appendChild(clearSymbol);
  clearSymbol.addEventListener('click', () => {
    displayValue = calcDisplay.textContent = 0;
    finalOperandValue = '';
    secondFinalOperandValue = '';
    operatorClicked = '';
    console.log(`the displayValue is: ${displayValue}`)
  });
}
 
function add(firstNum, secondNum) {
  answer = Number(firstNum) + Number(secondNum); // not sure why I have to declare the number type here again..
  // console.log(`the addition answer is: ${answer}`);
  return answer;
};

function subtract(firstNum, secondNum) {
  answer = firstNum - secondNum;
  // console.log(`the subtraction answer is: ${answer}`);
  return answer;
}

function multiply(firstNum, secondNum) {
  answer = firstNum * secondNum;
  // console.log(`the multiplication answer is: ${answer}`);
  // displayValue = answer;
  return answer;
}

function divide(firstNum, secondNum) {
  answer = firstNum / secondNum;
  // console.log(`the division answer is: ${answer}`);
  return answer;
}

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
    // 12 + 7 - 5 * 3 =
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
// numButtonEventListener();
arithmeticButtons();
equalButton();
clearButton();



// user clicks number 4 ✅
// number 4 is stored in global variable called firstNumberClicked ✅
// user clicks "+" button ✅
// "+" string is stored in global var called operatorClicked ✅
// user clicks number 3 ✅
// number 3 is stored in global variable called secondNumberClicked ✅
// user clicks "=" button ✅
// operate method is called with (firstNumberClicked, operatorClicked, secondNumberClicked) values ✅
// then somehow calculator UI displays result of operate method

// change to number. current types are strings ✅
// fix rest of operators. should be similar to add ✅
// get clear button to entirely clear everything from the saved state ✅
// when I type 99 99 shuold appear. when I hit plus it shuold store it. ✅
// do multi-number operands
// operator would store number pressed. 