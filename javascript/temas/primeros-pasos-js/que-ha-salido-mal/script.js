/*Tipos de errores
En general, cuando haces algo mal en el código, hay dos tipos principales de errores con los que te encontrarás:

Errores de sintaxis: estos son errores de ortografía en tu código que provocan que tu programa no se ejecute en absoluto, o que deje de funcionar a mitad del camino — por lo general, también te proporcionarán algunos mensajes de error. Normalmente no es tan difícil corregirlos, ¡siempre y cuando estés familiarizado con las herramientas adecuadas y sepas qué significan los mensajes de error!
Errores lógicos: Estos son errores en los que la sintaxis realmente es correcta pero el código no hace lo que pretendías, lo cual significa que el programa se ejecuta pero da resultados incorrectos. A menudo, estos son más difíciles de arreglar que los errores sintácticos, ya que generalmente no hay un mensaje de error que te pueda orientar hacia la fuente del error.
Bueno, tampoco es así de simple — a medida que profundices hay algunas otras diferencias. Pero las clasificaciones anteriores funcionarán en esta temprana etapa de tu carrera. Veremos ambos tipos en el futuro.

Un ejemplo erróneo*/

/*Solucionar errores de sintaxis
Anteriormente en este curso, hicimos que escribieras algunos comandos JavaScript simples en la consola JavaScript de las herramientas para desarrolladores (si no recuerdas cómo abrirla en tu navegador, sigue el enlace anterior para descubrirlo). Lo más útil es que la consola te brinda mensajes de error cada vez que ocurre algún error de sintaxis dentro del JavaScript que alimenta al motor JavaScript del navegador. Ahora vayamos a cazar.

Ve a la pestaña dónde tienes abierto number-game-errors.html y abre tu consola JavaScript. Deberías ver un mensaje de error con las siguientes líneas:*/

/*Ve a la pestaña dónde tienes abierto number-game-errors.html y abre tu consola JavaScript. Deberías ver un mensaje de error con las siguientes líneas:*/

/*Este es un error bastante fácil de rastrear, y el navegador le brinda varios bits de información útil para ayudarte (la captura de pantalla anterior es de Firefox, pero otros navegadores proporcionan información similar). De izquierda a derecha, tenemos:
Una "x" roja para indicar que se trata de un error.
Un mensaje de error para indicar qué salió mal: "TypeError: guessSubmit.addeventListener no es una función"
Un enlace a "Más información" que te lleva a una página de MDN dónde explica detalladamente qué significa este error.
El nombre del archivo JavaScript, que enlaza con la pestaña "Depurador" de las herramientas para desarrolladores. Si sigues este enlace, verás la línea exacta donde se resalta el error.
El número de línea donde está el error y el número de carácter en esa línea donde se detectó el error por primera vez. En este caso, tenemos la línea 86, carácter número 3.
Si miramos la línea 86 en nuestro editor de código, encontraremos esta línea:*/

/*El mensaje de error dice "guessSubmit.addeventListener no es una función", lo cual significa que el intérprete de JavaScript no reconoce la función que estamos llamando. A menudo, este mensaje de error en realidad significa que hemos escrito algo mal. Si no estás seguro de la ortografía correcta de una parte de la sintaxis, a menudo es bueno buscar la función en MDN. La mejor manera de hacer esto es, en tu navegador favorito, buscar "mdn nombre-de-característica". Aquí hay un atajo para ahorrarte algo de tiempo en esta instancia: addEventListener().
Entonces, al mirar esta página, ¡el error parece ser que hemos escrito mal el nombre de la función!. Recuerda que JavaScript distingue entre mayúsculas y minúsculas, por lo que cualquier pequeña diferencia en la ortografía o en mayúsculas provocará un error. Cambiar addeventListener a addEventListener debería solucionar este problema. Hazlo ahora.*/



/*Errores sintácticos, segunda ronda
Guarda tu página y refréscala, ahora deberías ver que el error ha desaparecido.
Ahora, si intentas ingresar un número y presionas el botón "Enviar respuesta", verás... ¡otro error!*/


/*Esta vez, el error que se informa es "TypeError: lowOrHi es nulo", en la línea 78.*/

/*Échale un vistazo a la línea 78 y verás el siguiente código:
*/

/*Esta línea está intentando establecer la propiedad textContent de la constante lowOrHi en una cadena de texto, pero no funciona porque lowOrHi no contiene lo que es supone. Veamos por qué es así — intenta buscar otras instancias de lowOrHi en el código. La primera instancia que encontrarás en JavaScript está en la línea 48:*/

/*En este punto, estamos intentando hacer que la variable contenga una referencia a un elemento en el HTML del documento. Comprobemos si el valor es null después de ejecutar esta línea. Agrega el siguiente código en la línea 49:*/

/*Guarda y refresca, y ahora deberías ver el resultado de console.log() en tu consola.*/

/*Efectivamente, el valor de lowOrHi es null en este punto, así que definitivamente hay un problema con la línea 48.
Pensemos en cuál podría ser el problema. La línea 48 está utilizando un método document.querySelector() para obtener una referencia a un elemento seleccionándolo con un selector CSS. Buscando más adelante en nuestro archivo, podemos encontrar el párrafo en cuestión:*/

/*Entonces necesitamos un selector de clase aquí, que comienza con un punto (.), pero el selector que se pasa al método querySelector() en la línea 48 no tiene punto. ¡Este podría ser el problema! Intenta cambiar lowOrHi a .lowOrHi en la línea 48.
Ahora guarda y refresca nuevamente, y tu declaración console.log() debería devolver el elemento <p> que queremos. ¡Uf! ¡Otro error solucionado! Ahora puedes eliminar tu línea console.log(), o mantenerla como referencia más adelante — tu elección.*/

/*Errores sintácticos, tercera ronda
Ahora, si intentas jugar de nuevo, deberías tener más éxito — el juego debería funcionar absolutamente bien, hasta que termines el juego, ya sea adivinando el número correcto o porque agotaste los intentos.
En ese momento, el juego vuelve a fallar y lanza el mismo error que obtuvimos al principio: "TypeError: resetButton.addeventListener no es una función". Sin embargo, esta vez aparece como procedente de la línea 94.
Mirando la línea número 94, es fácil ver que hemos cometido el mismo error aquí. Nuevamente, solo necesitamos cambiar addeventListener a .addEventListener. Hazlo ahora.
*/

/*En este punto, el juego debería trabajar bien, sin embargo, después de jugar varias veces, sin duda notarás que el número "aleatorio" que debes adivinar siempre es 1. ¡Definitivamente no es exactamente como queremos que se desarrolle el juego!

Obviamente hay un problema en la lógica del juego en alguna parte — el juego no devuelve un error; simplemente no está jugando bien.

Busca la variable randomNumber y las líneas donde se establece primero el número aleatorio. La instancia que almacena el número aleatorio que queremos adivinar al comienzo del juego debe estar alrededor de la línea número 44:*/

/*Y la que genera el número aleatorio antes de cada juego subsiguiente está alrededor de la línea 113:*/

/*Para comprobar si estas líneas son realmente el problema, volvamos a echar mano de nuestra amiga console.log() — inserta la siguiente línea directamente debajo de cada una de las dos líneas anteriores:*/

/*Guarda y refresca, luego juega un par de veces — verás que randomNumber es igual a 1 en cada punto en el que se registra en la consola.*/

/*Desentrañando la lógica
Para solucionar esto, consideremos cómo está funcionando esta línea. Primero, invocamos a Math.random(), que genera un número decimal aleatorio entre 0 y 1, p. ej. 0.5675493843.*/

Math.random()


/* continuación, pasamos el resultado de invocar a Math.random() a Math.floor(), que redondea el número pasado al número entero más cercano. Luego agregamos 1 a ese resultado:*/

Math.floor(Math.random()) + 1

/*Redondear un número decimal aleatorio entre 0 y 1 siempre devolverá 0, por lo que agregarle 1 siempre devolverá 1. Necesitamos multiplicar el número aleatorio por 100 antes de redondearlo hacia abajo. Lo siguiente nos daría un número aleatorio entre 0 y 99:*/

Math.floor(Math.random()*100);


/*Copy to Clipboard
De ahí que queramos sumar 1, para darnos un número aleatorio entre 1 y 100:*/

Math.floor(Math.random()*100) + 1;


/*Copy to Clipboard
Intenta actualizar ambas líneas de esta manera, luego guarda y refresca — ¡el juego ahora debería trabajar como pretendemos!*/