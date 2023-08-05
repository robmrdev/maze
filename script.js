//PRIMER LABERINTO
document.addEventListener("DOMContentLoaded", function () {
    const entrance = document.querySelector(".entrance");
    const finish = document.querySelector(".finish");
    const walls = document.querySelectorAll(".wall");
    const mazeContainer = document.querySelector(".mazeContainer1");
    
    let gameStarted = false;


    entrance.addEventListener("click", function () {
        if (!gameStarted) {
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

    mazeContainer.addEventListener("mouseover", function (event) {
        if (gameStarted) {
            if (event.target.classList.contains("wall")) {
                handleLoss();
            } else if (event.target === mazeContainer) {
                handleLoss();
            }
        }
    });

    finish.addEventListener("mouseenter", function () {
        if (gameStarted) {
            handleWin();
            mazeContainer.removeEventListener("mouseover", handleLoss);
        }
    });

    walls.forEach((wall) => {
        wall.addEventListener("mouseenter", handleLoss);
    });
});



//SEGUNDO LABERINTO



function detectarMovimientoMouse(divId, direction) {
    const miDiv = document.getElementById(divId);
    
    miDiv.addEventListener('mouseleave', (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;

      const divRect = miDiv.getBoundingClientRect();
      const divTop = divRect.top;
      const divBottom = divRect.bottom;
      const divLeft = divRect.left;
      const divRight = divRect.right;

      if (direction === 'down' && mouseY > divBottom) {
        alert('DOWN');
      } 
      if (direction ==='right' && mouseX > divRight){
        alert('RIGHT')
      } 
      if (direction ==='left' && mouseX < divLeft){
        alert('LEFT')
      }
      if (direction === 'up' && mouseY < divTop) {
        alert('UP');
        console.log(divTop)
      } 
    });
}
  
  detectarMovimientoMouse('upDownLeft', 'left')
  detectarMovimientoMouse('upDownLeft', 'down');
  detectarMovimientoMouse('upDownLeft', 'up');
  

  detectarMovimientoMouse('upRight', 'up')
  detectarMovimientoMouse('upRight', 'right');



  detectarMovimientoMouse('upLeftRight', 'up')
  detectarMovimientoMouse('upLeftRight', 'left');
  detectarMovimientoMouse('upLeftRight', 'right');


  detectarMovimientoMouse('downLeftRight', 'down')
  detectarMovimientoMouse('downLeftRight', 'left');
  detectarMovimientoMouse('downLeftRight', 'right');



  detectarMovimientoMouse('downLeft', 'down')
  detectarMovimientoMouse('downLeft', 'left');

  detectarMovimientoMouse('down', 'down')

  detectarMovimientoMouse('upDownRight', 'up')
  detectarMovimientoMouse('upDownRight', 'down');
  detectarMovimientoMouse('upDownRight', 'right');

  
  detectarMovimientoMouse('upLeft', 'up')
  detectarMovimientoMouse('upLeft', 'left');

  detectarMovimientoMouse('upDown', 'up')
  detectarMovimientoMouse('upDown', 'down');

  detectarMovimientoMouse('left', 'left');

  
  detectarMovimientoMouse('downRight', 'down')
  detectarMovimientoMouse('downRight', 'right');

  detectarMovimientoMouse('upDownRight', 'up')
  detectarMovimientoMouse('upDownRight', 'down');
  detectarMovimientoMouse('upDownLeft', 'left');
  
  detectarMovimientoMouse('down', 'down');