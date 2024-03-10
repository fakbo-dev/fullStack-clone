//Manipulacion del documento

// PARTES IMPORTANTES DE UN NAVEGADOR WEB

/*Los navegadores web son piezas de software muy complicadas con muchas partes móviles, muchas de las cuales no pueden ser controladas ni manipuladas por un desarrollador web que utilice JavaScript. Se podría pensar que tales limitaciones son algo malo, pero los navegadores están bloqueados por buenas razones, principalmente centradas en la seguridad. Imagínese si un sitio web pudiera acceder a sus contraseñas almacenadas u otra información confidencial e iniciar sesión en sitios web como si fuera usted.*/

//window object

/* La ventana es la pestaña del navegador en la que se carga una página web; esto está representado en JavaScript por el Window objeto. Usando los métodos disponibles en este objeto, puede hacer cosas como devolver el tamaño de la ventana (ver Window.innerWidthy Window.innerHeight), manipular el documento cargado en esa ventana, almacenar datos específicos de ese documento en el lado del cliente (por ejemplo, usando una base de datos local u otro mecanismo de almacenamiento). ), adjuntar un controlador de eventos a la ventana actual y más.*/

//navigator

/*El navegador representa el estado y la identidad del navegador (es decir, el agente de usuario) tal como existe en la web. En JavaScript, esto está representado por el Navigator objeto. Puede utilizar este objeto para recuperar cosas como el idioma preferido del usuario, una transmisión multimedia de la cámara web del usuario, etc.*/

//documento 

/*El documento (representado por el DOM en los navegadores) es la página real cargada en la ventana y está representada en JavaScript por el Document objeto. Puede utilizar este objeto para devolver y manipular información sobre el HTML y CSS que compone el documento, por ejemplo, obtener una referencia a un elemento en el DOM, cambiar su contenido de texto, aplicarle nuevos estilos, crear nuevos elementos y agregarlos a el elemento actual como hijo, o incluso eliminarlo por completo.*/

// DOM (DOCUMENT OBJECT MODEL)

/*es una representacion de una 'estructura de arbol' creada por el navegador que permite que los lenguajes de programacion accendan facilmente a estructura html un ejemplo seria */ 

/*
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Simple DOM example</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>

*/
// la imagen se ve asi 
src="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents/dom-screenshot.png"

/* Cada entrada en el árbol se llama nodo . Puede ver en el diagrama anterior que algunos nodos representan elementos (identificados como , HTMLetc. ) y otros representan texto (identificados como ). También existen otros tipos de nodos , pero estos son los principales que encontrarás.HEAD META #text*/

/*
Nodo raíz : el nodo superior del árbol, que en el caso de HTML es siempre el HTMLnodo (otros vocabularios de marcado como SVG y XML personalizado tendrán elementos raíz diferentes).

Nodo hijo : un nodo directamente dentro de otro nodo. Por ejemplo, IMG es hijo de SECTION en el ejemplo anterior.

Nodo descendiente : un nodo en cualquier lugar dentro de otro nodo. Por ejemplo, IMG es hijo de SECTION en el ejemplo anterior y también es descendiente. IMG No es hijo de BODY, ya que está dos niveles por debajo de él en el árbol, pero es descendiente de BODY.

Nodo principal : un nodo que tiene otro nodo en su interior. Por ejemplo, BODYes el nodo principal de SECTIONen el ejemplo anterior.

Nodos hermanos : nodos que se encuentran en el mismo nivel en el árbol DOM. Por ejemplo, IMG y P son hermanos en el ejemplo anterior.
*/

/*Es útil familiarizarse con esta terminología antes de trabajar con el DOM, ya que varios de los términos de código que encontrará hacen uso de ellos.*/




