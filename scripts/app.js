const grid = document.querySelector('.grid');
const scoreBoard = document.querySelectorAll('.score');
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
let foodPosition = 0;
let totalFood = 0;
let score = 0;

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
  
}

document.addEventListener("keyup", setDirection);

function removeSnake() {
  cells.forEach((cell) => cell.classList.remove('snake'));
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
  if (cells[snake[0]].classList.contains('pizza')) {
    score ++;
    cells[snake[0]].classList.remove('pizza')
  }
  drawSnake();
}

// need to create a loop to check for current index of snake
//need to generate a random index number to place food
//need to add food to empty cells at set intervals independent of the rendersnake interval


function addFood(){
  let randomIndex = Math.floor(Math.random() * cellCount);
  while (cells[randomIndex].classList.contains('snake')) {
    randomIndex = Math.floor(Math.random() * cellCount);
  }
  cells[randomIndex].classList.add('pizza')
}
addFood()



let game;
function startGame() {
  game = setInterval(renderSnake, 300);
  
  
}

function stopGame() {
  clearInterval(game);
}

startGame();

//function generateRandomFoodIndex() {
//return Math.floor(Math.random()*cellCount)
//}
//
