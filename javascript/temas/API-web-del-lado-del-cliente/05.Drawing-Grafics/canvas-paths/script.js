const canvas = document.querySelector(".myCanvas");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);

//Usaremos algunos métodos y propiedades comunes en todas las secciones siguientes:

// ?beginPath()— comience a dibujar un trazado en el punto donde se encuentra actualmente el lápiz en el lienzo. En un lienzo nuevo, el lápiz comienza en (0, 0).

// ?moveTo()— mover el bolígrafo a un punto diferente del lienzo, sin grabar ni trazar la línea; el lápiz "salta" a la nueva posición.

// ?fill()— dibuja una forma rellena completando el camino que has trazado hasta ahora.

// ?stroke()— dibuja una forma de contorno trazando un trazo a lo largo del camino que has dibujado hasta ahora.

//? También puede utilizar funciones como lineWidthy fillStyle/ strokeStylecon rutas y rectángulos.

ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);

//draw your path
ctx.fill();

//Drawing lines

//Dibujemos un triángulo equilátero en el lienzo.

//En primer lugar, agregue la siguiente función auxiliar al final de su código. Esto convierte valores de grados a radianes, lo cual es útil porque siempre que necesites proporcionar un valor de ángulo en JavaScript, casi siempre será en radianes, pero los humanos generalmente pensamos en grados.

function degToRoad(degrees) {
    return (degrees * Math.PI) / 180;
}

//A continuación, comience su camino agregando lo siguiente debajo de su adición anterior; aquí establecemos un color para nuestro triángulo, comenzamos a dibujar un camino y luego movemos el lápiz a (50, 50) sin dibujar nada. Ahí es donde comenzaremos a dibujar nuestro triángulo.

ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);

ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRoad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();

//Repasemos esto en orden: Primero dibujamos una línea que cruza hasta (150, 50); nuestro camino ahora va 100 píxeles a la derecha a lo largo del eje x. En segundo lugar, calculamos la altura de nuestro triángulo equilátero, usando un poco de trigonometría simple. Básicamente, estamos dibujando el triángulo apuntando hacia abajo. Los ángulos de un triángulo equilátero siempre miden 60 grados; Para calcular la altura, podemos dividirlo por la mitad en dos triángulos rectángulos, cada uno de los cuales tendrá ángulos de 90 grados, 60 grados y 30 grados. En cuanto a los lados:

//El lado más largo se llama hipotenusa.

// El lado al lado del ángulo de 60 grados se llama adyacente, que sabemos que tiene 50 píxeles, ya que es la mitad de la línea que acabamos de dibujar.
// Se llama opuesto al lado opuesto al ángulo de 60 grados, que es la altura del triángulo que queremos calcular.

//Una de las fórmulas trigonométricas básicas establece que la longitud del adyacente multiplicada por la tangente del ángulo es igual al opuesto, por lo que llegamos a 50 * Math.tan(degToRad(60)). Usamos nuestra degToRad()función para convertir 60 grados a radianes, como Math.tan()se espera un valor de entrada en radianes.

// Con la altura calculada, trazamos otra línea hasta (100, 50 + triHeight). La coordenada X es simple; debe estar a medio camino entre los dos valores X anteriores que establecimos. Por otro lado, el valor Y debe ser 50 más la altura del triángulo, como sabemos, la parte superior del triángulo está a 50 píxeles de la parte superior del lienzo.
// La siguiente línea dibuja una línea de regreso al punto inicial del triángulo.
// Por último, corremos ctx.fill()para finalizar el camino y rellenar la forma.


//Dibujando Circulos

// Ahora veamos cómo dibujar un círculo en un lienzo.Esto se logra utilizando el arc()método, que dibuja todo o parte de un círculo en un punto específico.

ctx.fillStyle = "rgb(0 0 255)";
ctx.beginPath();
ctx.arc(150, 106, 50, degToRoad(0), degToRoad(360), false);
ctx.fill();

//arc()toma seis parámetros. Los dos primeros especifican la posición del centro del arco (X e Y, respectivamente). El tercero es el radio del círculo, el cuarto y el quinto son los ángulos inicial y final en los que dibujar el círculo (por lo que especificar 0 y 360 grados nos da un círculo completo) y el sexto parámetro define si el círculo debe dibujarse en sentido antihorario ( en sentido contrario a las agujas del reloj) o en el sentido de las agujas del reloj ( falsees en el sentido de las agujas del reloj).

// another arc

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 106, 50, degToRoad(-50), degToRoad(50), true);
ctx.lineTo(200, 106);
ctx.fill();


//El patrón aquí es muy similar, pero con dos diferencias:

// Hemos establecido el último parámetro en arc(), truelo que significa que el arco se dibuja en el sentido contrario a las agujas del reloj, lo que significa que aunque el arco se especifica comenzando en - 45 grados y terminando en 45 grados, dibujamos el arco alrededor de los 270 grados que no están dentro de esta porción. .Si cambiara y luego volviera a ejecutar el código, solo se dibujaría el segmento de 90 grados del círculo true.false
// Antes de llamar fill(), trazamos una línea hacia el centro del círculo.Esto significa que obtenemos un bonito recorte estilo Pac - Man.Si elimina esta línea(¡pruébelo!) y luego vuelve a ejecutar el código, obtendrá solo un borde del círculo cortado entre el punto inicial y final del arco.Esto ilustra otro punto importante del lienzo: si intenta rellenar una ruta incompleta(es decir, una que no está cerrada), el navegador rellena una línea recta entre el punto inicial y final y luego la rellena.