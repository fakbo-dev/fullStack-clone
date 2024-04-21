const canvas = document.querySelector(".myCanvas");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


const ctx = canvas.getContext("2d");

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, width, height);

// animaciones
// El ejemplo de bucle que creamos arriba fue divertido, pero realmente necesitas un bucle constante que continúe para cualquier aplicación de lienzo seria (como juegos y visualizaciones en tiempo real). Si piensa que su lienzo es como una película, realmente desea que la pantalla se actualice en cada fotograma para mostrar la vista actualizada, con una frecuencia de actualización ideal de 60 fotogramas por segundo para que el movimiento parezca agradable y fluido para el ojo humano.

// Hay algunas funciones de JavaScript que le permitirán ejecutar funciones repetidamente, varias veces por segundo, siendo la mejor para nuestros propósitos window.requestAnimationFrame(). Se necesita un parámetro: el nombre de la función que desea ejecutar para cada cuadro. La próxima vez que el navegador esté listo para actualizar la pantalla, se llamará a su función. Si esa función dibuja la nueva actualización de su animación y luego la llama requestAnimationFrame()nuevamente justo antes del final de la función, el bucle de animación continuará ejecutándose. El bucle finaliza cuando deja de llamar requestAnimationFrame()o si llama window.cancelAnimationFrame()después de llamar requestAnimationFrame()pero antes de que se llame al marco.


//En general, el proceso de realizar una animación de lienzo implica los siguientes pasos:

// Borre el contenido del lienzo (por ejemplo, con fillRect()o clearRect()).

// Guardar estado (si es necesario) usando save(): esto es necesario cuando desea guardar la configuración que actualizó en el lienzo antes de continuar, lo cual es útil para aplicaciones más avanzadas.

// Dibuja los gráficos que estás animando.

// Restaure la configuración que guardó en el paso 2, usandorestore()

// Llame requestAnimationFrame()para programar el dibujo del siguiente fotograma de la animación.


//Una animación de personaje simple.


ctx.translate(width / 2, height / 2);

const image = new Image();
image.src = "walk-right.png";
image.onload = draw;

let sprite = 0;
let posX = 0;


function draw() {
    ctx.fillRect(-(width / 2), -(height / 2), width, height);
    ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);

    if (posX % 13 === 0) {
        if (sprite === 5) {
            sprite = 0;
        } else {
            sprite++;
        }
    }

    if (posX > width / 2) {
        let newStartPos = -(width / 2 + 102);
        posX = Math.ceil(newStartPos);
        console.log(posX);
    } else {
        posX += 2;
    }
    window.requestAnimationFrame(draw);
}


