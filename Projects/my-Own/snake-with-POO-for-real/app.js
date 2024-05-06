// Take references

const currentScore = document.querySelector(".container__scores__current");
const highScore = document.querySelector(".container__scores__high");
const board = document.querySelector(".container__board");
const instructionsText = document.querySelector(".container__content__text");
const logo = document.querySelector(".container__content__logo");

// Variables
let snakePosition = [{ x: 15, y: 15 }];
const gridSize = 30;
let gameStarted = false;
let food = randomFood();
let position = "right";
let gameSpeed = 200;
let gameInterval;
let highScorePoint = 0;

//Event Handler

document.addEventListener("keydown", keyHandler);

// Functions

// draw the elements in the grid 
function draw() {
    board.innerHTML = ""; //Every time the draw function is refresed is empty
    drawSnake();
    drawFood();
    updateScore();
}

//Create elements

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
}

//draw the snake and Each Segment

function drawSnake() {
    if (gameStarted) {
        snakePosition.forEach((segment) => {
            const snakeElement = createElement("div", "snake");
            setPosition(snakeElement, segment);
            board.appendChild(snakeElement);

        })
    }
}


//Set the position the all element in the board (snake and food);

function setPosition(element, position) {
    element.style.gridRow = position.x;
    element.style.gridColumn = position.y;
}

function drawFood() {
    if (gameStarted) {
        const foodElement = createElement("div", "food");
        setPosition(foodElement, food);
        board.appendChild(foodElement);
    }
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

    //check is in the same spot with the food

    if (head.x === food.x && head.y === food.y) {
        food = randomFood();
        increaseSpeed();
        clearInterval(gameInterval);
        gameInterval = setInterval(() => {
            move();
            checkCollision();
            draw();
            console.log(gameSpeed);
        }, gameSpeed);
    } else {
        snakePosition.pop();
    }

}


function startGame() {
    gameStarted = true;
    logo.style.display = "none";
    gameInterval = setInterval(() => {
        move();
        draw();
        checkCollision();
    }, gameSpeed);


}

function keyHandler(event) {
    if (!gameStarted && (
        event.code === "KeyA" ||
        event.code === "KeyS" ||
        event.code === "KeyD" ||
        event.code === "KeyW" ||
        event.code === "Space" ||
        event.key === " "
    )) {
        startGame();
    } else {
        switch (event.key) {
            case "a":
                if (position !== "right") {
                    position = "left";
                }
                break;
            case "d":
                if (position !== "left") {
                    position = "right";
                }
                break;
            case "s":
                if (position !== "up") {
                    position = "down";
                }
                break;
            case "w":
                if (position !== "down") {
                    position = "up";
                }
                break;
        }
    }
}



function increaseSpeed() {

    if (gameSpeed > 150) {
        gameSpeed -= 10;
    } else if (gameSpeed > 100) {
        gameSpeed -= 5;
    } else if (gameSpeed > 50) {
        gameSpeed -= 3;
    } else if (gameSpeed > 25) {
        gameSpeed -= 2;
    }
}

function checkCollision() {
    const head = { ...snakePosition[0] };

    if (head.x < 0 ||
        head.x > gridSize ||
        head.y < 0 ||
        head.y > gridSize) {
        resetGame();
        return;
    } else {
        for (let i = 1; i < snakePosition.length; i++) {
            const index = snakePosition[i];

            if (head.x === index.x && head.y === index.y) {
                resetGame();
                return;
            }
        }
    }
}

function resetGame() {
    updateHighScore();
    stopGame();
    snakePosition = [{ x: 10, y: 10 }];
    food = randomFood();
    direction = "right";
    gameSpeed = 200;
    updateScore();
}

function updateScore() {
    const score = snakePosition.length - 1;
    currentScore.textContent = score.toString().padStart(3, "0");
}

function stopGame() {
    clearInterval(gameInterval);
    gameStarted = false;
    logo.style.display = "block";
}

function updateHighScore() {
    const currentScore = snakePosition.length - 1;

    if (currentScore > highScorePoint) {
        highScorePoint = currentScore;
        highScore.textContent = highScorePoint.toString().padStart(3, "0");
    }
}


