const grid = document.querySelector(".grid");
const scoreBoard = document.querySelectorAll(".score");
const start = document.querySelector(".start-game");
const sound = document.querySelector("audio");
const width = 20;
const cellCount = width * width;
const cells = [];
const directions = {
  left: "left",
  right: "right",
  up: "up",
  down: "down",
};

let snake = [0, 1, 2, 3];
let speed = 500;

let score = 0;

let direction = directions.right;

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement("div");
    cell.setAttribute("data-id", i);
    // outer box
    if (i >= 0 && i % width === 0 && i > 0 && i < 400) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 0 && i % width === 19 && i > 0 && i < 400) {
      cell.classList.add("wall-right", "wall");
    }
    if (i >= 0 && i < 20) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 379 && i < 401) {
      cell.classList.add("wall-bottom", "wall");
    }

    // top horizontal walls
    if (i > 21 && i < 25) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 41 && i < 45) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 34 && i < 38) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 54 && i < 58) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 27 && i < 32) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 47 && i < 52) {
      cell.classList.add("wall-top", "wall");
    }
    // top vertical walls
    if (i > 5 && i % width === 7 && i > 30 && i < 90) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 5 && i % width === 6 && i > 30 && i < 90) {
      cell.classList.add("wall-right", "wall");
    }
    if (i > 5 && i % width === 12 && i > 50 && i < 110) {
      cell.classList.add("wall-right", "wall");
    }
    if (i > 5 && i % width === 13 && i > 50 && i < 110) {
      cell.classList.add("wall-left", "wall");
    }
    // second row horizontal
    if (i > 81 && i < 85) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 101 && i < 105) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 94 && i < 98) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 114 && i < 118) {
      cell.classList.add("wall-top", "wall");
    }
    // right angles top
    if (i > 5 && i % width === 2 && i > 90 && i < 150) {
      cell.classList.add("wall-left", "wall");
    }

    if (i > 5 && i % width === 1 && i > 90 && i < 150) {
      cell.classList.add("wall-right", "wall");
    }
    if (i > 5 && i % width === 17 && i > 100 && i < 170) {
      cell.classList.add("wall-right", "wall");
    }
    if (i > 5 && i % width === 18 && i > 100 && i < 170) {
      cell.classList.add("wall-left", "wall");
    }
    // bottom horizontal
    if (i > 341 && i < 345) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 361 && i < 365) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 354 && i < 358) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 374 && i < 378) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 347 && i < 352) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 367 && i < 372) {
      cell.classList.add("wall-top", "wall");
    }
    // bottom vertical
    if (i > 5 && i % width === 7 && i > 300 && i < 366) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 5 && i % width === 6 && i > 300 && i < 366) {
      cell.classList.add("wall-right", "wall");
    }
    if (i > 5 && i % width === 13 && i > 300 && i < 366) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 5 && i % width === 12 && i > 300 && i < 366) {
      cell.classList.add("wall-right", "wall");
    }
    // bottom right angle
    if (i > 5 && i % width === 2 && i > 240 && i < 286) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 5 && i % width === 1 && i > 240 && i < 286) {
      cell.classList.add("wall-right", "wall");
    }
    if (i > 5 && i % width === 17 && i > 240 && i < 306) {
      cell.classList.add("wall-right", "wall");
    }
    if (i > 5 && i % width === 18 && i > 240 && i < 306) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 281 && i < 285) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 301 && i < 305) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 294 && i < 298) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 314 && i < 318) {
      cell.classList.add("wall-top", "wall");
    }
    //top an bottom second row middle
    if (i > 287 && i < 292) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 307 && i < 312) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 87 && i < 92) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 107 && i < 112) {
      cell.classList.add("wall-top", "wall");
    }
    // centre square top
    if (i > 127 && i < 132) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 147 && i < 152) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 167 && i < 172) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 187 && i < 192) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 5 && i % width === 8 && i > 140 && i < 180) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 5 && i % width === 7 && i > 140 && i < 180) {
      cell.classList.add("wall-right", "wall");
    }
    if (i > 5 && i % width === 12 && i > 140 && i < 180) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 5 && i % width === 11 && i > 140 && i < 180) {
      cell.classList.add("wall-right", "wall");
    }
    //centre square bottom
    if (i > 247 && i < 252) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 267 && i < 272) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 207 && i < 212) {
      cell.classList.add("wall-bottom", "wall");
    }
    if (i > 227 && i < 232) {
      cell.classList.add("wall-top", "wall");
    }
    if (i > 5 && i % width === 8 && i > 220 && i < 260) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 5 && i % width === 7 && i > 220 && i < 260) {
      cell.classList.add("wall-right", "wall");
    }
    if (i > 5 && i % width === 12 && i > 220 && i < 260) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 5 && i % width === 11 && i > 220 && i < 260) {
      cell.classList.add("wall-right", "wall");
    }
    // left and right middle uprights
    if (i > 5 && i % width === 15 && i > 160 && i < 240) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 5 && i % width === 14 && i > 160 && i < 240) {
      cell.classList.add("wall-right", "wall");
    }
    if (i > 5 && i % width === 15 && i > 160 && i < 240) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 5 && i % width === 14 && i > 160 && i < 240) {
      cell.classList.add("wall-right", "wall");
    }
    if (i > 5 && i % width === 5 && i > 160 && i < 240) {
      cell.classList.add("wall-left", "wall");
    }
    if (i > 5 && i % width === 4 && i > 160 && i < 240) {
      cell.classList.add("wall-right", "wall");
    }

    //cell.textContent = i;
    cells.push(cell);
    grid.appendChild(cell);
  }
}
createGrid();

function setDirection(event) {
  // right
  if (event.keyCode === 39) {
    if (direction !== directions.left) {
      if (!cells[snake[snake.length - 1]].classList.contains("wall-right")) {
        direction = directions.right;
      }
    }
    // up
  } else if (event.keyCode === 38) {
    if (direction !== directions.down) {
      if (!cells[snake[snake.length - 1]].classList.contains("wall-top")) {
        direction = directions.up;
      }
    }
    // left
  } else if (event.keyCode === 37) {
    if (direction !== directions.right) {
      if (!cells[snake[snake.length - 1]].classList.contains("wall-left")) {
        direction = directions.left;
      }
    }
    // down
  } else if (event.keyCode === 40) {
    if (direction !== directions.up) {
      if (!cells[snake[snake.length - 1]].classList.contains("wall-bottom")) {
        direction = directions.down;
      }
    }
  } else if (event.keyCode === 81) {
    stopGame();
  }
}

document.addEventListener("keyup", setDirection);

function removeSnake() {
  cells.forEach((cell) => cell.classList.remove("snake"));
}

function drawSnake() {
  const snakeHead = cells[snake[snake.length - 1]];
  snake.forEach((snakeSection) => cells[snakeSection].classList.add("snake"));
  cells.forEach((cell) => cell.classList.remove("head"));
  snakeHead.classList.add("head");
}

function renderSnake() {
  removeSnake();
  if (direction === directions.right) {
    // check for the walls around the snakes head and see if the snake array can be updated to move
    // if (
    //   !cells[snake[snake.length - 1] + 1].classList.contains('wall-left') ||
    //   !cells[snake[snake.length - 1] + 1].classList.contains('wall-right')
    // ) {
    snake.shift();
    snake.push(snake[snake.length - 1] + 1);
    // }
  } else if (direction === directions.left) {
    snake.shift();
    snake.push(snake[snake.length - 1] - 1);
  } else if (direction === directions.down) {
    snake.shift();
    snake.push(snake[snake.length - 1] + 20);
  } else if (direction === directions.up) {
    snake.push(snake[snake.length - 1] - 20);
    snake.shift();
  }
  colission();

  //timer = setTimeout(renderSnake, speed)

  if (cells[snake[snake.length - 1]].classList.contains("pizza")) {
    score++;
    cells[snake[snake.length - 1]].classList.remove("pizza");
    snake.unshift(snake[0]);
    sound.src = "./assets/eat-pizza.m4a";
    sound.play();
    addPizza();
    scoreBoard.innerText = score;
  }
  drawSnake();
}
// game ends when snake collides with its own tail
function colission() {
  if (snake.slice(1).includes(snake[0])) {
    return stopGame();
  }
}

// need to create a loop to check for current index of snake
//need to generate a random index number to place food

function addPizza() {
  let randomIndex = Math.floor(Math.random() * cellCount);
  while (cells[randomIndex].classList.contains("snake")) {
    randomIndex = Math.floor(Math.random() * cellCount);
  }
  cells[randomIndex].classList.add("pizza");
}
addPizza();

let game;
function startGame() {
  game = setInterval(renderSnake, 500);
  sound.src = "./assets/startup.m4a";
  sound.play();
  scoreBoard.innerText = score;
}
function stopGame() {
  clearInterval(game);
  sound.src = "./assets/colission .m4a";
  sound.play();
  console.log("game over");
}

start.addEventListener("click", startGame);

timer = setTimeout(renderSnake, speed);
