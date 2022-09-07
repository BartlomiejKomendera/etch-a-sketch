var gridSize = 16;
const body = document.querySelector("body");
const gridContainer = document.createElement("div");
const button = document.createElement("button");
gridContainer.classList.add("grid-container");
gridContainer.setAttribute("id", "grid-container");
button.textContent = "Change grid size";
button.addEventListener("click", () => changeSize());
body.append(gridContainer, button);

renderGrid();

function renderGrid() {
    
    gridContainer.style.width = gridSize * 57 + "px";
    for (let yIndex = 0; yIndex < gridSize; yIndex++) {
        for (let xIndex = 0; xIndex < gridSize; xIndex++) {
            const newDiv = document.createElement("div");
            newDiv.className = "grid-item";
            gridContainer.appendChild(newDiv);
            newDiv.addEventListener("mouseover", () => {
                newDiv.classList.replace("grid-item", "grid-item-hover");
            })
        }
    }

}

function clearGrid() {
    const gridItem = document.getElementById("grid-container");
    while(gridItem.hasChildNodes()){
        gridItem.childNodes.forEach(node => {node.parentNode.removeChild(node)});
    }
}

function changeSize() {
    gridSize = prompt("Enter grid size: ");
    clearGrid();
    renderGrid();
}