//FUNCIONES BLOQUES DE CODIGO REUTILIZABLES

/*permiten almacenar un fragmento de código que realiza una única tarea dentro de un bloque definido y luego llamar a ese código cuando lo necesite usando un único comando corto, en lugar de tener que escribir lo mismo. */


//FUNCIONES DE NAVEGADOR INTEGRADAS


/*Hemos utilizado mucho las funciones integradas en el navegador en este curso.

Cada vez que manipulamos una cadena de texto, por ejemplo:*/



const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string


// O cada vez que manipulamos una matriz:

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

//O cada vez que generamos un número aleatorio:

const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number


// FUNCIONES VS METODOS


/*Las funciones que forman parte de objetos se llaman métodos .*/


// INVOCAR FUNCIONES

/*Probablemente ya lo tengas claro, pero por si acaso, para usar una función después de haberla definido, debes ejecutarla (o invocarla). Esto se hace incluyendo el nombre de la función en algún lugar del código, seguido de paréntesis.*/

function myFunction() {
    alert("hello");
  }
  
  myFunction();
  // calls the function once

/*Esta forma de crear una función también se conoce como declaración de función . Siempre está elevado, por lo que puede llamar a la función anterior a la definición de función y funcionará bien.*/


//PARAMETROS DE FUNCION

/*Algunas funciones requieren que se especifiquen parámetros cuando las invoca; estos son valores que deben incluirse dentro de los paréntesis de la función, que necesita para hacer su trabajo correctamente.*/

/*Como ejemplo, la función Math.random() incorporada del navegador no requiere ningún parámetro. Cuando se llama, siempre devuelve un número aleatorio entre 0 y 1:*/

// const myNumber = Math.random();

/*Sin embargo, la función incorporada de reemplazo de cadena del navegador necesita dos parámetros: la subcadena que se buscará en la cadena principal y la subcadena con la que se reemplazará esa cadena:*/

//const myText = "I am a string";
// const newString = myText.replace("string", "sausage");


//PARAMETROS OPCIONALES

/*A veces los parámetros son opcionales; no es necesario especificarlos. Si no lo hace, la función generalmente adoptará algún tipo de comportamiento predeterminado. Como ejemplo, el parámetro de la función array join() es opcional:*/

// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'

/*Si no se incluye ningún parámetro para especificar un carácter de unión/delimitación, se utiliza una coma de forma predeterminada.*/

// PARAMETROS DETERMINADOS

/*Si está escribiendo una función y desea admitir parámetros opcionales, puede especificar valores predeterminados agregando = después del nombre del parámetro, seguido del valor predeterminado:*/

function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
  }
  
  hello("Ari"); // Hello Ari!
  hello(); // Hello Chris!

//FUNCIONES ANONIMAS Y FUNCIONES DE FLECHA

/*Hasta ahora acabamos de crear una función como esta:*/

function myFunction() {
    alert("hello");
  }

/*Pero también puedes crear una función que no tenga nombre:*/


(function () {
    alert("hello");
});

//Esto se llama función anónima porque no tiene nombre. A menudo verás funciones anónimas cuando una función espera recibir otra función como parámetro.


/*Esta forma de crear una función también se conoce como expresión de función . A diferencia de la declaración de función, las expresiones de función no se elevan.*/



//////////////////////

//EJEMPLO DE FUNCION ANINONIMA


/*Por ejemplo, digamos que desea ejecutar algún código cuando el usuario escribe en un cuadro de texto. Para hacer esto puedes llamar a la addEventListener()función del cuadro de texto. Esta función espera que le pases (al menos) dos parámetros:

el nombre del evento a escuchar, que en este caso es 'keydown'
una función que se ejecutará cuando ocurra el evento.
Cuando el usuario presiona una tecla, el navegador llamará a la función que usted proporcionó y le pasará un parámetro que contiene información sobre este evento, incluida la tecla particular que presionó el usuario:*/

function logKey(event) {
    console.log(`You pressed "${event.key}".`);
  }
  
  textBox.addEventListener("keydown", logKey);

/*En lugar de definir una logKey()función separada, puede pasar una función anónima a addEventListener():*/

textBox.addEventListener("keydown", function (event) {
    console.log(`You pressed "${event.key}".`);
  });


//FUNCION FLECHA 
/*Si pasa una función anónima como esta, hay una forma alternativa que puede usar, llamada función de flecha . En lugar de function(event), escribes (event) =>:*/

textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed "${event.key}".`);
  });

//Si la función solo toma un parámetro, puede omitir los corchetes alrededor del parámetro:

textBox.addEventListener("keydown", event => {
    console.log(`You pressed "${event.key}".`);
  });

/*Finalmente, si su función contiene solo una línea que es una returndeclaración, también puede omitir las llaves y la returnpalabra clave, y devolver implícitamente la expresión. En el siguiente ejemplo, utilizamos el map()método de Arraypara duplicar cada valor de la matriz original:*/

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

/*El map()método toma cada elemento de la matriz por turno y lo pasa a la función dada. Luego toma el valor devuelto por esa función y lo agrega a una nueva matriz.

Entonces, en el ejemplo anterior, item => item * 2la función de flecha es equivalente a:*/

function doubleItem(item) {
    return item * 2;
  }

//Puede utilizar la misma sintaxis concisa para reescribir el addEventListenerejemplo.
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);

/*En este caso, el valor de console.log(), que es undefined, se devuelve implícitamente desde la función de devolución de llamada.

Le recomendamos que utilice funciones de flecha, ya que pueden hacer que su código sea más corto y legible. Para obtener más información, consulte la sección sobre funciones de flecha en la guía de JavaScript y nuestra página de referencia sobre funciones de flecha .*/


// ALCANCE DE LA FUNCION Y CONFLICTOS

/*Hablemos un poco sobre el alcance , un concepto muy importante cuando se trata de funciones. Cuando crea una función, las variables y otras cosas definidas dentro de la función están dentro de su propio alcance separado , lo que significa que están encerradas en sus propios compartimentos separados, inalcanzables desde el código externo a las funciones.*/

/*l nivel superior fuera de todas sus funciones se llama alcance global . Los valores definidos en el alcance global son accesibles desde cualquier parte del código.*/

//////// VER EL INDEX.HTML

/*Primero, haga una copia local de nuestro ejemplo function-scope.html . Contiene dos funciones llamadas a()y b(), y tres variables: x,, yy z, dos de las cuales están definidas dentro de las funciones y una en el ámbito global. También contiene una tercera función llamada output(), que toma un único parámetro y lo genera en un párrafo de la página.
Abra el ejemplo en un navegador y en su editor de texto.*/

/*
Ambos deberían generar un error en la consola del tipo " ReferenceError: y no está definido ". ¿Porqué es eso? Debido al alcance de la función, yy zestán bloqueados dentro de las funciones a()y , por lo que no se puede acceder a ellos cuando se llama desde el alcance global. b()output()
Sin embargo, ¿qué pasa cuando se llama desde otra función? Prueba a editar a()y b()quedarán así:
*/

/*Debería ver los valores yy zimpresos en la ventana gráfica del navegador. Esto funciona bien, ya que la output()función se llama dentro de las otras funciones, en el mismo ámbito en el que se definen las variables que imprime, en cada caso. output()en sí está disponible desde cualquier lugar, tal y como se define en el ámbito global.
*/

/*Tanto la llamada a()como b()deberían imprimir el valor de x en la ventana gráfica del navegador. Funcionan bien porque, aunque las output()llamadas no están en el mismo alcance xdefinido, xes una variable global, por lo que está disponible dentro de todo el código, en todas partes.*/



/* Las mismas reglas de alcance no se aplican a los bucles (por ejemplo for() { }, ) y a los bloques condicionales (por ejemplo if () { }, ): se ven muy similares, ¡pero no son lo mismo! Tenga cuidado de no confundirlos.

Nota: El error ReferenceError: "x" no está definido es uno de los más comunes que encontrará. Si te aparece este error y estás seguro de haber definido la variable en cuestión, verifica en qué alcance se encuentra.*/