const grid = document.querySelector('.grid');
const width = 20;
const cellCount = width * width;
const cells = [];
let lastRenderTime = 0;
let currentIndex = 0;
let snake = [0, 1, 2]

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
  let squares = document.querySelectorAll('.grid div');
  
  snake = [2, 1, 0];
  currentIndex = 0;
  snake.forEach((index) => squares[index].classList.add('snake')); 
}
addSnake()

//function main(currentTime) {
//  window.requestAnimationFrame(main);
//  lastRenderTime = currentTime;
//  
//  window.requestAnimationFrame(main)
//}

