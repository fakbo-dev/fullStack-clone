const canvas = document.querySelector(".myCanvas");


const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


const ctx = canvas.getContext("2d");

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, width, height);

//Bucles y animaciones.

// Hasta ahora hemos cubierto algunos usos muy básicos del lienzo 2D, pero en realidad no experimentarás todo el poder del lienzo a menos que lo actualices o lo animes de alguna manera. Después de todo, ¡el lienzo proporciona imágenes que se pueden programar! Si no va a cambiar nada, también puede utilizar imágenes estáticas y ahorrarse todo el trabajo.


//creating loops

//Jugar con bucles en el lienzo es bastante divertido: puedes ejecutar comandos del lienzo dentro de un forbucle (u otro tipo de) como cualquier otro código JavaScript.

ctx.translate(width / 2, height / 2);

//Esto hace que el origen de las coordenadas (0, 0) se mueva al centro del lienzo, en lugar de estar en la esquina superior izquierda. Esto es muy útil en muchas situaciones, como ésta, donde queremos que nuestro diseño se dibuje en relación con el centro del lienzo.

function degToRad(degrees) {
    return (degrees * Math.PI) / 180;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let length = 250;
let moveOffset = 20;

for (let i = 0; i < length; i++) {
    ctx.fillStyle = `rgb(${255 - length} 0 ${255 - length} / 90%)`;
    ctx.beginPath();
    ctx.moveTo(moveOffset, moveOffset);
    ctx.lineTo(moveOffset + length, moveOffset);
    const triHeight = (length / 2) * Math.tan(degToRad(60));
    ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
    ctx.lineTo(moveOffset, moveOffset);
    ctx.fill();

    length--;
    moveOffset += 0.7;
    ctx.rotate(degToRad(5));
}


//Establezca fillStyleque sea un tono de púrpura ligeramente transparente, que cambia cada vez según el valor de length. Como verás más adelante, la longitud se reduce cada vez que se ejecuta el bucle, por lo que el efecto aquí es que el color se vuelve más brillante con cada triángulo sucesivo dibujado.

// Comienza el camino.

// Mueva el lápiz a una coordenada de (moveOffset, moveOffset); Esta variable define qué tan lejos queremos movernos cada vez que dibujamos un nuevo triángulo.

// Dibuja una línea hasta una coordenada de (moveOffset+length, moveOffset). Esto dibuja una línea de longitud lengthparalela al eje X.

// Calcula la altura del triángulo, como antes.

// Dibuja una línea hasta la esquina del triángulo que apunta hacia abajo, luego dibuja una línea de regreso al inicio del triángulo.

// Llame fill()para completar el triángulo.

// Actualiza las variables que describen la secuencia de triángulos, para que podamos estar listos para dibujar el siguiente. Disminuimos el lengthvalor en 1, por lo que los triángulos se hacen cada vez más pequeños; aumente moveOffsetuna pequeña cantidad para que cada triángulo sucesivo esté un poco más lejos y use otra función nueva, rotate()que nos permite rotar todo el lienzo. Lo giramos 5 grados antes de dibujar el siguiente triángulo.

// ¡Eso es todo! El ejemplo final debería verse así:

