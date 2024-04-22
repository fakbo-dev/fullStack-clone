//Los navegadores web modernos admiten varias formas para que los sitios web almacenen datos en la computadora del usuario (con el permiso del usuario) y luego los recuperen cuando sea necesario. Esto le permite conservar datos para almacenamiento a largo plazo, guardar sitios o documentos para usarlos sin conexión, conservar configuraciones específicas del usuario para su sitio y más. Este artículo explica los conceptos básicos de cómo funcionan.



//Cookies

//Hoy en día, existen mecanismos más sencillos disponibles para almacenar datos del lado del cliente, por lo que no le enseñaremos cómo utilizar cookies en este artículo. Sin embargo, esto no significa que las cookies sean completamente inútiles en la web moderna: todavía se usan comúnmente para almacenar datos relacionados con la personalización y el estado del usuario, por ejemplo, ID de sesión y tokens de acceso. Para obtener más información sobre las cookies, consulte nuestro artículo Uso de cookies HTTP .


//Web storage % indexedDB

//Las características "más fáciles" que mencionamos anteriormente son las siguientes:

// La API de almacenamiento web proporciona un mecanismo para almacenar y recuperar elementos de datos más pequeños que constan de un nombre y un valor correspondiente.Esto es útil cuando sólo necesitas almacenar algunos datos simples, como el nombre del usuario, si ha iniciado sesión, qué color usar para el fondo de la pantalla, etc.

// La API IndexedDB proporciona al navegador un sistema de base de datos completo para almacenar datos complejos.Esto se puede utilizar para cosas que van desde conjuntos completos de registros de clientes hasta incluso tipos de datos complejos como archivos de audio o vídeo.

// Aprenderá más sobre estas API a continuación.


//Cache API

//La CacheAPI está diseñada para almacenar respuestas HTTP a solicitudes específicas y es muy útil para hacer cosas como almacenar activos del sitio web sin conexión para que el sitio pueda usarse posteriormente sin una conexión de red. El caché generalmente se usa en combinación con la API Service Worker , aunque no es necesario.

// El uso de Cache and Service Workers es un tema avanzado y no lo cubriremos con gran detalle en este artículo, aunque mostraremos un ejemplo en la sección Almacenamiento de activos sin conexión a continuación.


//--------------------------------------------------------

//Almacenamiento de datos simples

//WebStorage

//La API de almacenamiento web es muy fácil de usar: almacena pares de datos de nombre/valor simples (limitados a cadenas, números, etc.) y recupera estos valores cuando es necesario.

//locarStorage.setItem()
//locarStorage.getItem()
//locarStorage.removeItem()


//Separate storage for each domain


//Hay un almacén de datos independiente para cada dominio (cada dirección web independiente cargada en el navegador). Verá que si carga dos sitios web (por ejemplo, google.com y amazon.com) e intenta almacenar un elemento en un sitio web, no estará disponible para el otro sitio web.

// Esto tiene sentido: ¡puedes imaginar los problemas de seguridad que surgirían si los sitios web pudieran ver los datos de los demás!

