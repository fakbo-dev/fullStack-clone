//CONTRUIR UNA FUNCTION

/*Se llamará la función personalizada que vamos a crear displayMessage(). Mostrará un cuadro de mensaje personalizado en una página web y actuará como un reemplazo personalizado de la función alert() incorporada del navegador .*/


/*La alertfunción toma un único argumento: la cadena que se muestra en el cuadro de alerta. Intente variar la cadena para cambiar el mensaje.

La alertfunción es limitada: puedes alterar el mensaje, pero no puedes variar fácilmente nada más, como el color, el ícono o cualquier otra cosa. Construiremos uno que resultará más divertido.*/

/*Comenzamos con la palabra clave function, lo que significa que estamos definiendo una función. A esto le sigue el nombre que queremos darle a nuestra función, un conjunto de paréntesis y un conjunto de llaves. */

function displayMessage(msgText, msgType) {

//La primera línea selecciona el <body>elemento usando la API DOM para obtener la bodypropiedad del documentobjeto global y asignándolo a una constante llamada body, para que podamos hacerle cosas más adelante:

const body = document.body;

//La siguiente sección utiliza una función API DOM llamada document.createElement()para crear un <div>elemento y almacenar una referencia a él en una constante llamada panel. Este elemento será el contenedor exterior de nuestro cuadro de mensaje.

const panel = document.createElement('div');

//Luego usamos otra función API DOM llamada Element.setAttribute()para establecer un classatributo en nuestro panel con un valor de msgBox. Esto es para facilitar el diseño del elemento; si observa el CSS de la página, verá que estamos usando un .msgBoxselector de clases para diseñar el cuadro de mensaje y su contenido.

panel.setAttribute('class', 'msgBox');

//Finalmente, llamamos a una función DOM llamada Node.appendChild()a la bodyconstante que almacenamos anteriormente, que anida un elemento dentro de otro como hijo del mismo. Especificamos el panel <div>como el hijo que queremos agregar dentro del <body>elemento. Necesitamos hacer esto ya que el elemento que creamos no aparecerá solo en la página; debemos especificar dónde colocarlo.

body.appendChild(panel);


//Las siguientes dos secciones utilizan las mismas funciones createElement()y appendChild()que ya hemos visto para crear dos elementos nuevos, a <p>y a <button>, e insertarlos en la página como elementos secundarios del panel <div>. Usamos su Node.textContentpropiedad, que representa el contenido de texto de un elemento, para insertar un mensaje dentro del párrafo y una "x" dentro del botón. Este botón será en el que se deberá hacer clic/activar cuando el usuario desee cerrar el cuadro de mensaje.

const msg = document.createElement('p');
msg.textContent = 'This is a message box';
panel.appendChild(msg);


const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

//Finalmente, llamamos addEventListener()para agregar una función que se llamará cuando el usuario haga clic en el botón "cerrar". El código eliminará todo el panel de la página para cerrar el cuadro de mensaje.



//Brevemente, el addEventListener()método lo proporciona el botón (o de hecho, cualquier elemento de la página) al que se le puede pasar una función y el nombre de un evento. En este caso, el nombre del evento es "clic", lo que significa que cuando el usuario hace clic en el botón, se ejecutará la función. Aprenderá mucho más sobre eventos en nuestro artículo de eventos . La línea dentro de la función usa la Node.removeChild()función DOM API para especificar que queremos eliminar un elemento secundario específico del elemento HTML, en este caso, el panel <div>.

closeBtn.addEventListener('click', () => 
panel.parentNode.removeChild(panel),
);
}

// LLAMANDO A LA FUNCION 

// displayMessage();

/*Esta línea invoca la función, haciendo que se ejecute inmediatamente. Cuando guardes tu código y lo vuelvas a cargar en el navegador, verás que el pequeño cuadro de mensaje aparece inmediatamente, solo una vez. Después de todo, solo lo llamaremos una vez.*/

//Ahora abra las herramientas de desarrollo de su navegador en la página de ejemplo, vaya a la consola de JavaScript y escriba la línea nuevamente allí, ¡la verá aparecer nuevamente! Esto es divertido: ahora tenemos una función reutilizable a la que podemos llamar cuando queramos. Pero probablemente queramos que aparezca en respuesta a las acciones del usuario y del sistema. En una aplicación real, un cuadro de mensaje de este tipo probablemente se llamaría en respuesta a la disponibilidad de nuevos datos, o a que se ha producido un error, o al usuario que intenta eliminar su perfil ("¿está seguro de esto?"), o al usuario que agrega un nuevo contacto y la operación finalizándose exitosamente, etc. En esta demostración, aparecerá el cuadro de mensaje cuando el usuario haga clic en el botón.


//A continuación, seleccionaremos el botón y almacenaremos una referencia a él en una constante. Agregue la siguiente línea a su código, encima de la definición de la función:
const btn = document.querySelector("button");
btn.addEventListener("click", displayMessage);

//quí invocamos algún código en respuesta a que se hace clic en un botón. Pero en este caso, en lugar de llamar a una función anónima que contiene algún código, llamamos a nuestra displayMessage()función por su nombre.

//Quizás se pregunte por qué no hemos incluido los paréntesis después del nombre de la función. Esto se debe a que no queremos llamar a la función inmediatamente, solo después de hacer clic en el botón. Si intentas cambiar la línea a


// btn.addEventListener("click", displayMessage());


//y al guardar y recargar, verá que aparece el cuadro de mensaje sin que se haga clic en el botón. Los paréntesis en este contexto a veces se denominan "operador de invocación de función". Solo los usa cuando desea ejecutar la función inmediatamente en el alcance actual. Del mismo modo, el código dentro de la función anónima no se ejecuta inmediatamente, ya que está dentro del alcance de la función.



/////////////////////////////////////////////////////

//MEJORANDO LA FUNCION CON PARAMETROS

/*Tal como está, la función todavía no es muy útil; no queremos mostrar simplemente el mismo mensaje predeterminado cada vez. Mejoremos nuestra función agregando algunos parámetros, permitiéndonos llamarla con algunas opciones diferentes.*/

/*Primero que nada, actualiza la primera línea de la función:*/

//function displayMessage() {

// A ESTO

// function displayMessage(msgText, msgType) {

/*Ahora, cuando llamamos a la función, podemos proporcionar dos valores de variables dentro del paréntesis para especificar el mensaje que se mostrará en el cuadro de mensaje y el tipo de mensaje que es.*/

msg.textContent = "This is a message box";

// A

msg.textContent = msgText;


/*Por último, pero no menos importante, ahora necesita actualizar su llamada de función para incluir algún texto de mensaje actualizado. Cambie la siguiente línea:*/

btn.addEventListener("click", () =>
  displayMessage("Woo, this is a different message!"),
);

/*Si queremos especificar parámetros entre paréntesis para la función que estamos llamando, entonces no podemos llamarla directamente; debemos colocarla dentro de una función anónima para que no esté en el alcance inmediato y, por lo tanto, no se llame inmediatamente. . Ahora no se llamará hasta que se haga clic en el botón.*/

// UN PARAMETRO MAS COMPLEJO 

/*Pasamos al siguiente parámetro. Esto implicará un poco más de trabajo: lo configuraremos de modo que, según el msgTypeparámetro configurado, la función muestre un icono diferente y un color de fondo diferente.*/

/*Ahora necesitamos agregar código a nuestra displayMessage()función para manejar la visualización de los íconos. Agregue el siguiente bloque justo encima de la llave de cierre ( }) de su función:*/

if (msgType === "warning") {
    msg.style.backgroundImage = "url(icons/warning.png)";
    panel.style.backgroundColor = "red";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(icons/chat.png)";
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "20px";
  }

//Aquí, si el msgTypeparámetro está configurado como 'warning', se muestra el icono de advertencia y el color de fondo del panel se establece en rojo. Si está configurado en 'chat', se muestra el ícono de chat y el color de fondo del panel se establece en azul agua. Si el msgTypeparámetro no está configurado en absoluto (o en algo diferente), entonces la else { }parte del código entra en juego y el párrafo recibe un relleno predeterminado y no tiene ícono, ni tampoco se establece un color de panel de fondo. Esto proporciona un estado predeterminado si no msgTypese proporciona ningún parámetro, lo que significa que es un parámetro opcional.


//Probemos nuestra función actualizada, intentemos actualizar la displayMessage()llamada desde esto:
displayMessage("Your inbox is almost full — delete some mails", "warning");
displayMessage("Brian: Hi there, how are you today?", "chat");
