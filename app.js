


let level1 = [
    [1, 0, 1, 0],
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 1, 1]
]
let level2 = [
    [1, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 0, 1]
]
let level3 = [
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 1, 1, 0, 1]
]


let mazeArray = "";
let maze = document.getElementById("maze2Container")
let wolf = document.getElementById("wolf");
let meat = document.getElementById("meat")
let levelSelector = document.getElementById("levelSelect")
let gameStarted = false;


levelSelector.addEventListener("change", function () {
    let level = levelSelector.value;
    if (level == 1) {
        mazeArray = level1;
    } else if (level == 2) {
        mazeArray = level2;
    } else if (level == 3) {
        mazeArray = level3;
    }
    maze.innerHTML = `
    <div id=wolf></div>
    <img src="./img/meat.png" alt="meat" id="meat" class="meat"></img>
    `
    wolf = document.getElementById("wolf");
    createMaze()
})


function createMaze() {
    for (let i = 0; i < mazeArray.length; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < mazeArray[i].length; j++) {
            let cell = document.createElement("div");
            cell.classList.add('cell')
            if (mazeArray[i][j] == 0) {
                cell.classList.add("wall")
            }
            row.appendChild(cell);
        }
        maze.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    maze.addEventListener("click", function (event) {
        if (event.target.id === "wolf" && !gameStarted) {
            gameStarted = true;
            alert("¡Comenzaste el juego! Intenta llegar al punto de destino (Finish).");
        }
    });

    function handleLoss() {
        if (gameStarted) {
            gameStarted = false;
            alert("¡Perdiste! Te saliste del camino.");
            wolf.style.top = "5px"
            wolf.style.left = "5px"
        }
    }

    function handleWin() {
        if (gameStarted) {
            gameStarted = false;
            alert("¡Ganaste! Llegaste al punto de destino (Finish).");
            wolf.style.top = "5px"
            wolf.style.left = "5px"
        }
    }


    maze.addEventListener("mousemove", function (event) {
        const mazeRect = maze.getBoundingClientRect();
        const x = event.pageX - mazeRect.left;
        const y = event.pageY - mazeRect.top;

        if (gameStarted && (x < 0 || x > mazeRect.width || y < 0 || y > mazeRect.height)) {
            handleLoss();
            console.log("Out uf Maze");
        } else if (gameStarted && event.target.id === "meat") {
            handleWin();
            console.log("You Win")
        } else if (gameStarted) {
            if (x >= 0 && x <= mazeRect.width && y >= 0 && y <= mazeRect.height) {
                wolf.style.left = `${x - wolf.clientWidth / 2}px`;
                wolf.style.top = `${y - wolf.clientHeight / 2}px`;

                const rowIndex = Math.floor(y / (mazeRect.height / mazeArray.length));
                const colIndex = Math.floor(x / (mazeRect.width / mazeArray[0].length));
                if (mazeArray[rowIndex][colIndex] === 0) {
                    handleLoss();
                    console.log("wall")
                }
            }
        }
    });
});


createMaze()
