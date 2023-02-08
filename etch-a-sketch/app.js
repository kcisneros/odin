// assignment: https://www.theodinproject.com/lessons/foundations-etch-a-sketch

const container = document.querySelector('#containerGrid');
let root = document.querySelector(':root');

let gridSize = 0;

function doubleSquare(num) {
  root.style.setProperty('--user-input', gridSize);


  for (i = 0; i < gridSize; i++) {
    let gridElement = document.createElement('div');
    gridElement.setAttribute("class", "singleGridElement");
    container.appendChild(gridElement);

    for (j = 0; j < gridSize; j++) {    
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

const buttons = document.querySelectorAll('#numberPrompt');
// loop over all the buttons
buttons.forEach((button) => {
  container.innerHTML =  '';
        button.addEventListener('click', function(event) {
            do {
              gridSize = prompt("Please enter a number between 1 and 100");
            }
            while (gridSize > 100 || gridSize <= 0);
            // have to clear the container FIRST before then calling the function that makes the grid
            container.innerHTML =  '';
            // call function that makes grid
            doubleSquare();
        });
    });
