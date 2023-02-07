// assignment: https://www.theodinproject.com/lessons/foundations-etch-a-sketch

const container = document.querySelector('#containerGrid');

// trying to create a looping function to create squares
// function doubleSquare(num) {
//   for (e = 0; e < (num * num); e++ ) {
//     // console.log(e);
//     let gridElement = document.createElement('div');
//     gridElement.setAttribute("class", "singleGridElement");
//     gridElement.style.outline = 'solid';
//     gridElement.style.height = '1em';
//     gridElement.style.width = '1em';
//     container.appendChild(gridElement);

//     gridElement.addEventListener("mouseover", function(event) {
//       gridElement.style.backgroundColor = 'black';
//     });
//   };
// };
let root = document.querySelector(':root');

let gridSize = prompt("Please enter a number of squares per side for a new grid: ");
console.log(`user entered the number: ${gridSize}`);

root.style.setProperty('--user-input', gridSize);

function doubleSquare(num) {
  for (i = 0; i < (num * num); i++) {
    console.log(`i is: ${i}`);
    console.log(`num is: ${num}`);
    let gridElement = document.createElement('div');
    gridElement.setAttribute("class", "singleGridElement");
    gridElement.style.outline = 'solid';
    gridElement.style.height = '1em';
    gridElement.style.width = '1em';
    container.appendChild(gridElement);

    gridElement.addEventListener("mouseover", function(event) {
      gridElement.style.backgroundColor = 'black';
    });
    // container.textContent = "\n";

    for (j = 0; j < (num * num); j++) {
      console.log(`j is: ${j}`);
      let gridElement = document.createElement('div');
      gridElement.setAttribute("class", "singleGridElement");
      gridElement.style.outline = 'solid';
      gridElement.style.height = '1em';
      gridElement.style.width = '1em';
      container.appendChild(gridElement);

      gridElement.addEventListener("mouseover", function(event) {
        gridElement.style.backgroundColor = 'black';
      });
    };

  };
};

doubleSquare(2);


// nested for.. something like this?


// for (i = 0; i < e; i++) {
//   console.log(`this is i: ${i}`);
//   console.log(`this is e: ${e}`);
//   let gridElement = document.createElement('div');
//   gridElement.setAttribute("class", "singleGridElement");
//   gridElement.style.outline = 'solid';
//   gridElement.style.height = '1em';
//   gridElement.style.width = '1em';
//   container.appendChild(gridElement);

//   gridElement.addEventListener("mouseover", function(event) {
//     gridElement.style.backgroundColor = 'black';
//   });  
// }