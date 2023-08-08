


let level1 = [
    [1,0,1,0],
    [1,1,1,1],
    [1,0,1,0],
    [1,0,1,1]
]
let level2 = [
    [1,0,1,0,0,1],
    [1,0,1,1,1,1],
    [1,0,0,1,0,0],
    [1,1,1,1,1,1],
    [1,0,1,0,0,1],
    [1,0,1,1,0,1]
]
let level3 = [
    [1,0,1,0,0,1,0,1,0,1],
    [1,0,1,1,1,1,0,1,1,1],
    [1,0,0,1,0,0,0,1,0,0],
    [1,1,0,1,1,1,1,1,1,1],
    [0,1,0,1,0,0,0,0,0,1],
    [0,1,0,1,0,1,1,1,1,1],
    [0,1,1,1,0,1,0,0,0,0],
    [0,1,0,0,0,1,0,1,1,1],
    [1,1,1,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,1,1,0,1]
]


let mazeArray = "";
let maze = document.getElementById("maze2Container")
let wolf = document.getElementById("wolf")
let meat = document.getElementById("meat")
let levelSelector = document.getElementById("levelSelect")
let gameStarted = false;



document.addEventListener("mousemove", function (event) {
  if (gameStarted) {
    const mazeRect = maze.getBoundingClientRect(); // Obtén la posición y tamaño del contenedor "maze2Container"
    const x = event.pageX - mazeRect.left; // Ajusta la posición en relación con el contenedor
    const y = event.pageY - mazeRect.top; // Ajusta la posición en relación con el contenedor

    // Verifica si el lobo está dentro de los límites del contenedor
    if (x >= 0 && x <= mazeRect.width && y >= 0 && y <= mazeRect.height) {
      wolf.style.left = `${x - wolf.clientWidth / 2}px`;
      wolf.style.top = `${y - wolf.clientHeight / 2}px`;
    }
  }
});

levelSelector.addEventListener("change", function(){
    let level = levelSelector.value;
    if(level==1){
        mazeArray = level1;
    } else if (level==2){
        mazeArray = level2;
    } else if (level==3){
        mazeArray = level3;
    }
    maze.innerHTML=`
    <div id=wolf></div>
    <img src="./img/meat.png" alt="meat" id="meat"></img>
    `

    wolf = document.getElementById("wolf");
  wolf.style.backgroundImage = `url('./img/wolf.png')`;
  wolf.addEventListener("load", function () {
    createMaze();
  });
    createMaze()


})


function createMaze () {
    
    for (let i=0; i<mazeArray.length; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < mazeArray[i].length; j++) {
            let cell = document.createElement("div");
            cell.classList.add('cell')
            if (mazeArray[i][j] == 0){
                cell.classList.add("wall")
            }
            row.appendChild(cell);
        }
        maze.appendChild(row);
    }
}

    document.addEventListener("DOMContentLoaded", function () {
    
        
    
        maze.addEventListener("click", function(event) {
            if (event.target.id === "wolf" && !gameStarted) {
                gameStarted = true;
                alert("¡Comenzaste el juego! Intenta llegar al punto de destino (Finish).");
            }
        });
    
        function handleLoss() {
            if (gameStarted) {
                gameStarted = false;
                alert("¡Perdiste! Te saliste del camino.");
            }
        }
    
        function handleWin() {
            if (gameStarted) {
                gameStarted = false;
                alert("¡Ganaste! Llegaste al punto de destino (Finish).");
            }
        }


        maze.addEventListener("mouseover", function (event) {
            if (gameStarted && event.target.id === "meat") {
                handleWin();
            }
        });
        
    });

    maze.addEventListener("mouseover", function (event) {
        if (gameStarted && event.target.classList.contains("wall")) {
            alert("¡Cuidado! Estás tocando una pared.");
        }
    });
    
    maze.addEventListener("mouseout", function (event) {
        if (gameStarted && event.relatedTarget === null) {
            alert("¡Saliste del laberinto! Juego reiniciado.");
            gameStarted = false;
            wolf.style.left = "0px";
            wolf.style.top = "0px";
        }
    });

createMaze ()
