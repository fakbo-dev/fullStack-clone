//!variables

const display = document.querySelector(".display");
const keys = document.querySelector(".keys");




//Events listeners

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

function clearDisplay() {   
    display.value = "";
}