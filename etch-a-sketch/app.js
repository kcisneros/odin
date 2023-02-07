// assignment: https://www.theodinproject.com/lessons/foundations-etch-a-sketch

const container = document.querySelector('#containerGrid');

// lines 5-23 work for individual single grids.
// const singleGrid = document.createElement('div');

// // create element should be in a loop? create X divs.. 
// const singleGrid2 = document.createElement('div');

// singleGrid.setAttribute("id", "singleGridElement");

// singleGrid.style.outline = 'solid';
// singleGrid.style.height = '1em';
// singleGrid.style.width = '1em';

// singleGrid2.style.outline = 'solid';
// singleGrid2.style.height = '1em';
// singleGrid2.style.width = '1em';
// singleGrid2.style.display = 'grid';

// container.appendChild(singleGrid);
// container.appendChild(singleGrid2);

// trying to create a looping function to create squares
function doubleSquare(num) {
  for (e = 0; e < (num * num); e++ ) {
    let gridElement = document.createElement('div');
    gridElement.setAttribute("class", "singleGridElement");
    gridElement.style.outline = 'solid';
    gridElement.style.height = '1em';
    gridElement.style.width = '1em';
    container.appendChild(gridElement);

    gridElement.addEventListener("mouseover", function(event) {
      gridElement.style.backgroundColor = 'black';
    })
  }
}
doubleSquare(2)
