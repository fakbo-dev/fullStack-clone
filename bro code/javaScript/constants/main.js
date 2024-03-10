//const = a variable that can't be changed 

const pi = 3.14159;
let radius;
let circunference;



document.getElementById('mySubmit').onclick = () => {
    radius = document.getElementById('myText').value;
    radius = Number(radius);
    circunference = 2 * pi * radius;
    document.getElementById('myH3').textContent = `${circunference} cm.`;
}

