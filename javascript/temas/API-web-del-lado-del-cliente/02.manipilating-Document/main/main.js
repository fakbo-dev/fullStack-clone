//Al escribir páginas web y aplicaciones, una de las cosas más comunes que querrás hacer es manipular la estructura del documento de alguna manera. Esto generalmente se hace mediante el modelo de objetos de documento (DOM), un conjunto de API para controlar HTML y diseñar información que hace un uso intensivo del Documentobjeto. En este artículo veremos cómo usar el DOM en detalle, junto con algunas otras API interesantes que pueden alterar su entorno de maneras interesantes.


//Las partes mas importantes de un navegador Web


// Los navegadores web son piezas de software muy complicadas con muchas partes móviles, muchas de las cuales no pueden ser controladas ni manipuladas por un desarrollador web que utilice JavaScript.Se podría pensar que tales limitaciones son algo malo, pero los navegadores están bloqueados por buenas razones, principalmente centradas en la seguridad.Imagínese si un sitio web pudiera acceder a sus contraseñas almacenadas u otra información confidencial e iniciar sesión en sitios web como si fuera usted.

// A pesar de las limitaciones, las API web todavía nos brindan acceso a muchas funciones que nos permiten hacer muchas cosas con las páginas web.Hay algunas partes realmente obvias a las que hará referencia regularmente en su código; considere el siguiente diagrama, que representa las partes principales de un navegador directamente involucradas en la visualización de páginas web:

//La ventana es la pestaña del navegador en la que se carga una página web; esto está representado en JavaScript por el Windowobjeto. Usando los métodos disponibles en este objeto, puede hacer cosas como devolver el tamaño de la ventana (ver Window.innerWidthy Window.innerHeight), manipular el documento cargado en esa ventana, almacenar datos específicos de ese documento en el lado del cliente (por ejemplo, usando una base de datos local u otro mecanismo de almacenamiento). ), adjuntar un controlador de eventos a la ventana actual y más.

// El navegador representa el estado y la identidad del navegador (es decir, el agente de usuario) tal como existe en la web. En JavaScript, esto está representado por el Navigatorobjeto. Puede utilizar este objeto para recuperar cosas como el idioma preferido del usuario, una transmisión multimedia de la cámara web del usuario, etc.
// El documento (representado por el DOM en los navegadores) es la página real cargada en la ventana y está representada en JavaScript por el Documentobjeto. Puede utilizar este objeto para devolver y manipular información sobre el HTML y CSS que compone el documento, por ejemplo, obtener una referencia a un elemento en el DOM, cambiar su contenido de texto, aplicarle nuevos estilos, crear nuevos elementos y agregarlos a el elemento actual como hijo, o incluso eliminarlo por completo.
// En este artículo nos centraremos principalmente en la manipulación del documento, pero además mostraremos algunas otras partes útiles.


//GET REFERENCES

const link = document.querySelector("a");
const sect = document.querySelector("section");

//Manipulate NODE

link.textContent = "Mozilla Developer Network";

link.href = "https://developer.mozilla.org";



//Creating and APPEND NEW NODES
//create

const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride";

//append

sect.appendChild(para);


//append to other text node

const text = document.createTextNode(
    " -- the premier source for web development knowledge"
);

const linkPara = document.querySelector("p");

linkPara.appendChild(text);

// MOVE AND REMOVE NODES
// node.cloneNode() // for cloning an node 

//Move 

sect.appendChild(linkPara);

//remove when you have the reference for the parent and the node itself
// parent.removeChild(node);

sect.removeChild(linkPara);

// remove for an unique reference 

linkPara.remove();

// for all browsers

linkPara.parentNode.removeChild(linkPara);

//APPLY STYLE

//HTMLElement.style

para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

//SETATTRIBUTE

//Element.setAttribute() esto requiere dos argumentos, el atributo que desea establecer en el elemento y el valor que desea establecer. En este caso estableceremos un nombre de clase para resaltar en nuestro párrafo:

para.setAttribute("class", "highlight");
