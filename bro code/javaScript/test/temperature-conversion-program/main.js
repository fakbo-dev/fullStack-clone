//temperature conversion 

const textBox = document.getElementById("textBox");
const toF = document.getElementById("toFahrenheit");
const toC = document.getElementById("toCelsius");
const btn = document.getElementById("submit");
const result = document.getElementById("result");
let temp;

function convert() {

    if (toF.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)}°F`; 
    }
    else if(toC.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = `${temp.toFixed(1)}°C`; 
    }
    else {
        result.textContent = "Select a unit";
    }
}

btn.addEventListener("click", convert)