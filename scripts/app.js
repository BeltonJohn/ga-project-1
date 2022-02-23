const grid = document.querySelector('.grid');
const scoreBoard = document.querySelectorAll('.score');
const width = 20;
const cellCount = width * width;
const cells = [];
const sound = document.querySelector('audio')
const directions = {
  left: "left",
  right: "right",
  up: "up",
  down: "down",
};
let snake = [0, 1, 2, 3,];
let speed = 500;

let totalFood = 0;
let score = 0;

let direction = directions.right;

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement("div");
    cell.setAttribute("data-id", i);
    //cell.textContent = i;
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
    if (cells[snake[snake.length - 1] + 1].classList.contains('wallOne')) {
      console.log('hit the walll')
    }
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
  colission()

  //timer = setTimeout(renderSnake, speed)

  if (cells[snake[snake.length - 1]].classList.contains('pizza')) {
    score ++;
    cells[snake[snake.length - 1]].classList.remove('pizza');
    snake.unshift(snake[0])
    sound.src = './assets/eat-pizza.m4a'
    sound.play()
    addPizza()
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



function addPizza(){
  let randomIndex = Math.floor(Math.random() * cellCount);
  while (cells[randomIndex].classList.contains('snake')) {
    randomIndex = Math.floor(Math.random() * cellCount);
  }
  cells[randomIndex].classList.add('pizza')
}
addPizza()




function startGame() {
  game = setInterval(renderSnake, 1000);
  sound.src = './assets/startup.m4a'
  sound.play()
  
  
}
let game
function stopGame() {
  clearInterval(game);
  sound.src = './assets/colission .m4a'
  sound.play()
  console.log('game over')
}

startGame();

timer = setTimeout(renderSnake, speed);