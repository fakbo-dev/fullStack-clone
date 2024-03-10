
// generar un numero aleatorio entre 0 y 1

function random(number) {
    return Math.floor(Math.random() * (number + 1))
}
// generar un color aleatorio 
  function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
  }

// alternar el texto de un boton

function changeBtn() {
  let originalText = true;
  if (originalText) {
    btn.textContent = 'Machine is on';
    originalText = false;
  } else {
    btn.textContent = 'Machine is off';
    originalText = true;
  }
}
// bucle de galeria de imagenes 
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src',`./images/${image}`);
  newImage.setAttribute('alt',alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
  });
}

// recorrer un objeto 

for (let i = 0; i < Object.length; i++) {
  if (!(i === Object.length - 1)) {
    motherInfo += `${cats[i].name}, `;
  } else {
    motherInfo += `and ${cats[i].name}.`;
  }
}