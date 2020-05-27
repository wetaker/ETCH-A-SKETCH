const numRows = 16
const numCols = 16
const containerDiv = document.querySelector(".main-container");
const containerHeight = containerDiv.offsetHeight;
const containerWidth = containerDiv.offsetWidth;


function createGrid(numRows, numCols) {
	for (var i = 0; i<numRows; i++) {
		for (var j = 0; j<numCols; j++) {
			var div = document.createElement('div');
			div.classList.add("grid-square");
			div.id = `"${i}","${j}"`
			div.style.width = String(containerWidth/numCols) + "px";
			div.style.height = String(containerHeight/numRows) + "px";
			div.addEventListener('mouseenter', e => {e.target.style.backgroundColor = "black"});
			containerDiv.appendChild(div);
		}
	}
}

function resetGrid() {
	let numCols = prompt("How many squares per side would you like in the new grid?", 16);
	let numRows = numCols;
	gridSquares = Array.from(document.querySelectorAll(".grid-square"));
	console.log(gridSquares);
	gridSquares.forEach(grid => containerDiv.removeChild(grid));
	createGrid(numRows, numCols);
}


createGrid(numRows, numCols);
btn = document.querySelector(".clear-btn");
btn.addEventListener("click", resetGrid);

// Button that on click does removeGrid then prompts to create grid with new value


