//Las API que hemos cubierto hasta ahora están integradas en el navegador, pero no todas las API lo están. Muchos sitios web y servicios grandes, como Google Maps, Twitter, Facebook, PayPal, etc., proporcionan API que permiten a los desarrolladores hacer uso de sus datos (por ejemplo, mostrar su flujo de Twitter en su blog) o servicios (por ejemplo, usar el inicio de sesión de Facebook para iniciar sesión con sus usuarios). ). Este artículo analiza la diferencia entre las API del navegador y las API de terceros y muestra algunos usos típicos de estas últimas.

// ¿Qué son las API de terceros?
// Las API de terceros son API proporcionadas por terceros (generalmente empresas como Facebook, Twitter o Google) para permitirle acceder a su funcionalidad a través de JavaScript y utilizarla en su sitio. Uno de los ejemplos más obvios es el uso de API de mapas para mostrar mapas personalizados en sus páginas.

// Veamos un ejemplo de API simple de Mapquest y utilícelo para ilustrar en qué se diferencian las API de terceros de las API del navegador.

// Las API del navegador están integradas en el navegador; puede acceder a ellas desde JavaScript inmediatamente. Por ejemplo, se accede a la API de Web Audio que vimos en el artículo introductorioAudioContext mediante el objeto nativo. Por ejemplo:

const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.


//Las API de terceros, por otro lado, están ubicadas en servidores de terceros. Para acceder a ellos desde JavaScript, primero debe conectarse a la funcionalidad API y hacerla disponible en su página. Por lo general, esto implica primero vincular a una biblioteca de JavaScript disponible en el servidor a través de un <script>elemento, como se ve en nuestro ejemplo de Mapquest:

// <script
//   src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
//   defer></script>
// <link
//   rel="stylesheet"
//   href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />



//Generalmente requieren claves API.

// La seguridad de las API del navegador tiende a gestionarse mediante solicitudes de permiso, como se analiza en nuestro primer artículo . El propósito de estos es que el usuario sepa lo que sucede en los sitios web que visita y sea menos probable que sea víctima de que alguien use una API de manera maliciosa.

// Las API de terceros tienen un sistema de permisos ligeramente diferente: tienden a utilizar claves de desarrollador para permitir que los desarrolladores accedan a la funcionalidad de la API, lo que sirve más para proteger al proveedor de la API que al usuario.

// Es posible que otras API requieran que incluya la clave de una manera ligeramente diferente, pero el patrón es relativamente similar para la mayoría de ellas.

// Requerir una clave permite al proveedor de API responsabilizar a los usuarios de la API por sus acciones. Cuando el desarrollador se ha registrado para obtener una clave, el proveedor de API lo conoce y se pueden tomar medidas si comienza a hacer algo malicioso con la API (como rastrear la ubicación de las personas o intentar enviar spam a la API con un montón de solicitudes a dejar de funcionar, por ejemplo). La acción más sencilla sería simplemente revocar sus privilegios de API.


//Una API RESTful - NYTimes

// Ahora veamos otro ejemplo de API: la API del New York Times . Esta API le permite recuperar información de noticias del New York Times y mostrarla en su sitio. Este tipo de API se conoce como API RESTful : en lugar de obtener datos utilizando las funciones de una biblioteca de JavaScript como hicimos con Mapquest, obtenemos datos realizando solicitudes HTTP a URL específicas, con datos como términos de búsqueda y otras propiedades codificadas en el URL (a menudo como parámetros de URL). Este es un patrón común que encontrará con las API.

// Encuentra la documentación
// Cuando desee utilizar una API de terceros, es esencial averiguar dónde está la documentación, para poder saber qué características tiene la API, cómo las usa, etc. La documentación de la API del New York Times se encuentra en https:/ /developer.nytimes.com/ .

// Obtenga una clave de desarrollador

// La mayoría de las API requieren que utilice algún tipo de clave de desarrollador, por razones de seguridad y responsabilidad. Para registrarse para obtener una clave API de NYTimes, siga las instrucciones en https://developer.nytimes.com/get-started .