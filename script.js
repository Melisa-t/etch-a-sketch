const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-size-button")


gridButton.addEventListener("click", () => setGrid())

// dividing i by 100 gives the width and height % of the grids

function setGrid () {
    cleanGrid()
    console.log("hi")
    let gridSize = prompt("Please choose grid size!")
        for (let x = 0; x <gridSize; x++) {
            for (let i= 0; i<gridSize; i++) { 
                    const grid = document.createElement("div");
                    grid.classList.add("grid");
                    container.appendChild(grid);
                    grid.setAttribute("style", `width: ${(100/gridSize)}%; height: ${(100/gridSize)}%`);
                
            }
            }


            

}


function cleanGrid() {
    const cleanGridList = document.querySelectorAll(".grid")
    console.log(cleanGridList)
    if (!cleanGridList || cleanGridList.length <= 0 )  {
        return 
    } 
    console.log(cleanGridList)
    for(let y = 0; y < cleanGridList.length; y++) {
        cleanGridList[y].remove()
    } 


}