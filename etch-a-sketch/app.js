// assignment: https://www.theodinproject.com/lessons/foundations-etch-a-sketch

const container = document.querySelector('#containerGrid');
let root = document.querySelector(':root');

let gridSize = 0;

do {
  gridSize = prompt("Please enter a number between 1 and 100");
  console.log(`in the if, gridsize is: ${gridSize}`);
}
while (gridSize > 100 || gridSize <= 0);

console.log(`before the while, the gridsize is: ${gridSize}`);

function doubleSquare(num) {
  root.style.setProperty('--user-input', gridSize);

  console.log(`in the function, gridsize is: ${gridSize}`);

  for (i = 0; i < gridSize; i++) {
    let gridElement = document.createElement('div');
    gridElement.setAttribute("class", "singleGridElement");
    container.appendChild(gridElement);


    for (j = 0; j < gridSize -1; j++) {    
      let square = document.createElement('div');
      square.setAttribute("class", "individualSquare");
      square.style.outline = 'solid';
      square.style.height = '1em';
      square.style.width = '1em';
      gridElement.appendChild(square);

      square.addEventListener("mouseover", function(event) {
        square.style.backgroundColor = 'black';
      });
    }
  }
}

doubleSquare();
