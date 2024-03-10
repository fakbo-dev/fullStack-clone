//MANIPULACION DEL DOM BASICA


// Para manipular un elemento dentro del DOM, primero debe seleccionarlo y almacenar una referencia dentro de una variable.

const link = document.querySelector('a');

/*Ahora que tenemos la referencia del elemento almacenada en una variable, podemos comenzar a manipularla usando las propiedades y métodos disponibles (estos se definen en interfaces como HTMLAnchorElementen el caso del <a>elemento, su interfaz principal más general HTMLElementy Node, que representa todos los nodos en un DOM). En primer lugar, cambiemos el texto dentro del enlace actualizando el valor de la Node.textContentpropiedad. */

link.textContent = 'Mozilla Developer Network';

// También deberíamos cambiar la URL a la que apunta el enlace, para que no vaya al lugar equivocado cuando se haga clic en él. Agregue la siguiente línea, nuevamente en la parte inferior:

link.href = 'https://developer.mozilla.org';

// Tenga en cuenta que, como ocurre con muchas cosas en JavaScript, hay muchas formas de seleccionar un elemento y almacenar una referencia a él en una variable. Document.querySelector()es el enfoque moderno recomendado. Es conveniente porque le permite seleccionar elementos usando selectores CSS. La querySelector()llamada anterior coincidirá con el primer <a>elemento que aparece en el documento. Si desea hacer coincidir y hacer cosas con varios elementos, puede usar Document.querySelectorAll(), que coincide con cada elemento del documento que coincide con el selector y almacena referencias a ellos en un objeto similar a una matriz llamado NodeList.


/*Hay métodos más antiguos disponibles para capturar referencias de elementos, como:

Document.getElementById(), que selecciona un elemento con un id valor de atributo determinado, por ejemplo <p id="myId">My paragraph</p>. El ID se pasa a la función como parámetro, es decir const elementRef = document.getElementById('myId').

Document.getElementsByTagName(), que devuelve un objeto similar a una matriz que contiene todos los elementos de la página de un tipo determinado, por ejemplo <p>s, <a>s, etc. El tipo de elemento se pasa a la función como parámetro, es decir const elementRefArray = document.getElementsByTagName('p').
*/

//CREANDO Y COLOCANDO NUEVOS NODOS

/*veamos como crear nuevos elementos*/

/*comencemos tomando una referencia a nuestro <section>elemento*/

const sect = document.querySelector("section");

/*Ahora vamos a crear un nuevo párrafo usando Document.createElement()y darle algo de contenido de texto de la misma manera que antes:*/

const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride';

/*Ahora puedes agregar el nuevo párrafo al final de la sección usando Node.appendChild():*/

sect.appendChild(para);

/*Finalmente, para esta parte, agreguemos un nodo de texto al párrafo dentro del cual se encuentra el enlace, para redondear bien la oración. Primero crearemos el nodo de texto usando Document.createTextNode():*/

const text = document.createTextNode(" — the premier source for web development knowledge.");

// Ahora tomaremos una referencia al párrafo dentro del enlace y le agregaremos el nodo de texto:

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

//Eso es la mayor parte de lo que necesita para agregar nodos al DOM

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MOVER Y QUITAR ELEMENTOS


/*Puede haber ocasiones en las que desee mover nodos o eliminarlos del DOM por completo. Esto es perfectamente posible.*/

/*Si quisiéramos mover el párrafo con el enlace dentro al final de la sección, podríamos hacer esto:*/

sect.appendChild(linkPara);

/*Esto mueve el párrafo hacia la parte inferior de la sección. Podrías haber pensado que haría una segunda copia, pero este no es el caso: linkParaes una referencia a la única copia de ese párrafo. Si desea hacer una copia y agregarla también, deberá usarla Node.cloneNode()en su lugar.*/

/*Eliminar un nodo también es bastante sencillo, al menos cuando se tiene una referencia al nodo que se va a eliminar y a su padre. En nuestro caso actual, simplemente usamos Node.removeChild(), así:*/

sect.removeChild(linkPara);

//Cuando desee eliminar un nodo basándose únicamente en una referencia a sí mismo, lo cual es bastante común, puede usar Element.remove():

linkPara.remove();

//Este método no es compatible con navegadores más antiguos. No tienen ningún método para decirle a un nodo que se elimine, por lo que tendría que hacer lo siguiente.

//linkPara.parentNode.removeChild(linkPara);

/////////////////////////////////////////////////////////////////////////////

//MANIPULAR STYLE

/*Para empezar, puede obtener una lista de todas las hojas de estilo adjuntas a un documento usando Document.stylesheets, que devuelve un objeto similar a una matriz con CSSStyleSheetobjetos. Luego puede agregar/eliminar estilos como desee. Sin embargo, no vamos a ampliar esas características porque son una forma algo arcaica y difícil de manipular el estilo. Hay formas mucho más sencillas.

La primera forma es agregar estilos en línea directamente a los elementos a los que desea aplicar estilo dinámicamente. Esto se hace con la HTMLElement.stylepropiedad, que contiene información de estilo en línea para cada elemento del documento. Puede configurar las propiedades de este objeto para actualizar directamente los estilos de los elementos.*/

//ejemplo

/*para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";*/


/*Observe cómo las versiones de las propiedades JavaScript de los estilos CSS están escritas en minúsculas camello, mientras que las versiones CSS están divididas con guiones (por ejemplo, backgroundColorversus background-color). Asegúrate de no mezclarlos, de lo contrario no funcionará.*/


//Vuelve a cargar la página y verás que los estilos se han aplicado al párrafo. Si observa ese párrafo en el inspector de página/DOM de su navegador , verá que estas líneas efectivamente agregan estilos en línea al documento:


//Existe otra forma común de manipular dinámicamente estilos en su documento, que veremos ahora.

//VER QUE AGREGRE UN TAG STYLE EN EL HEAD DEL HTML

//Ahora veremos un método muy útil para la manipulación general de HTML: Element.setAttribute()esto requiere dos argumentos, el atributo que desea establecer en el elemento y el valor que desea establecer. En este caso estableceremos un nombre de clase para resaltar en nuestro párrafo:

para.setAttribute('class', 'highlight')

//Actualice su página y no verá ningún cambio: el CSS aún se aplica al párrafo, pero esta vez dándole una clase seleccionada por nuestra regla CSS, no como estilos CSS en línea.

//El método que elijas depende de ti; Ambos tienen sus ventajas y desventajas. El primer método requiere menos configuración y es bueno para usos simples, mientras que el segundo método es más purista (sin mezclar CSS y JavaScript, sin estilos en línea, que se consideran una mala práctica). A medida que empieces a crear aplicaciones más grandes y complejas, probablemente empezarás a utilizar más el segundo método, pero realmente depende de ti.



