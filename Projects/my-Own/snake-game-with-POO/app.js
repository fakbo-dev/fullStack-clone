// Take References

const score = document.querySelector(".scores__current_score");
const highScoreText = document.querySelector(".scores__high_score");
const logoText = document.querySelector(".text__title");
const board = document.querySelector(".screen__board");


// Variables
const gridSize = 20;
let snakePosition = [{ x: 10, y: 10 }];
let gameStarted = false;
let food = randomFood();
let direction = "right";
let gameInterval;
let gameSpeedDelay = 300;
let highScore = 0;


// functions

function createElement(elementName, className) {

    const element = document.createElement(elementName);
    element.classList.add(className);
    return element;
}

// draw the board

function draw() {
    board.innerHTML = ""; //cada vez que se dibuje el board estara vacio
    drawSnake();
    drawFood();
    updateScore();
}



//draw the snake

function drawSnake() {
    snakePosition.forEach((segment) => {
        if (gameStarted === true) {
            const snakeBody = createElement("div", "snake");
            setPosition(snakeBody, segment);
            board.appendChild(snakeBody);
        }
    })
}


function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}


// Draw Test 1, delete after the code is complete
// draw();


// Draw fodd and random place it randomly

function drawFood() {

    if (gameStarted === true) {
        const foodBody = createElement("div", "food");
        setPosition(foodBody, food);
        board.appendChild(foodBody);
    }
}


function randomFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;

    return { x, y };
}

function move() {
    const snakeHead = { ...snakePosition[0] };

    switch (direction) {
        case "right":
            snakeHead.x++;
            break;

        case "left":
            snakeHead.x--;
            break;

        case "up":
            snakeHead.y--;
            break;

        case "down":
            snakeHead.y++;
            break;
    }

    snakePosition.unshift(snakeHead);


    if (snakeHead.x === food.x && snakeHead.y === food.y) {
        food = randomFood();
        increaseSpeed();
        clearInterval(gameInterval);
        gameInterval = setInterval(() => {
            checkCollision();
            move();
            draw();
        }, gameSpeedDelay);
    } else {
        snakePosition.pop();
    }
}

// Test Movement

// setInterval(() => {
//     move();
//     draw();
// }, 300);

function startGame() {
    gameStarted = true;
    logoText.style.display = "none";
    gameInterval = setInterval(() => {
        checkCollision();
        move();
        draw();
    }, gameSpeedDelay);
}
function keyHandler(event) {
    if (!gameStarted && (event.code === " " || event.code === "Space")) {
        startGame();
    } else {
        switch (event.key) {
            case "ArrowUp":
                if (direction !== "down") {
                    direction = "up";
                }
                break;
            case "ArrowDown":
                if (direction !== "up") {
                    direction = "down";
                }
                break;
            case "ArrowLeft":
                if (direction !== "right") {
                    direction = "left";
                }
                break;
            case "ArrowRight":
                if (direction !== "left") {
                    direction = "right";
                }
                break;
        }
    }
}


document.addEventListener("keydown", keyHandler);


function checkCollision() {
    const snakeHead = { ...snakePosition[0] };

    if (snakeHead.x < 1 || snakeHead.x > gridSize || snakeHead.y < 1 || snakeHead.y > gridSize) {
        resetGame();
    } else {

        for (let i = 1; i < snakePosition.length; i++) {
            const index = snakePosition[i];

            if (snakeHead.x === index.x && snakeHead.y === index.y) {
                resetGame();
            }
        }
    }
}

function increaseSpeed() {

    switch (gameSpeedDelay) {

        case gameSpeedDelay > 250:
            gameSpeedDelay -= 20;
            break;
        case gameSpeedDelay > 150:
            gameSpeedDelay -= 10;
            break;
        case gameSpeedDelay > 100:
            gameSpeedDelay -= 5;
            break;
        case gameSpeedDelay > 50:
            gameSpeedDelay -= 3;
            break;
    }
}


function resetGame() {
    updateHighScore();
    stopGame();
    snakePosition = [{ x: 10, y: 10 }];
    food = randomFood();
    direction = "right";
    gameSpeedDelay = 300;
    updateScore();
}

function updateScore() {
    const currentScore = snakePosition.length - 1;
    score.textContent = currentScore.toString().padStart(3, "0");
}

function stopGame() {
    clearInterval(gameInterval);
    gameStarted = false;
    logoText.style.display = "block";
}

function updateHighScore() {
    const currentStore = snakePosition.length - 1;

    if (currentStore > highScore) {
        highScore = currentStore;
        highScoreText.textContent = highScore.toString().padStart(3, "0");
    }
    highScoreText.style.display = "block";
}