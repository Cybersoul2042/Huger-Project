document.addEventListener("DOMContentLoaded", () => {
    var _a, _b, _c;
    (_a = document.getElementById("charts")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => ShowPage("charts"));
    (_b = document.getElementById("members")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => ShowPage("members"));
    (_c = document.getElementById("utilities")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => ShowPage("utilities"));
    ShowPage("charts");
    GridGenerator("grid1");
    GridGenerator("grid2");
    var cells = document.querySelectorAll(".cell1");
    cells.forEach(cell => {
        cell === null || cell === void 0 ? void 0 : cell.addEventListener("click", () => {
            console.log(cell.children[0]);
            //@ts-ignore
            cell.children[0].style.backgroundColor = "#8c76fb";
            //@ts-ignore
            cell.children[0].style.opacity = "100%";
            var cellPos = cell.getAttribute("cell-pos");
            console.log(cellPos);
            var cells2 = document.querySelectorAll(".cell2");
            cells2.forEach(cell2 => {
                if (cell2.getAttribute("cell-pos") == cellPos) {
                    //@ts-ignore
                    cell2.children[0].style.backgroundColor = "#8c76fb";
                    //@ts-ignore
                    cell2.children[0].style.opacity = "50%";
                }
            });
        });
    });
});
function ShowPage(pageId) {
    console.log("amom");
    const pager = document.querySelector(`.${pageId}-container`);
    const body = document.querySelectorAll(".middle");
    if (pageId == "charts") {
        pager.style.display = "block";
        document.querySelector('.members-container').style.display = "none";
        document.querySelector('.utilities-container').style.display = "none";
    }
    else if (pageId == "members") {
        pager.style.display = "block";
        document.querySelector('.charts-container').style.display = "none";
        document.querySelector('.utilities-container').style.display = "none";
    }
    else if (pageId == "utilities") {
        pager.style.display = "block";
        document.querySelector('.members-container').style.display = "none";
        document.querySelector('.charts-container').style.display = "none";
    }
}
function GridGenerator(gridcontainer) {
    const grid = document.querySelector(`.${gridcontainer}`);
    // Use a nested for loop to create the grid cells
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 24; j++) {
            const cell = document.createElement('div');
            if (gridcontainer == "grid1") {
                cell.classList.add("cell1");
            }
            else {
                cell.classList.add("cell2");
            }
            cell.classList.add(`cell`);
            cell.setAttribute("cell-pos", `${i}${j}`);
            grid.appendChild(cell);
            const cellData = document.createElement('div');
            cellData.classList.add("cell-data");
            cell.appendChild(cellData);
            if (j <= 5 && i == 1 && gridcontainer == "grid2") {
                //@ts-ignore
                cell.children[0].style.backgroundColor = "#8c76fb";
            }
        }
    }
}
function TimeSelector(clickedcell) {
    console.log("hello`");
    var cellClasses = clickedcell.classList;
    console.log(cellClasses);
}
//# sourceMappingURL=calendar.js.map