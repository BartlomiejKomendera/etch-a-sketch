var gridSize = 24;
const body = document.querySelector("body");
const gridContainer = document.createElement("div");
const button = document.createElement("button");

renderGrid();

function renderGrid() {
    gridContainer.classList.add("grid-container");
    gridContainer.style.width = gridSize * 57 + "px";

    for (let yIndex = 0; yIndex < gridSize; yIndex++) {
        for (let xIndex = 0; xIndex < gridSize; xIndex++) {
    
            const div = document.createElement("div");
            div.className = "grid-item";
            gridContainer.appendChild(div);
            div.addEventListener("mouseover", () => {
                div.classList.replace("grid-item", "grid-item-hover");
            })
        }
    }

    button.textContent = "Change grid size";
    button.addEventListener("click", () => changeSize());
    body.append(gridContainer, button);
}

function clearGrid() {
    body.removeChild(gridContainer, button);
}

function changeSize() {
    gridSize = prompt("Enter grid size: ");
    clearGrid();
    renderGrid();
}