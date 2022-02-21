const grid = document.querySelector(".grid");
const scoreBoard = document.querySelectorAll(".score");
const squares = document.querySelectorAll(".grid div");
const width = 20;
const cellCount = width * width;
const cells = [];

let snake = [0, 1, 2, 3];
let score = 0;

const directions = {
  left: "left",
  right: "right",
  up: "up",
  down: "down",
};

let direction = directions.right;

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement("div");
    cell.setAttribute("data-id", i);
    cell.textContent = i;
    cells.push(cell);
    grid.appendChild(cell);
  }
}
createGrid();

function setDirection(event) {
  if (event.keyCode === 39) {
    if (direction !== directions.left) {
      direction = directions.right;
    }
  } else if (event.keyCode === 38) {
    if (direction !== directions.down) {
      direction = directions.up;
    }
  } else if (event.keyCode === 37) {
    if (direction !== directions.right) {
      direction = directions.left;
    }
  } else if (event.keyCode === 40) {
    if (direction !== directions.up) {
      direction = directions.down;
    }
  } else if (event.keyCode === 81) {
    stopGame();
  }
  console.log(direction);
}

document.addEventListener("keyup", setDirection);

function removeSnake() {
  cells.forEach((cell) => cell.classList.remove("snake"));
}

function drawSnake() {
  snake.forEach((snakeSection) => cells[snakeSection].classList.add("snake"));
  cells.forEach((cell) => cell.classList.remove("head"));
  cells[snake[snake.length - 1]].classList.add("head");
}

function renderSnake() {
  removeSnake();
  if (direction === directions.right) {
    snake.shift();
    snake.push(snake[snake.length - 1] + 1);
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

  drawSnake();
}

let game;
function startGame() {
  game = setInterval(renderSnake, 500);
}

function stopGame() {
  clearInterval(game);
}

startGame();

//function generateRandomFoodIndex() {
//return Math.floor(Math.random()*cellCount)
//}
//
