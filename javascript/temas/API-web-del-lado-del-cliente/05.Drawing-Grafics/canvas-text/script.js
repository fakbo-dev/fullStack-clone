const canvas = document.querySelector(".myCanvas");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);


// El texto se dibuja utilizando dos métodos:

// fillText()— dibuja texto relleno.
// strokeText()— dibuja texto de contorno (trazo).



ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 150);

canvas.setAttribute("arial-label", "Canvas text");

