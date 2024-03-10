//Este ejemplo utilizará la API de Canvas para dibujar las bolas en la pantalla y la requestAnimationFrameAPI para animar toda la pantalla; no necesita tener ningún conocimiento previo de estas API y esperamos que cuando haya Cuando termine este artículo, le interesará explorarlos más. En el camino, utilizaremos algunos objetos ingeniosos y le mostraremos un par de técnicas interesantes, como hacer rebotar pelotas en las paredes y comprobar si se han golpeado entre sí (también conocido como detección de colisiones ).

//setup canvas 

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

/* Este script obtiene una referencia al <canvas>elemento y luego llama al getContext()método correspondiente para brindarnos un contexto en el que podemos comenzar a dibujar. La constante resultante ( ctx) es el objeto que representa directamente el área de dibujo del lienzo y nos permite dibujar formas 2D en él.*/

/*A continuación, configuramos constantes llamadas widthy height, y el ancho y alto del elemento lienzo (representado por las propiedades canvas.widthy canvas.height) para que sean iguales al ancho y alto de la ventana gráfica del navegador (el área en la que aparece la página web; esto se puede obtener de Window.innerWidthy Window.innerHeightpropiedades).

Tenga en cuenta que estamos encadenando varias asignaciones para configurar todas las variables más rápido; esto está perfectamente bien.*/

// function to generate random number 

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

// function to generate random color 

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

/* La random()función toma dos números como argumentos y devuelve un número aleatorio en el rango entre los dos. La randomRGB()función genera un color aleatorio representado como una rgb()cadena. */

// MODELANDO UNA PELOTA
/*Nuestro programa contará con muchas bolas rebotando por la pantalla. Dado que todas estas bolas se comportarán de la misma manera, tiene sentido representarlas con un objeto. Comencemos agregando la siguiente definición de clase al final de nuestro código.*/

class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }


/* Hasta ahora esta clase sólo contiene un constructor, en el que podemos inicializar las propiedades que cada bola necesita para funcionar en nuestro programa:

x & y coordenadas: las coordenadas horizontales y verticales donde comienza la pelota en la pantalla. Esto puede variar entre 0 (esquina superior izquierda) y el ancho y alto de la ventana gráfica del navegador (esquina inferior derecha).

velocidad horizontal y vertical ( velXy velY): a cada bola se le asigna una velocidad horizontal y vertical; en términos reales, estos valores se agregan regularmente a los valores de las coordenadas x/ ycuando animamos las bolas, para moverlas tanto en cada cuadro.

color— cada bola adquiere un color.

size— cada bola tiene un tamaño: este es su radio, en píxeles.

Esto maneja las propiedades, pero ¿qué pasa con los métodos? Queremos que nuestras pelotas realmente hagan algo en nuestro programa.*/

//SACANDO LA PELOTA
draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}


/*Usando esta función, podemos decirle a la bola que se dibuje en la pantalla, llamando a una serie de miembros del contexto del lienzo 2D que definimos anteriormente ( ctx). El contexto es como el papel, y ahora queremos ordenarle a nuestro bolígrafo que dibuje algo en él:

Primero, decimos beginPath()que queremos dibujar una forma en el papel.
A continuación, usamos fillStylepara definir qué color queremos que tenga la forma; lo configuramos según la colorpropiedad de nuestra bola.
A continuación, utilizamos el arc()método para trazar una forma de arco en el papel. Sus parámetros son:
La posición xy ydel centro del arco: estamos especificando las propiedades xy de la bola y.
El radio del arco; en este caso, la sizepropiedad de la pelota.
Los dos últimos parámetros especifican el número inicial y final de grados alrededor del círculo entre el que se dibuja el arco. Aquí especificamos 0 grados y 2 * PI, que es el equivalente a 360 grados en radianes (es molesto que tengas que especificar esto en radianes). Eso nos da un círculo completo. Si hubiera especificado solo 1 * PI, obtendría un semicírculo (180 grados).
Por último, utilizamos el fill()método, que básicamente dice "terminar de dibujar el trazado con el que empezamos beginPath()y rellenar el área que ocupa con el color que especificamos anteriormente en fillStyle".*/

/*Ya puedes empezar a probar tu objeto.

Guarde el código hasta ahora y cargue el archivo HTML en un navegador.
Abra la consola JavaScript del navegador y luego actualice la página para que el tamaño del lienzo cambie a la ventana gráfica visible más pequeña que permanece cuando se abre la consola.
*/

/*
const testBall = new Ball(50, 100, 4, 4, "blue", 10);

testBall.x;
testBall.size;
testBall.color;
testBall.draw();

Cuando ingresas a la última línea, deberías ver la bola dibujarse en algún lugar del lienzo.

*/


//ACTUALIZANDO LA PELOTA

/*Podemos colocar la pelota en su posición, pero para realmente moverla, necesitamos una función de actualización de algún tipo. Agregue el siguiente código dentro de la definición de clase para Ball:*/


update() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }
    if ((this.x - this.size ) <= 0) {
        this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }
    this.x += this.velX;
    this.y += this.velY;
}

collisionDetect() {
    for (const ball of balls) {
        if (this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < this.size + ball.size) {
                ball.color = this.color = randomRGB();
            }
        }
    }
}
}

/*Las primeras cuatro partes de la función comprueban si la pelota ha llegado al borde de la lona. Si es así, invertimos la polaridad de la velocidad relevante para hacer que la pelota viaje en la dirección opuesta. Entonces, por ejemplo, si la pelota viajaba hacia arriba (negativa velY), entonces la velocidad vertical cambia para que comience a viajar hacia abajo (positiva velY).

En los cuatro casos, estamos comprobando para ver:

si la xcoordenada es mayor que el ancho del lienzo (la pelota sale por el borde derecho).
si la xcoordenada es menor que 0 (la pelota sale del borde izquierdo).
si la ycoordenada es mayor que la altura del lienzo (la pelota sale del borde inferior).
si la ycoordenada es menor que 0 (la bola sale del borde superior).
En cada caso, incluimos el sizede la pelota en el cálculo porque las coordenadas x/ yestán en el centro de la pelota, pero queremos que el borde de la pelota rebote en el perímetro; no queremos que la pelota se salga hasta la mitad. la pantalla antes de que comience a rebotar.

Las dos últimas líneas suman el velXvalor a la xcoordenada y el velYvalor a la ycoordenada; de hecho, la bola se mueve cada vez que se llama a este método.

Esto se hará por ahora; ¡Sigamos con un poco de animación!*/

// ANIMANDO LA PELOTA

/*Ahora hagamos esto divertido. Ahora vamos a empezar a añadir bolas al lienzo y a animarlas.

Primero, necesitamos crear un lugar para almacenar todas nuestras bolas y luego poblarlo. Lo siguiente hará este trabajo; agréguelo al final de su código ahora:*/

const balls = [];

while (balls.length <  18) {
    const size = random(10, 25);
    const ball = new Ball(
        //ball position always drawn at least  one ball width

        //away from the edge of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size,
    );

    balls.push(ball);
}

function loop() {
    ctx.fillStyle = 'rgb(0 0 0 / 25%)';
    ctx.fillRect(0, 0, width, height);


    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }
    requestAnimationFrame(loop);
}

/*Todos los programas que animan cosas generalmente implican un bucle de animación, que sirve para actualizar la información en el programa y luego representar la vista resultante en cada cuadro de la animación; esta es la base de la mayoría de los juegos y otros programas similares. Nuestra loop()función hace lo siguiente:

Establece el color de relleno del lienzo en negro semitransparente, luego dibuja un rectángulo del color en todo el ancho y alto del lienzo, usando fillRect()(los cuatro parámetros proporcionan una coordenada inicial y un ancho y alto para el rectángulo dibujado). Esto sirve para tapar el dibujo del cuadro anterior antes de que se dibuje el siguiente. Si no haces esto, verás largas serpientes abriéndose paso por la lona en lugar de bolas moviéndose. El color del relleno se establece en semitransparente, rgb(0 0 0 / 25%)para permitir que los fotogramas anteriores brillen ligeramente, produciendo pequeños senderos detrás de las bolas a medida que se mueven. Si cambiaste 0,25 a 1, ya no los verás más. Intente variar este número para ver el efecto que tiene.
Recorre todas las bolas en la matriz y ballsejecuta la función de cada bola para dibujar cada una en la pantalla, luego realiza las actualizaciones necesarias para la posición y la velocidad en el tiempo para el siguiente fotograma.draw()update()
Ejecuta la función nuevamente usando el requestAnimationFrame()método: cuando este método se ejecuta repetidamente y se le pasa el mismo nombre de función, ejecuta esa función una cantidad determinada de veces por segundo para crear una animación fluida. Generalmente, esto se hace de forma recursiva, lo que significa que la función se llama a sí misma cada vez que se ejecuta, por lo que se ejecuta una y otra vez.
Finalmente, agregue la siguiente línea al final de su código; debemos llamar a la función una vez para comenzar la animación.*/


loop();

//DETENCION DE COLISIONES (REVISAR EN LA CLASSE Ball)

/*Este método es un poco complejo, así que no te preocupes si no entiendes exactamente cómo funciona por ahora. A continuación se ofrece una explicación:

Para cada bola, debemos verificar las demás bolas para ver si han chocado con la bola actual. Para hacer esto, comenzamos otro for...ofbucle para recorrer todas las bolas de la balls[]matriz.
Inmediatamente dentro del bucle for, usamos una ifdeclaración para comprobar si la bola actual que se está recorriendo es la misma bola que estamos comprobando actualmente. ¡No queremos comprobar si una bola ha chocado consigo misma! Para hacer esto, comprobamos si la bola actual (es decir, la bola cuyo método colisionDetect se está invocando) es la misma que la bola del bucle (es decir, la bola a la que hace referencia la iteración actual del bucle for en el colisiónDetect método). Luego usamos !para negar la verificación, de modo que el código dentro de la declaración solo se ejecute si noif son iguales.
Luego utilizamos un algoritmo común para comprobar la colisión de dos círculos. Básicamente estamos comprobando si alguna de las áreas de los dos círculos se superpone. Esto se explica con más detalle en Detección de colisiones 2D .
Si se detecta una colisión, ifse ejecuta el código dentro de la declaración interna. En este caso, sólo configuramos la colorpropiedad de ambos círculos en un nuevo color aleatorio. Podríamos haber hecho algo mucho más complejo, como hacer que las bolas reboten entre sí de manera realista, pero habría sido mucho más complejo de implementar. Para este tipo de simulaciones de física, los desarrolladores tienden a utilizar juegos o bibliotecas de física como PhysicsJS , Matter.js , Phaser , etc.
También debes llamar a este método en cada cuadro de la animación. Actualice su loop()función para llamar ball.collisionDetect()después de ball.update():*/