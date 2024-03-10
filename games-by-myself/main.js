//recover element
const canvas = document.querySelector("canvas");


//draw canvas
const ctx = canvas.getContext("2d");
canvas.width = 448;
canvas.height = 400;

//Variables

let counter = 0;

//? BALL Variable
const ballRadius = 5;

//position
let x = canvas.width / 2;
let y = canvas.height - 30;

//ball Speed

let dx = -3;
let dy = -3;

//? PADDLE VARIABLE

const paddleHeight = 10;
const paddleWidth = 50;

let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = (canvas.height - paddleHeight) - 10;

let rightPressed = false;
let leftPressed = false;

const PADDLE_SENSITIVITY = 8;
//function 

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.fillStyle = "#f09f";
    ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
}

function drawBricks() {}

function collisionDetection() {
    //bounce the ball in the corners
}

function ballMovement() {
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius){
        dx = -dx;
    } else if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        document.location.reload();
    }
    x += dx;
    y += dy;
}

function paddleMovement() {
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += PADDLE_SENSITIVITY;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= PADDLE_SENSITIVITY;
    }
}

function cleanCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function initEvents() {
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
    const {key} = event;
    if (key === "Right" || key === "ArrowRight") {
        rightPressed = true;
    } else if (key === "Left" || key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(event) {
    const {key} = event;

    if (key === "Right" || key === "ArrowRight") {
        rightPressed = false;
    } else if (key === "Left" || key === "ArrowLeft") {
        leftPressed = false;
    }
}
}
function draw() {
    cleanCanvas();
    //draw the game and check collisions
    // fist we need to draw the elements
    drawBall();
    drawPaddle();
    drawBricks();
    //drawScore();
    
    //collisions and movement
    collisionDetection();
    ballMovement();
    paddleMovement();
    window.requestAnimationFrame(draw);
}
draw();
initEvents();
