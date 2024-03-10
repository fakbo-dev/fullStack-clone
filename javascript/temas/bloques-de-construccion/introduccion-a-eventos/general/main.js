//INTRODUCCION A EVENTOS 

/*Los eventos son cosas que suceden en el sistema que estás programando, de las que el sistema te informa para que tu código pueda reaccionar ante ellos.

Por ejemplo, si el usuario hace clic en un botón en una página web, es posible que desee reaccionar a esa acción mostrando un cuadro de información. En este artículo, analizamos algunos conceptos importantes relacionados con los eventos y analizamos cómo funcionan en los navegadores. Este no será un estudio exhaustivo; justo lo que necesita saber en esta etapa.*/

//QUE ES UN EVENTO

/* son como su nombre dice eventos que suceden en el sistema que estamos progamando y funciona como un accionador o un disparo para mandar una orden de cualquiera sea el tipo de evento que se accione que se traducce en ejecutar el codigo*/

/*Por ejemplo:

El usuario selecciona, hace clic o pasa el cursor sobre un determinado elemento.

El usuario elige una tecla en el teclado.

El usuario cambia el tamaño o cierra la ventana del navegador.

Una página web termina de cargarse.

Se envía un formulario.

Un vídeo se reproduce, se pausa o finaliza.

Se produce un error.*/


/*a la accion de reaccionar a un evento se le tiene que adjuntar un 'controlador de eventos ' este es un bloque de cogido que generalmente es creador por el programador y se ejecuta cuando se activa el evento, Cuando se define un bloque de codigo como este (function) para ejecutarse en respuesta al evento se le llama 'Resgistrando un controlador de eventos'*/

/*NOTA: los 'controladores de eventos aveces se pueden denominar como detectores de evento. el oyente escucha si ocurre el evento y el controlador es el codigo que se ejecuta en respuesta de lo que sucede*/

/*Nota: Los eventos web no forman parte del lenguaje principal de JavaScript; se definen como parte de las API integradas en el navegador.*/

//EJEMPLO MANEJAR UN EVENTO 'CLICK'

/*supongamos que tenemos un tag button en un elemento html*/

<button>Change color</button>

/*y tenemos algo de javaScript agrega un controlador de eventos al 'click' evento del boton y reacciona al evento configurando el fondo de la pagina en un color aleatorio*/

//const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1))
}
btn.addEventListener('click', () => {
const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
document.body.style.backgroundColor = rndCol;
});

////////////////////////////////////////////////////////////

// USANDO addEventListener()

/*como vimos en el ejemplo anterior los objetos que pueden desencadenar eventos tienen un addEventListener() metodo el cual es el mecanismo recomendado para agregar eventos*/

//analizemos el ejemplo anterior
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});


// el button del html activara el elemento cuando el usuario haga click luego se ejecuta la funcion sin nombre. al metodo le estamos pasando dos parametros:

/* la cadena 'click' para indicar que queremos escuchar el evento del click  el mouse tiene muchos mas evento como por ejemplo 'mouseover' cuando el usuario mueve el mouse sobre el boton o 'keydown' que es cuando el usuario presiona una tecla y el boton esta hover (enfocado)*/

/*y una funcion para llamar cuando ocurre el evento anterior dicho. en nuestro caso genera un color aleatorio*/

/*esta bien del mismo modo que la funcion llamada sea una independiente no existe ningun problema esto tambien es factible*/
function changeBackground() {
    return NaN;
}
btn.addEventListener('click', changeBackground);


//ESCUCHANDO OTROS EVENTOS

/*existen como ya dije muchos eventos diferentes que pueden ser llamados para el tag 'button' observemos algunos casos*/


/*focus y blur: el color va a cambiar cuando se enfoque el boton o se desenfoque  su uso practico es par mostrar informacion sobre como completar los campos de un formulario  cuando estan enfocados, o para mostrar un mensaje de error si un campo del formulario se completa con un valor incorrecto*/

/*dblclick: el color cambia solo cuando se hace doble click al boton*/

/*mouseover y mouseout: el color cambia cuando el puntero se pone sobre el boton o cuando el puntero se aleja del boton, respectivamente*/

/*Algunos eventos, como click, están disponibles en casi cualquier elemento. Otros son más específicos y sólo útiles en determinadas situaciones: por ejemplo, el playevento sólo está disponible en algunos elementos, como <video>.*/


// ELIMINANDO LISTENERS

// SI Agregamos un 'addEventListener()' podemos mas abajo en el codigo borrarlo con el 'removeEventListener()' metodo. por ejemplo esta linea de codigo elimina  la llamado a 'changeBackground'

btn.removeEventListener("click", changeBackground);

/*Los controladores de eventos también se pueden eliminar pasando un comando AbortSignal a addEventListener() y luego llamando abort() al controlador que posee el archivo AbortSignal. Por ejemplo, para agregar un controlador de eventos que podamos eliminar con AbortSignal:*/

const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler
);


//Luego, el controlador de eventos creado por el código anterior se puede eliminar de esta manera:

controller.abort(); // removes any/all event handlers associated with this controller


/*Para programas pequeños y simples, no es necesario limpiar los controladores de eventos antiguos y no utilizados, pero para programas más grandes y complejos, puede mejorar la eficiencia. Además, la capacidad de eliminar controladores de eventos le permite tener el mismo botón realizando diferentes acciones en diferentes circunstancias: todo lo que tiene que hacer es agregar o eliminar controladores.*/


//AGREGAR VARIOS LISTENER A UN SOLO EVENTO


/*si agregamos diferentes metodos de llamada podemos apuntar a un solo  evento en si*/

myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);

//////////////////////////////////////////////////////////////////////////////////////

/*Aprende más

Hay otras potentes funciones y opciones disponibles con addEventListener().

Estos están un poco fuera del alcance de este artículo, pero si desea leerlos, visite las addEventListener()páginas removeEventListener()de referencia.*/

//////////////////////////////////////////////////////////////////////////////////////////////////


//OTROS TIPOS DE addEventListener 

/*lo recomendado es usar addEventListener para poder resgistrar controladores de eventos ya que es el metodo mas potente y el recomendado para programas complejos. Sin embargo existe otros dos metodos de llamada que son 'Propiedades del controlador de eventos' y 'controladores de eventos en linea'*/


//Propiedad del controlador de eventos

/* Los objetos (como los botones) que pueden activar eventos también suelen tener propiedades cuyo nombre va on seguido del nombre del evento. Por ejemplo, los elementos tienen una propiedad onclick. Esto se denomina propiedad del controlador de eventos . Para escuchar el evento, puede asignar la función de controlador a la propiedad.*/

/*Por ejemplo, podríamos reescribir el ejemplo de color aleatorio de esta manera:*/

const btn2 =  document.querySelector('button');

function random (number) {
  return Math.floor(Math.random() * (number + 1));
}

btn2.onclick = () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};

/*También puede establecer la propiedad del controlador en una función con nombre:*/

// const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;

/*Con las propiedades del controlador de eventos, no puede agregar más de un controlador para un solo evento. Por ejemplo, puedes llamar addEventListener('click', handler)a un elemento varias veces, con diferentes funciones especificadas en el segundo argumento:*/

element.addEventListener("click", function1);
element.addEventListener("click", function2);

/*Esto es imposible con las propiedades del controlador de eventos porque cualquier intento posterior de establecer la propiedad sobrescribirá los anteriores:*/

element.onclick = function1;
element.onclick = function2;


//CONTROLADORES DE EVENTOS EN LINEA (NO USAR)

/*Es posible que también veas un patrón como este en tu código:*/

<button onclick="bgChange()">Press me</button>

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

/*El primer método para registrar controladores de eventos que se encuentra en la Web involucraba atributos HTML del controlador de eventos (o controladores de eventos en línea ) como el que se muestra arriba: el valor del atributo es literalmente el código JavaScript que desea ejecutar cuando ocurre el evento. El ejemplo anterior invoca una función definida dentro de un <script>elemento en la misma página, pero también puedes insertar JavaScript directamente dentro del atributo, por ejemplo:*/

<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>

/*Puede encontrar equivalentes de atributos HTML para muchas de las propiedades del controlador de eventos; sin embargo, no deberías utilizarlos: se consideran una mala práctica. Puede parecer fácil usar un atributo de controlador de eventos si está haciendo algo realmente rápido, pero rápidamente se vuelven inmanejables e ineficientes.

Para empezar, no es una buena idea mezclar HTML y JavaScript, ya que resulta difícil de leer. Mantener su JavaScript separado es una buena práctica y, si está en un archivo separado, puede aplicarlo a varios documentos HTML.

Incluso en un único archivo, los controladores de eventos en línea no son una buena idea. Un botón está bien, pero ¿y si tuvieras 100 botones? Tendrías que agregar 100 atributos al archivo; rápidamente se convertiría en una pesadilla de mantenimiento. Con JavaScript, puedes agregar fácilmente una función de controlador de eventos a todos los botones de la página sin importar cuántos haya, usando algo como esto:*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}



/*Finalmente, muchas configuraciones de servidor comunes no permitirán JavaScript en línea, como medida de seguridad.

Nunca debes usar los atributos del controlador de eventos HTML ; están desactualizados y usarlos es una mala práctica.*/


///////////////////////////////////////////////////////////////////////////////////////



// OBJETOS DE EVENTOS

/*A veces, dentro de una función de controlador de eventos, verá un parámetro especificado con un nombre como 'event', 'evto' 'e'. Esto se denomina objeto de evento y se pasa automáticamente a los controladores de eventos para proporcionar características e información adicionales. Por ejemplo, reescribamos ligeramente nuestro ejemplo de color aleatorio:*/

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);


/*Aquí puede ver que estamos incluyendo un objeto de evento, e , en la función, y en la función que establece un estilo de color de fondo e.target, que es el botón en sí. La targetpropiedad del objeto de evento es siempre una referencia al elemento en el que ocurrió el evento. Entonces, en este ejemplo, configuramos un color de fondo aleatorio en el botón, no en la página*/

/*Puede usar cualquier nombre que desee para el objeto de evento; solo necesita elegir un nombre que luego pueda usar para hacer referencia a él dentro de la función del controlador de eventos. e// es utilizado con mayor frecuencia por los desarrolladores porque es breve y fácil de recordar evt. eventSiempre es bueno ser coherente, consigo mismo y, si es posible, con los demás.*/

//propiedad de los objetos de evento

/*La mayoría de los objetos de evento tienen un conjunto estándar de propiedades y métodos disponibles en el objeto de evento; consulte la Event referencia del objeto para obtener una lista completa.

Algunos objetos de eventos añaden propiedades adicionales que son relevantes para ese tipo particular de evento. Por ejemplo, el keydownevento se activa cuando el usuario presiona una tecla. Su objeto de evento es a KeyboardEvent, que es un Event objeto especializado con una keypropiedad que le indica qué tecla se presionó:*/

//<input id="textBox" type="text">
//<div id="output"></div>

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

//Prevenir el comportamiento predeterminado 

/*A veces, te encontrarás con una situación en la que deseas evitar que un evento haga lo que hace de forma predeterminada. El ejemplo más común es el de un formulario web, por ejemplo, un formulario de registro personalizado. Cuando completa los detalles y hace clic en el botón Enviar, el comportamiento natural es que los datos se envíen a una página específica en el servidor para su procesamiento y que el navegador sea redirigido a una página de "mensaje de éxito" de algún tipo (o la misma página, si no se especifica otra).

El problema surge cuando el usuario no ha enviado los datos correctamente: como desarrollador, desea evitar el envío al servidor y mostrar un mensaje de error que indique qué está mal y qué se debe hacer para corregir las cosas. Algunos navegadores admiten funciones de validación automática de datos de formulario, pero como muchos no lo hacen, se recomienda no confiar en ellas e implementar sus propias comprobaciones de validación. Veamos un ejemplo sencillo.*/


/*Primero, un formulario HTML simple que requiere que ingrese su nombre y apellido:*/ // ver index.html

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});

/*Obviamente, esta es una validación de formulario bastante débil (no impediría que el usuario valide el formulario con espacios o números ingresados ​​en los campos, por ejemplo), pero está bien para propósitos de ejemplo. El resultado es el siguiente:*/



// EVENTOS BURBUJEANTES

/*La propagación de eventos describe cómo el navegador maneja los eventos dirigidos a elementos anidados.*/

//establecer un oyente a un elemento padre

//considere la sigueinte pagina web 

/*<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
*/

/*Aquí el botón está dentro de otro elemento, un <div> elemento. Decimos que el <div> elemento aquí es el padre del elemento que contiene. ¿Qué sucede si agregamos un controlador de evento de clic al padre y luego hacemos clic en el botón?*/

const output2 = document.querySelector("#output");
function handleClick(e) {
  output2.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);

/*Verás que el padre activa un evento de clic cuando el usuario hace clic en el botón:*/

//You clicked on a DIV element

/*Esto tiene sentido: el botón está dentro de <div>, por lo que cuando haces clic en el botón, también estás haciendo clic implícitamente en el elemento que está dentro.*/




//EJEMPLO BURBUJEANTE

/*Intentemos agregar controladores de eventos de clic al botón, a su padre (el <div>) y al <body>elemento que contiene ambos:*/

const output3 = document.querySelector("#output");
function handleClick(e) {
  output3.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container2 = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container2.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);


/*Verás que los tres elementos activan un evento de clic cuando el usuario hace clic en el botón:*/


/*You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
*/

/*En este caso:

el clic en el botón se dispara primero
seguido del clic en su padre (el <div>elemento)
seguido del <div>padre del elemento (el <body>elemento).
Describimos esto diciendo que el evento surge desde el elemento más interno en el que se hizo clic.

Este comportamiento puede resultar útil y también puede provocar problemas inesperados. En las siguientes secciones, veremos el problema que causa y encontraremos la solución.*/

//EJEMPLO DE REPRODUCTOR DE VIDEO

/*En este ejemplo, nuestra página contiene un vídeo, que inicialmente está oculto, y un botón denominado "Mostrar vídeo". Queremos la siguiente interacción:

Cuando el usuario hace clic en el botón "Mostrar video", muestra el cuadro que contiene el video, pero no comienza a reproducirlo todavía.

Cuando el usuario hace clic en el video, comienza a reproducirlo.

Cuando el usuario haga clic en cualquier parte del cuadro fuera del video, oculte el cuadro.

El HTML se ve así:*/

/*<button>Display video</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
*/

/*Incluye:

un <button>elemento
un <div>elemento que inicialmente tiene un class="hidden"atributo
un <video>elemento anidado dentro del <div>elemento.
Estamos usando CSS para ocultar elementos con el "hidden"conjunto de clases.*/

const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));


/*Esto agrega tres 'click'detectores de eventos:

uno en el <button>, que muestra el <div>que contiene el<video>
uno en el <video>, que comienza a reproducir el video
uno en el <div>, que oculta el video*/

/*Deberías ver que al hacer clic en el botón se muestra el cuadro y el vídeo que contiene. Pero luego, cuando haces clic en el video, el video comienza a reproducirse, ¡pero el cuadro vuelve a estar oculto!

El vídeo está dentro <div>(es parte de él), por lo que al hacer clic en el vídeo se ejecutan ambos controladores de eventos, lo que provoca este comportamiento.*/

// Solucionando el problema con stopPropagation()

/*Como vimos en la sección anterior, la propagación de eventos a veces puede crear problemas, pero hay una manera de evitarlo. El Eventobjeto tiene una función disponible llamada stopPropagation()que, cuando se llama dentro de un controlador de eventos, evita que el evento se propague a otros elementos.

Podemos solucionar nuestro problema actual cambiando el JavaScript a esto:*/


const btn = document.querySelector("button");
const box2 = document.querySelector("div");
const video2 = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video2.addEventListener("click", (event) => {
  event.stopPropagation();
  video2.play();
});

box2.addEventListener("click", () => box2.classList.add("hidden"));

/*Todo lo que hacemos aquí es llamar stopPropagation()al objeto de evento en el controlador del evento <video>del elemento 'click'. Esto evitará que ese evento llegue a la caja. Ahora intenta hacer clic en el botón y luego en el vídeo:*/


//CAPTURA DE EVENTOS


/*Una forma alternativa de propagación de eventos es la captura de eventos . Esto es como la propagación de eventos, pero el orden se invierte: por lo tanto, en lugar de que el evento se active primero en el elemento más interno objetivo y luego en elementos sucesivamente menos anidados, el evento se activa primero en el elemento menos anidado y luego en elementos sucesivamente más anidados . hasta alcanzar el objetivo.

La captura de eventos está deshabilitada de forma predeterminada. Para habilitarlo tienes que pasar la captureopción en addEventListener().

Este ejemplo es igual al ejemplo burbujeante que vimos antes, excepto que hemos usado la captureopción:*/

/*<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
*/

//const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

//const container = document.querySelector("#container");
//const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick);

/*En este caso, el orden de los mensajes se invierte: el <body>controlador de eventos se activa primero, seguido por el <div>controlador de eventos, seguido por el <button>controlador de eventos:

You clicked on a BODY element
You clicked on a DIV element

You clicked on a BUTTON element
¿Por qué molestarse tanto en capturar como en burbujear? En los viejos tiempos, cuando los navegadores eran mucho menos compatibles que ahora, Netscape solo usaba captura de eventos e Internet Explorer solo usaba transmisión de eventos. Cuando el W3C decidió intentar estandarizar el comportamiento y llegar a un consenso, acabó con este sistema que incluía ambos, que es lo que implementan los navegadores modernos.

De forma predeterminada, casi todos los controladores de eventos se registran en la fase de propagación y esto tiene más sentido la mayor parte del tiempo.*/

//DELEGACION DE EVENTOS

/*Delegación de eventos
En la última sección, analizamos un problema causado por la propagación de eventos y cómo solucionarlo. Sin embargo, la difusión de eventos no sólo es molesta: puede ser muy útil. En particular, permite la delegación de eventos . En esta práctica, cuando queremos que se ejecute algún código cuando el usuario interactúa con cualquiera de un gran número de elementos secundarios, configuramos el detector de eventos en su elemento principal y hacemos que los eventos que suceden en ellos se transmitan a su elemento principal en lugar de tener que hacerlo. configure el detector de eventos en cada niño individualmente.

Volvamos a nuestro primer ejemplo, donde configuramos el color de fondo de toda la página cuando el usuario hacía clic en un botón. Supongamos que, en cambio, la página está dividida en 16 mosaicos y queremos configurar cada mosaico con un color aleatorio cuando el usuario hace clic en ese mosaico.

Aquí está el HTML:*/


/*<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
*/

//Tenemos un poco de CSS, para establecer el tamaño y la posición de los mosaicos:


/*.tile {
  height: 100px;
  width: 25%;
  float: left;
}
*/

/*Ahora en JavaScript, podríamos agregar un controlador de eventos de clic para cada mosaico. Pero una opción mucho más simple y eficiente es configurar el controlador de eventos de clic en el padre y confiar en la propagación de eventos para garantizar que el controlador se ejecute cuando el usuario haga clic en un mosaico:*/


function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

const containe2r = document.querySelector("#container");

container2.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});

//En este ejemplo, usamos event.targetpara obtener el elemento que fue el objetivo del evento (es decir, el elemento más interno). Si quisiéramos acceder al elemento que maneja este evento (en este caso el contenedor) podríamos usar event.currentTarget.

//Consulte útil-eventtarget.html para obtener el código fuente completo; Véalo también en vivo aquí.

//NO SON SOLO PAGINAS WEB

/*Los eventos no son exclusivos de JavaScript: la mayoría de los lenguajes de programación tienen algún tipo de modelo de eventos y la forma en que funciona el modelo a menudo difiere de la de JavaScript. De hecho, el modelo de eventos en JavaScript para páginas web difiere del modelo de eventos de JavaScript tal como se usa en otros entornos.

Por ejemplo, Node.js es un tiempo de ejecución de JavaScript muy popular que permite a los desarrolladores utilizar JavaScript para crear aplicaciones de red y del lado del servidor. El modelo de eventos de Node.js se basa en oyentes para escuchar eventos y emisores para emitir eventos periódicamente; no suena tan diferente, pero el código es bastante diferente y utiliza funciones como registrar un oyente de eventos on()y once()registrar un detector de eventos que se da de baja después de ejecutarse una vez. Los documentos del evento de conexión HTTP proporcionan un buen ejemplo.

También puede utilizar JavaScript para crear complementos para varios navegadores (mejoras en la funcionalidad del navegador) utilizando una tecnología llamada WebExtensions . El modelo de eventos es similar al modelo de eventos web, pero un poco diferente: las propiedades de los detectores de eventos se escriben en mayúsculas y minúsculas (como onMessageen lugar de onmessage) y deben combinarse con la addListenerfunción. Vea la runtime.onMessagepágina para ver un ejemplo.

No es necesario que comprenda nada sobre otros entornos similares en esta etapa de su aprendizaje; sólo queríamos dejar claro que los eventos pueden diferir en diferentes entornos de programación.*/




