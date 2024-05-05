document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("charts")?.addEventListener("click", () => ShowPage("charts"))
    document.getElementById("members")?.addEventListener("click", () => ShowPage("members"))
    document.getElementById("utilities")?.addEventListener("click", () => ShowPage("utilities"))
    ShowPage("charts");
    GridGenerator("grid1");
    GridGenerator("grid2");
    var cells = document.querySelectorAll(".cell1")
    cells.forEach(cell => {
        cell?.addEventListener("click", () => {
            console.log(cell.children[0])
            //@ts-ignore
            cell.children[0].style.backgroundColor = "#8c76fb";
            //@ts-ignore
            cell.children[0].style.opacity = "100%";
            var cellPos = cell.getAttribute("cell-pos");
            console.log(cellPos)
            var cells2 = document.querySelectorAll(".cell2")
            cells2.forEach(cell2 => {
                if(cell2.getAttribute("cell-pos") == cellPos){
                    //@ts-ignore
                    cell2.children[0].style.backgroundColor = "#8c76fb";
                    //@ts-ignore
                    cell2.children[0].style.opacity = "50%"
                }
            });
        })
    });
})

function ShowPage(pageId:string)
{
    console.log("amom")
    const pager = document.querySelector(`.${pageId}-container`) as HTMLElement;
    const body = document.querySelectorAll(".middle");

    if(pageId == "charts"){
        pager.style.display = "block";
        document.querySelector<HTMLElement>('.members-container')!.style.display = "none";
        document.querySelector<HTMLElement>('.utilities-container')!.style.display = "none";
    }
    else if(pageId == "members"){
        pager.style.display = "block";
        document.querySelector<HTMLElement>('.charts-container')!.style.display = "none";
        document.querySelector<HTMLElement>('.utilities-container')!.style.display = "none";
    }
    else if(pageId == "utilities"){
        pager.style.display = "block";
        document.querySelector<HTMLElement>('.members-container')!.style.display = "none";
        document.querySelector<HTMLElement>('.charts-container')!.style.display = "none";
    }

}

function GridGenerator(gridcontainer:string)
{
    const grid = document.querySelector(`.${gridcontainer}`);

    // Use a nested for loop to create the grid cells
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 24; j++) {
            const cell = document.createElement('div');
            if(gridcontainer == "grid1"){
                cell.classList.add("cell1")
            }
            else{
                cell.classList.add("cell2")
            }
            cell.classList.add(`cell`);
            cell.setAttribute("cell-pos", `${i}${j}`);
            grid!.appendChild(cell);
            
            const cellData = document.createElement('div')
            cellData.classList.add("cell-data")
            cell.appendChild(cellData)

            if(j <= 5 && i == 1 && gridcontainer == "grid2"){
                //@ts-ignore
                cell.children[0].style.backgroundColor = "#8c76fb";
            }
        }
    }
}

function TimeSelector(clickedcell:any)
{
    console.log("hello`")
    var cellClasses = clickedcell.classList;
    console.log(cellClasses)
}
