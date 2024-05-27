//Take references


const board = document.querySelector(".game-border-1__game_board");
const instructionText = document.querySelector(".instruction-text");
const logo = document.querySelector(".logo");
const score = document.querySelector(".scores__current");
const highScoreText = document.querySelector(".scores__high");

//Define game Variables
const gridSize = 20;
let snake = [{ x: 10, y: 10, }]; //posicion del snake cuando aparezca en el mapa
let food = generateFood();
let direction = "right";
let highScore = 0;
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;
//draw Game map, snake, and food
function draw() {
    board.innerHTML = ""; //cada vez que se dibuje el mapa estara vacio
    drawSnake();
    drawFood();
    updateScore();
}

//Draw Snake

function drawSnake() {
    snake.forEach((segment) => {
        if (gameStarted === true) {
            const snakeElement = createGameElement("div", "snake");
            setPosition(snakeElement, segment);
            board.appendChild(snakeElement);
        }
    })
}

//Create a snake or Food cube/div

function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//Set the position of snake or food

function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

//testing Draw function
// draw();


//draw food function

function drawFood() {

    if (gameStarted === true) {
        const foodElement = createGameElement("div", "food");
        setPosition(foodElement, food)
        board.appendChild(foodElement);
    }
}


//Generate Food

function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;

    return { x, y };
}

//Moving the snake

function move() {
    //shalow copie
    const head = { ...snake[0] };

    switch (direction) {
        case "up":
            head.y--;
            break;
        case "down":
            head.y++;
            break;
        case "right":
            head.x++;
            break;
        case "left":
            head.x--;
            break;
        default:
            head.x++;
    }

    snake.unshift(head);

    // snake.pop();

    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        increaseSpeed();
        clearInterval(gameInterval); // clear past interval
        gameInterval = setInterval(() => {
            checkCollision();
            move();
            draw();
        }, gameSpeedDelay);

    } else {
        snake.pop();
    }
}

//Test moving

// setInterval(() => {
//     move(); //move first
//     draw(); // then draw again new position
// }, 200)


//start Game function

function startGame() {
    gameStarted = true; // keep track of running Game
    instructionText.style.display = "none";
    logo.style.display = "none";
    gameInterval = setInterval(() => {
        move();
        checkCollision();
        draw();
    }, gameSpeedDelay);
}


// Keypress Event Listener

function handleKeyPress(event) {
    if ((!gameStarted && event.code === "Space") ||
        (!gameStarted && event.code === " ")) {
        startGame();
    } else {
        switch (event.key) {
            case "ArrowUp":
                direction = "up";
                break;
            case "ArrowDown":
                direction = "down";
                break;
            case "ArrowLeft":
                direction = "left";
                break;
            case "ArrowRight":
                direction = "right";
                break;
        }
    }
}


document.addEventListener("keydown", handleKeyPress);

function increaseSpeed() {
    if (gameSpeedDelay >= 150) {
        gameSpeedDelay -= 5;
    } else if (gameSpeedDelay > 100) {
        gameSpeedDelay -= 3;
    } else if (gameSpeedDelay > 50) {
        gameSpeedDelay -= 2;
    } else if (gameSpeedDelay > 25) {
        gameSpeedDelay -= 1;
    }
}

function checkCollision() {
    const head = snake[0];

    if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
        resetGame();
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            resetGame();
        }
    }
}

function resetGame() {
    updateHighScore();
    stopGame();
    snake = [{ x: 10, y: 10 }];
    food = generateFood();
    direction = "right";
    gameSpeedDelay = 200;
    updateScore();
}

function updateScore() {
    const currentScore = snake.length - 1;
    score.textContent = currentScore.toString().padStart(3, "0");
}

function stopGame() {
    clearInterval(gameInterval);
    gameStarted = false;
    instructionText.style.display = "block";
    logo.style.display = "block";
}


function updateHighScore() {
    const currentStore = snake.length - 1;

    if (currentStore > highScore) {
        highScore = currentStore;
        highScoreText.textContent = highScore.toString().padStart(3, "0");
    }
    highScoreText.style.display = "block";
}