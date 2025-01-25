const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-size-button")



gridButton.addEventListener("click", () => setGrid());

function changeColor(e) {
    e.preventDefault()
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.background = `#${randomColor}`;
    e.target.style.opacity = "0.7"
    e.target.style.transitionDuration = "0.4s";
    
}

// dividing i by 100 gives the width and height % of the grids

function setGrid () {
    
    cleanGrid()
    
    let gridSize = Number(prompt("Please choose grid size between 1-100!"))
    if(!gridSize || gridSize > 100) {
        return setGrid()
    }
        for (let x = 0; x <gridSize; x++) {
            for (let i = 0; i<gridSize; i++) { 
                    const grid = document.createElement("div");
                    grid.classList.add("grid");
                    container.appendChild(grid);
                    grid.setAttribute("style", `width: ${(100/gridSize)}% !important; height: ${(100/gridSize)}% !important`);
                    
                    grid.addEventListener("mouseover", changeColor);
            }
            }   
  
}

function cleanGrid() {
    const cleanGridList = document.querySelectorAll(".grid")
    if (!cleanGridList || cleanGridList.length <= 0 )  {
        return 
    } 
    for(let y = 0; y < cleanGridList.length; y++) {
        cleanGridList[y].remove()
    } 
}