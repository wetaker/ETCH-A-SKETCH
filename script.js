const numRows = 16
const numCols = 16


const containerDiv = document.querySelector(".main-container");
const containerHeight = containerDiv.offsetHeight;
const containerWidth = containerDiv.offsetWidth;

for (var i = 0; i<numRows; i++) {
	for (var j = 0; j<numCols; j++) {
	var div = document.createElement('div');
	div.classList.add("grid-square");
	div.style.width = String(containerWidth/numCols) + "px";
	div.style.height = String(containerHeight/numRows) + "px";
	//div.style.height = "300px";
	containerDiv.appendChild(div);
	if (i==0) {
		console.log(div.offsetHeight);
		console.log(div.offsetWidth);
		}
	}
}