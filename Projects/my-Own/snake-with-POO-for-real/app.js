// Take references

const currentScore = document.querySelector(".container__scores__current");
const highScore = document.querySelector(".container__scores__high");
const board = document.querySelector(".container__board");
const instructionsText = document.querySelector(".container__content__text");

// Variables
let snakePosition = [{ x: 15, y: 15 }];
const gridSize = 30;
let gameStarted = false;
let food = randomFood();
let position = "right";
let gameSpeed = 300;


// Functions

// draw the elements in the grid 
function draw() {
    board.innerHTML = ""; //Every time the draw function is refresed is empty
    drawSnake();
    drawFood();
}

//Create elements

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
}

//draw the snake and Each Segment

function drawSnake() {
    snakePosition.forEach((segment) => {
        const snakeElement = createElement("div", "snake");
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);

    })
}


//Set the position the all element in the board (snake and food);

function setPosition(element, position) {
    element.style.gridRow = position.x;
    element.style.gridColumn = position.y;
}

function drawFood() {
    const foodElement = createElement("div", "food");
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

function randomFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;

    return { x, y };
}


function move() {
    const head = { ...snakePosition[0] };
    switch (position) {
        case "up":
            head.x--;
            break;
        case "down":
            head.x++;
            break;
        case "right":
            head.y++;
            break;
        case "left":
            head.y--;
            break;
    }

    snakePosition.unshift(head);
    snakePosition.pop();

    //check is in the same spot with the food
}


function startGame() {

}

function keyHandler(event) {

}

function increaseSpeed() {

}

function checkCollision() {

}

function resetGame() {

}

function updateScore() {

}

function stopGame() {

}

function updateHighScore() {

}