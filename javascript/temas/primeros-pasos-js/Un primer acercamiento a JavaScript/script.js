/*Pensando como un programador
Una de las cosas más difíciles de aprender en programación no es la sintaxis que necesita aprender, sino cómo aplicarla para resolver problemas del mundo real. Debes comenzar a pensar como un programador — esto generalmente implica mirar descripciones de lo que necesita hacer tu programa, determinar qué características de código necesitas para alcanzar esas cosas y cómo hacer que funcionen juntas.

Esto implica una combinación de trabajo duro, experiencia con la sintaxis de programación y práctica — más un poquito de creatividad. Mientras más programes, más habilidoso serás haciéndolo. No te podemos prometer que vas a desarrollar un "cerebro de programador" en cinco minutos, pero, a lo largo de este curso, te vamos a dar muchas oportunidades de practicar el pensar como un programador.

Teniendo esto en mente, veamos el ejemplo que vamos a construir en este artículo, y revisemos el proceso general de seccionarlo y dividirlo en tareas tangibles.*/



/*Imaginemos que tu jefe te ha dado el siguiente resumen para crear este juego:

Quiero que crees un sencillo juego del tipo "adivina el número". Se debe elegir un número aleatorio entre 1 y 100, luego desafiar al jugador a adivinar el número en 10 intentos. Después de cada intento, debería decirle al jugador si ha acertado o no — y si está equivocado, debería decirle si se ha quedado corto o se ha pasado. También debería decir los números que ya se probaron anteriormente. El juego terminará una vez que el jugador acierte o cuando se acaben los intentos. Cuando el juego termina, se le debe dar al jugador la opción de volver a jugar.

Al observar este resumen, lo primero que podemos hacer es comenzar a desglosar el proyecto en tareas simples y realizables, con la mayor mentalidad de programador posible:

Generar un número aleatorio entre 1 y 100.
Registrar el número del intento en el que el jugador se encuentre. Empezando en 1.
Darle al jugador una forma de adivinar cuál es el número.
Una vez que se ha introducido el número, registrarlo en alguna parte para que el jugador pueda ver sus intentos previos.
A continuación, comprobar si el número es correcto.
Si es correcto:
Mostrar un mensaje de felicitaciones.
Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
Mostrar un control que permita al jugador volver a empezar el juego.
Si es incorrecto y al jugador todavía le quedan intentos:
Decirle al jugador que ha fallado.
Dejar que el jugador lo intente de nuevo.
Incrementa el número de intentos en 1.
Si el jugador falla y no le quedan turnos:
Decirle al jugador que el juego se ha terminado.
Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
Mostrar un control que permita al jugador volver a empezar el juego.
Una vez que el juego se reinicia, asegúrate de que la lógica del juego y la IU (interfaz de usuario) se restablezcan por completo, luego vuelve al paso 1.
Veamos cómo podemos trasformar estos pasos en código, construyendo el ejemplo y explorando las características de JavaScript a medida que avanzamos.*/

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

/*Esta sección del código establece las variables y constantes que necesitamos para almacenar los datos que nuestro programa utilizará. Las variables básicamente son contenedores de valores (como números o cadenas de texto). Creas una variable con la palabra clave let (o var) seguida de un nombre para tu variable (leerás más sobre la diferencia entre las palabras clave en el siguiente artículo). Las constantes se utilizan para almacenar valores que no deseas modificar y se crean con la palabra clave const. En este caso, estamos usando constantes para almacenar referencias a partes de nuestra interfaz de usuario; el texto dentro de algunas de ellas puede cambiar, pero los elementos HTML a los que se hace referencia permanecen iguales.

Puedes asignar un valor a tu variable o constante con un signo igual (=) seguido del valor que deseas darle.

En nuestro ejemplo:*/


/*A la primera variable — randomNumber — se le asigna un número al azar entre 1 y 100, calculado usando un algoritmo matemático.
Las primeras tres constantes sirven cada una para almacenar una referencia a los párrafos de resultados en nuestro HTML, y se usarán para insertar valores en los párrafos más adelante en el código (observa cómo están dentro de un elemento <div>, el cual se utiliza para seleccionar los tres más adelante para restablecerlos a sus valores originales, cuando reiniciamos el juego):
<div class="resultParas">
  <p class="guesses"></p>
  <p class="lastResult"></p>
  <p class="lowOrHi"></p>
</div>*/


/*Las siguientes dos constantes almacenan referencias a la entrada de texto y al botón "Enviar" del formulario, y se utilizan para controlar las respuestas del jugador más adelante.
<label for="guessField">Adivina el número: </label><input type="text" id="guessField" class="guessField">
<input type="submit" value="Enviar respuesta" class="guessSubmit">*/


/*Nuestras dos variables finales almacenan un conteo de intentos desde 1 (que se usa para tener un registro de cuántos intentos ha hecho el jugador), y una referencia al botón de reinicio que aún no existe (pero que lo hará más adelante).*/

/*Funciones
A continuación, agrega lo siguiente debajo de tu código JavaScript anterior:*/

function checkGuess() {
    alert('Soy un marcador de posición');
  }

/*Las funciones son bloques de código reutilizable que puedes escribir una vez y ejecutar una y otra vez, ahorrando la necesidad de repetir el código todo el tiempo. Son realmente útiles. Hay varias maneras de definir funciones, pero por ahora nos concentraremos en un tipo simple. Aquí hemos definido una función usando la palabra clave function, seguida de un nombre, con paréntesis después de él. Después de eso ponemos dos llaves ({ }). Dentro de las llaves se encuentra todo el código que queremos ejecutar cuando llamamos a la función.

Cuando queramos ejecutar el código, escribimos el nombre de la función seguido de los paréntesis.*/

/*Probémoslo ahora. Guarda tu código y actualiza la página en tu navegador. Luego, ingresa a la consola JavaScript de las herramientas para desarrolladores e ingresa la siguiente línea:*/


/*Probémoslo ahora. Guarda tu código y actualiza la página en tu navegador. Luego, ingresa a la consola JavaScript de las herramientas para desarrolladores e ingresa la siguiente línea:

checkGuess();
Copy to Clipboard
Después de presionarRetorno/Intro, debería aparecer una alerta que dice "Soy un marcador de posición"; hemos definido una función en nuestro código que crea una alerta cada vez que la llamamos.

Not*/


/*Operadores
Los operadores de JavaScript nos permiten realizar pruebas, hacer cálculos matemáticos, unir cadenas y otras cosas similares.

Si aún no lo has hecho, guarda tu código, actualiza la página en tu navegador y abre la consola JavaScript de las herramientas para desarrolladores. Luego, podemos intentar escribir los ejemplos que se muestran a continuación — escribe cada una de las columnas de "Ejemplo" exactamente como se muestra, presionando Retorno/Intro después de cada una, y ve los resultados que devuelven.

Primero veamos los operadores aritméticos, por ejemplo:

Operador	Descripción	Ejemplo
+	Suma	6 + 9
-	Resta	20 - 15
*	Multiplicación	3 * 7
/	División	10 / 5*/

/*También puedes usar el operador + para unir cadenas de texto (en programación, esto se llama concatenación). Intenta ingresar las siguientes líneas, una por una:*/

let Name = 'bingo';
Name;

let hello = 'dice hola';
hello;

let greeting = 'i' + Name + hello;
greeting;


/*También disponemos de algunos atajos de operadores, llamados operadores de asignación (en-US) mejorada. Por ejemplo, si quieres simplemente agregar una nueva cadena de texto a una existente y devolver el resultado, puedes hacer esto:*/

Name += 'dice hola';

/*Esto es equivalente a

name = name + ' dice hola!';
Copy to Clipboard
Cuando ejecutamos pruebas de verdadero/falso (por ejemplo, dentro de condicionales — consulta abajo) usamos operadores de comparación (en-US). Por ejemplo:*/


/*===	
Igualdad estricta (¿es exactamente lo mismo?)	
5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; número versus cadena 


!==	
No igual (¿no es lo mismo?)	
5 !== 2 + 4 // true
'Chris' !== 'Bob' // true
5 !== 2 + 3 // false
2 !== '2' // true; número versus cadena 


<	
Menor que	
6 < 10 // true
20 < 10 // false 


>	
Mayor que	
6 > 10 // false
20 > 10 // true */


/*Condicionales
Volviendo a nuestra función checkGuess(), creo que es seguro decir que no queremos que simplemente muestre un mensaje de marcador de posición. Queremos que compruebe si la respuesta del jugador es correcta o no, y que responda de manera apropiada.

En este punto, reemplaza su función checkGuess() actual con esta versión:*/



function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Intentos anteriores: ';
    }
    guesses.textContent += userGuess + ' ';
  
    if (userGuess === randomNumber) {
      lastResult.textContent = '¡Felicidades! ¡Lo adivinaste!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '¡¡¡Fin del juego!!!';
      setGameOver();
    } else {
      lastResult.textContent = '¡Incorrecto!';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = '¡El número es muy bajo!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = '¡El número es muy grande!';
      }
    }
  
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  
/*Esto es un montón de código — ¡uf! Repasemos cada sección y expliquemos lo qué hace.

La primera línea (línea 2 arriba) declara una variable llamada userGuess y establece su valor al valor actual ingresado dentro del campo de texto. También ejecutamos este valor a través del constructor Number() integrado, solo para asegurarnos de que el valor definitivamente sea un número.


A continuación, encontramos nuestro primer bloque de código condicional (líneas 3-5 arriba). Un bloque de código condicional te permite ejecutar código de manera selectiva, dependiendo de si una determinada condición es verdadera o no. Se parece un poco a una función, pero no lo es. La forma más simple de bloque condicional comienza con la palabra clave if, luego algunos paréntesis, luego unas llaves. Dentro del paréntesis incluimos una prueba. Si la prueba devuelve true, ejecutamos el código dentro de las llaves. Si no, no lo hacemos y pasamos al siguiente segmento del código. En este caso, la prueba está verificando si la variable guessCount es igual a 1 (es decir, si este es el primer intento del jugador o no):*/

guessCount === 1


/*Si es así, hacemos que el contenido del texto del párrafo de intentos sea igual a "Intentos previos:". Si no, no lo hacemos.
La línea 6 agrega el valor actual de userGuess al final del párrafo guesses, más un espacio en blanco para que haya un espacio entre cada intento mostrado.
El siguiente bloque (líneas 8-24 arriba) realiza algunas comprobaciones:
El primer if(){ } verifica si la respuesta del jugador es igual al randomNumber establecido al comienzo de nuestro JavaScript. Si es así, el jugador ha adivinado correctamente y ha ganado el juego, por lo tanto mostramos al jugador un mensaje de felicitación con un bonito color verde, borramos el contenido del cuadro de información de intentos Low/High y ejecutamos una función llamada setGameOver(), que examinaremos más adelante.
Ahora hemos encadenado otra prueba al final de la última usando una estructura else if(){ }. Esta comprueba si este intento es el último turno del jugador. Si es así, el programa hace lo mismo que en el bloque anterior, salvo por un mensaje de fin de juego en lugar de un mensaje de felicitación.
El bloque final encadenado al final de este código (el else { }) contiene código que solo se ejecuta si ninguna de las otras dos pruebas devuelve true (es decir, el jugador no acertó, pero todavía le quedan intentos). En este caso le decimos que es incorrecto, luego realizamos otra prueba condicional para verificar si el intento fue más alto o más bajo que la respuesta, mostrando un mensaje adicional según corresponda para decirle si tiene que ir más alto o bajo.
Las últimas tres líneas de la función (líneas 26 a 28 arriba) nos preparan para el siguiente intento. Agregamos 1 a la variable guessCount para que el jugador use su turno (++ es una operación de incremento — incrementar en 1), y vaciamos el valor del campo de texto. y enfocándolo de nuevo, listo para ingresar el próximo intento.*/

/*Eventos
A estas alturas, hemos implementado correctamente la función checkGuess(), pero no hará nada porque aún no la hemos llamado. Lo ideal, sería llamarla cuando se presiona el botón "Enviar respuesta", y para hacerlo necesitamos usar un evento. Los eventos son cosas que suceden en el navegador — se hace clic en un botón, se carga una página, se reproduce un video, etc. — en respuesta a lo cual podemos ejecutar bloques de código. Las construcciones que escuchan el evento que ocurre se denominan escuchas de eventos, y los bloques de código que se ejecutan en respuesta a la activación del evento se denominan controladores de eventos.

Agrega la siguiente línea debajo de tu función checkGuess():*/

guessSubmit.addEventListener('click', checkGuess);


/*Aquí estamos agregando un escucha de eventos al botón guessSubmit. Este es un método toma dos valores de entrada (llamados argumentos) — el tipo de evento que queremos escuchar (en este caso, click) como una cadena, y el código que queremos ejecutar cuando ocurra el evento (en este caso la función checkGuess()). Ten en cuenta que no es necesario especificar los paréntesis al escribirlo dentro de addEventListener().*/

/*Intenta guardar y actualizar tu código ahora, y tu ejemplo debería funcionar — hasta cierto punto. El único problema ahora es que si adivinas la respuesta correcta o agotas los intentos, el juego se interrumpirá porque aún no hemos definido la función setGameOver() que se supone se debe ejecutar una vez que el juego se acabó. Ahora, agreguemos nuestro código faltante y completemos la funcionalidad de ejemplo.*/


/*Finalizando la funcionalidad del juego
Agreguemos la función setGameOver() al final de nuestro código y luego repasémoslo. Agrega esto ahora, debajo del resto de su JavaScript:*/

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Iniciar nuevo juego';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
  
/*Las dos primeras líneas deshabilitan el campo de texto y el botón fijando sus propiedades disabled en true. Esto es necesario, porque si no lo hiciéramos, el jugador podría seguir enviando más intentos aunque el juego hubiera terminado, lo cual estropearía las cosas.
Las siguientes tres líneas generan un nuevo elemento <button>, establecen su etiqueta de texto en "Iniciar nuevo juego" y lo añaden al final de nuestro HTML existente.
La última línea establece un escucha de eventos en nuestro nuevo botón para que cuando se haga clic en él, se ejecute una función llamada resetGame().*/

/*¡Ahora también necesitamos definir esta función! Agrega el siguiente código, nuevamente al final de tu JavaScript:*/

function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

/*Este bloque de código bastante largo restablece completamente todo a cómo estaba al comienzo del juego, para que el jugador pueda intentarlo de nuevo. Eso:

Vuelve a poner guessCount en 1.
Vacía todo el texto de los párrafos de información. Seleccionamos todos los párrafos dentro de <div class="resultParas"></div>, luego recorremos cada uno, configurando su textContent en '' (una cadena vacía).
Elimina de nuestro código el botón de reinicio.
Habilita los elementos del formulario, vacía y enfoca el campo de texto, listo para ingresar un nuevo intento.
Elimina el color de fondo del párrafo lastResult.
Genera un nuevo número al azar ¡para que no vuelvas a adivinar el mismo número!.*/

/*Bucles
Una parte del código anterior que debemos examinar detalladamente es el bucle for. Los bucles son un muy importante concepto en programación, estos te permiten seguir ejecutando un fragmento de código una y otra vez, hasta que se cumpla una determinada condición.

Para empezar, de nuevo ve a tu consola JavaScript de las herramientas para desarrolladores del navegador e introduce lo siguiente:

for (let i = 1 ; i < 21 ; i++) { console.log(i) }
Copy to Clipboard
¿Que sucedió? Los números 1 a 20 se imprimieron en tu consola. Esto se debió al bucle. Un bucle for toma tres valores (argumentos) de entrada:

Un valor inicial: En este caso, comenzamos a contar en 1, pero este podría ser cualquier número que desees. También puedes reemplazar la letra i con cualquier nombre que desees, pero por convención se usa i porque es corto y fácil de recordar.
Una condición de salida: Aquí hemos especificado i < 21 — el ciclo continuará hasta que i no sea menor que 21. Cuando i llegue a 21, el bucle ya no se ejecutará.
Un incremento: Hemos especificado i++, que significa "agrega 1 a i". El ciclo se ejecutará una vez por cada valor de i, hasta que i alcance un valor de 21 (como se explicó anteriormente). En este caso, simplemente imprimimos el valor de i en la consola en cada iteración usando console.log().
Ahora veamos el ciclo en nuestro juego de adivinan el número — lo siguiente está dentro de la función resetGame():*/

const resetParas = document.querySelectorAll('.resultParas p');
for (let i = 0 ; i < resetParas.length ; i++) {
  resetParas[i].textContent = '';
}


/*Este código crea una variable que contiene una lista de todos los párrafos dentro de <div class="resultParas"> usando el método querySelectorAll(), luego recorre cada uno de ellos, eliminando el texto contenido a su paso.*/


/*Una pequeña explicación sobre objetos.
Agreguemos una mejora final más antes de entrar en esta explicación. Agrega la siguiente línea justo debajo de la línea let resetButton; cerca de la parte superior de tu JavaScript, luego guarda tu archivo:/*

/*Esta línea usa el método focus() para colocar automáticamente el cursor en el campo de texto <input> tan pronto como se cargue la página, lo cual significa que el jugador puede comenzar a escribir su primer intento inmediatamente, sin tener que hacer clic primero en el campo del formulario. Es solo una pequeña adición, pero mejora la experiencia del jugador — brindando al usuario una buena pista visual de lo que tiene que hacer para jugar.

Analicemos lo que está sucediendo aquí con un poco más de detalle. En JavaScript, todo es un objeto. Un objeto es una colección de funciones relacionadas almacenadas en un solo grupo. Puedes crear tus propios objetos, pero eso es bastante avanzado y no lo cubriremos hasta mucho más adelante en el curso. Por ahora, analizaremos brevemente los objetos integrados que contiene tu navegador, los cuales te permiten hacer muchas cosas útiles.

En este caso particular, primero creamos una constante guessField que almacena una referencia al campo de texto del formulario en nuestro HTML — la siguiente línea se puede encontrar entre nuestras declaraciones cerca de la parte superior del código:*/

/*Para obtener esta referencia, usamos el método querySelector() del objeto document. querySelector() toma un parámetro — un selector CSS (en-US) que selecciona el elemento del que deseas una referencia.*/

/*const guessField = document.querySelector('.guessField');*/

/*Para obtener esta referencia, usamos el método querySelector() del objeto document. querySelector() toma un parámetro — un selector CSS (en-US) que selecciona el elemento del que deseas una referencia.*/

/*Debido a que guessField ahora contiene una referencia a un elemento <input>, ahora tiene acceso a varias propiedades (básicamente variables almacenadas dentro de los objetos, algunas de las cuales no les puedes cambiar sus valores) y métodos (básicamente funciones almacenadas dentro de objetos). Un método disponible para elementos input es focus(), por lo que ahora podemos usar esta línea para enfocar el campo de texto:*/

guessField.focus();









