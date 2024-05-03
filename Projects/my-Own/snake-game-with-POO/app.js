// Take References

const currentScore = document.querySelector(".scores__current_score");
const highScore = document.querySelector(".scores__high_score");
const logoText = document.querySelector(".text__title");
const board = document.querySelector(".screen__board");


// Variables

let snake = [{ x: 10, y: 10 }];
let startGame = false;



// functions

function createElement(elementName, className) {

    const element = document.querySelector(elementName);
    element.classList.add(className);
    return element;
}