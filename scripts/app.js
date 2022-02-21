const grid = document.querySelector('.grid');
const scoreBoard = document.querySelectorAll('.score');
const squares = document.querySelectorAll('.grid div');
const width = 20;
const cellCount = width * width;
const cells = [];

let snakeId 

let snakePosition = 0;
let snake = [2, 1, 0]
let direction = 1;
let score = 0;

function createGrid() { 
  for (let i = 0; i < cellCount; i++){
    const cell = document.createElement('div');
    cell.setAttribute('data-id', i);
    cells.push(cell);
    grid.appendChild(cell);
  }
}
createGrid();


function addSnake() {
  const squares = document.querySelectorAll('.grid div');
  snake = [2, 1, 0];
  snakePosition = 0;
  snake.forEach((index) => squares[index].classList.add('snake')); 
}
addSnake()


document.addEventListener('keyup', controlSnake)

function controlSnake(event) {
  if (event.keyCode === 37) {
    for (let i = 0; i < snake.length; i++) {
      snake[i] = snake[i] - 1
      
}console.log(snake)
  } else if (event.keyCode === 38) {
    direction = - width;
  } else if (event.keyCode === 39) {
    direction = + 1;
  } else if (event.keyCode === 40) {
    direction = + width;
  }
  console.log(direction)
}
function moveSnake() {
  snake.pop();
  
  snake.unshift(snake[0] + direction);
  
}
moveSnake();

snakeId = setInterval(moveSnake, 200)


//function generateRandomFoodIndex() {
//return Math.floor(Math.random()*cellCount)
//}
//



