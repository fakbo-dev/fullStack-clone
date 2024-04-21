const canvas = document.querySelector(".myCanvas");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);


ctx.fillStyle = "rgb(255 0 0)";
ctx.fillRect(50, 50, 100, 150);


//Si guarda y actualiza, debería ver que ha aparecido un rectángulo rojo en su lienzo. Su esquina superior izquierda está a 50 píxeles de la parte superior e izquierda del borde del lienzo (según lo definido por los dos primeros parámetros), y tiene 100 píxeles de ancho y 150 píxeles de alto (según lo definido por el tercer y cuarto parámetro).

ctx.fillStyle = "rgb(0 255 0)";
ctx.fillRect(75, 75, 100, 100);

//Guarde y actualice y verá su nuevo rectángulo. Esto plantea un punto importante: las operaciones gráficas como dibujar rectángulos, líneas, etc., se realizan en el orden en que ocurren. Piense en ello como pintar una pared, donde cada capa de pintura se superpone e incluso puede ocultar lo que hay debajo. No puedes hacer nada para cambiar esto, por lo que debes pensar detenidamente en el orden en que dibujas los gráficos.

//Tenga en cuenta que puede dibujar gráficos semitransparentes especificando un color semitransparente, por ejemplo utilizando rgb(). El "canal alfa" define la cantidad de transparencia que tiene el color. Cuanto mayor sea su valor, más oscurecerá lo que hay detrás. Agregue lo siguiente a su código:

ctx.fillStyle = "rgb(255 0 255 / 75%)";
ctx.fillRect(25, 100, 175, 50);

ctx.fillStyle = "rgb(79 70 229 / 80%)";
ctx.fillRect(100, 100, 80, 120);


//Strokes and line width

//Hasta ahora hemos visto cómo dibujar rectángulos rellenos, pero también puedes dibujar rectángulos que sean solo contornos (llamados trazos en diseño gráfico). Para establecer el color que desea para su trazo, utiliza la strokeStylepropiedad; dibujar un rectángulo de trazo se realiza usando strokeRect.

//El ancho predeterminado de los trazos es 1 píxel; puede ajustar el lineWidthvalor de la propiedad para cambiar esto (se necesita un número que represente el número de píxeles de ancho del trazo). Agregue la siguiente línea entre las dos líneas anteriores:

ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(255 255 255)";
ctx.strokeRect(25, 25, 175, 200);


//Drawing paths

//Si quieres dibujar algo más complejo que un rectángulo, necesitas dibujar un camino. Básicamente, esto implica escribir código para especificar exactamente qué camino debe recorrer el lápiz en el lienzo para trazar la forma que desea dibujar. Canvas incluye funciones para dibujar líneas rectas, círculos, curvas de Bézier y más. ---> ve
