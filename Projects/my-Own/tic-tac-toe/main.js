//Get references
const btn = document.querySelector(".btn");
const boxs = document.querySelectorAll(".boxs");
const playerContent = document.querySelector(".actual-content");

const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const tie = document.querySelector(".tie");

const spanPlayer = document.querySelector(".current-player");

let board = ["", "", "", "", "", "", "", "", ""];

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let currentPlayer = "X";

let game = false;

playGame();

function playGame() {
    boxs.forEach(box => {
        box.addEventListener("click", boxClicked);
        btn.addEventListener("click", restarGame);
        playerContent.innerText = `${currentPlayer} 'S turn`;
        game = true;
    });
}


function boxClicked() {
    const boxIndex = this.getAttribute("index");

    if (board[boxIndex] || !game) {
        return;
    } else {
        return updateBoxs(this, boxIndex);
    }
}

function updateBoxs(box, index) {
    board[index] = currentPlayer;
    box.innerText = currentPlayer;
    checkWinner();
}

function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    playerContent.innerText = `${currentPlayer} 'S turn`;
}

function checkWinner() {
    let winner = false;

    for (let i = 0; i < winCondition.length; i++) {
        const condition = winCondition[i];
        const boxA = board[condition[0]];
        const boxB = board[condition[1]];
        const boxC = board[condition[2]];


        if (boxA === "" || boxB === "" || boxC === "") {
            continue;
        }
        if (boxA === boxB && boxB === boxC) {
            winner = true;
            break;
        }
    }

    if (winner) {
        playerContent.innerText = `${currentPlayer} Wins!`;
        game = false;
    }
    else if (!board.includes("")) {
        playerContent.innerText = `Tie`;
        game = false;
    }
    else {
        changePlayer();
    }

}

function restarGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    playerContent.innerText = `${currentPlayer}'S turn`;
    boxs.forEach(box => {
        return box.innerText = "";
    });
    game = true;
};

