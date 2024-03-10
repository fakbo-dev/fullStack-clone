
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Add your code here
document.addEventListener('keydown', (e) => {
  const step = 10;
  if (e.key === 'w' || e.key === 'W') {
    y -= step;
  } else if (e.key === 's' || e.key === 'S') {
    y += step;
  } else if (e.key === 'a' || e.key === 'A') {
    x -= step;
  } else if (e.key === 'd' || e.key === 'D') {
    x += step;
  }
  drawCircle(x, y, size);
});