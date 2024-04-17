// En primer lugar, comenzaremos analizando las API desde un nivel superior: ¿qué son, cómo funcionan, cómo usarlas en su código y cómo están estructuradas? También veremos cuáles son las diferentes clases principales de API y qué tipo de usos tienen.


//QUE SON LAS API (Aplication Programming Interface);


// Las interfaces de programación de aplicaciones (API) son construcciones disponibles en lenguajes de programación para permitir a los desarrolladores crear funciones complejas más fácilmente. Abstraen código más complejo, proporcionando una sintaxis más fácil de usar en su lugar.

// Como ejemplo del mundo real, piense en el suministro de electricidad en su casa, apartamento u otras viviendas. Si quieres utilizar un electrodoméstico en tu casa, lo enchufas a una toma de corriente y funciona. No intentas conectarlo directamente a la fuente de alimentación; hacerlo sería realmente ineficiente y, si no eres electricista, sería difícil y peligroso intentarlo.

//De la misma manera, si quiere programar algunos gráficos 3D, es mucho más fácil hacerlo usando una API escrita en un lenguaje de nivel superior como JavaScript o Python, en lugar de intentar escribir directamente código de bajo nivel. (digamos C o C++) que controla directamente la GPU de la computadora u otras funciones gráficas.




// API SIDE-CLIENT

//JavaScript del lado del cliente, en particular, tiene muchas API disponibles; estas no son parte del lenguaje JavaScript en sí, sino que están construidas sobre el lenguaje JavaScript central, lo que le brinda superpoderes adicionales para usar en su código JavaScript. Generalmente se dividen en dos categorías:

//Las API del navegador están integradas en su navegador web y pueden exponer datos del navegador y del entorno informático circundante y hacer cosas complejas y útiles con ellos. Por ejemplo, la API Web Audio proporciona construcciones de JavaScript para manipular audio en el navegador: tomar una pista de audio, alterar su volumen, aplicarle efectos, etc. En segundo plano, el navegador en realidad utiliza algún código complejo de nivel inferior (p. ej. C++ o Rust) para realizar el procesamiento de audio real. Pero nuevamente, la API le abstrae esta complejidad.

//Las API de terceros no están integradas en el navegador de forma predeterminada y, por lo general, es necesario recuperar su código e información desde algún lugar de la Web. Por ejemplo, la API de Google Maps le permite hacer cosas como mostrar un mapa interactivo de su oficina en su sitio web. Proporciona un conjunto especial de construcciones que puede utilizar para consultar el servicio Google Maps y devolver información específica.

// Arriba, hablamos sobre qué son las API de JavaScript del lado del cliente y cómo se relacionan con el lenguaje JavaScript. Recapitulemos esto para que quede más claro y mencionemos también dónde encajan otras herramientas de JavaScript:

// JavaScript: un lenguaje de secuencias de comandos de alto nivel integrado en los navegadores que le permite implementar funciones en páginas web/aplicaciones. Tenga en cuenta que JavaScript también está disponible en otros entornos de programación, como Node.

// API del navegador: construcciones integradas en el navegador que se ubican sobre el lenguaje JavaScript y le permiten implementar funciones más fácilmente.

// API de terceros: construcciones integradas en plataformas de terceros (por ejemplo, Disqus, Facebook) que le permiten utilizar algunas de las funciones de esas plataformas en sus propias páginas web (por ejemplo, mostrar sus comentarios de Disqus en una página web).

// JavaScript Libraries: normalmente uno o más archivos JavaScript que contienen funciones personalizadas que puede adjuntar a su página web para acelerar o permitir la escritura de funciones comunes. Los ejemplos incluyen jQuery, Mootools y React.

// javaScript Frameworks: el siguiente paso de las bibliotecas, los marcos de JavaScript (por ejemplo, Angular y Ember) tienden a ser paquetes de HTML, CSS, JavaScript y otras tecnologías que se instalan y luego se usan para escribir una aplicación web completa desde cero. La diferencia clave entre una biblioteca y un marco es la "inversión de control". Cuando se llama a un método desde una biblioteca, el desarrollador tiene el control. Con un marco, el control se invierte: el marco llama al código del desarrollador.


//Que pueden hacer las API

// Hay una gran cantidad de API disponibles en los navegadores modernos que le permiten hacer una amplia variedad de cosas en su código. Puede ver esto echando un vistazo a la página de índice de las API de MDN.


// API para manipular documentos cargados en el navegador. El ejemplo más obvio es la API DOM (Document Object Model) , que le permite manipular HTML y CSS: crear, eliminar y cambiar HTML, aplicar dinámicamente nuevos estilos a su página, etc. Cada vez que ve aparecer una ventana emergente en un página o algún contenido nuevo mostrado, por ejemplo, ese es el DOM en acción. Obtenga más información sobre este tipo de API en Manipulación de documentos .
// Se utilizan con mucha frecuencia API que obtienen datos del servidor para actualizar pequeñas secciones de una página web por sí solas. Este detalle aparentemente pequeño ha tenido un gran impacto en el rendimiento y el comportamiento de los sitios: si solo necesita actualizar una lista de acciones o una lista de nuevas historias disponibles, hacerlo instantáneamente sin tener que volver a cargar toda la página desde el servidor puede facilitar la tarea. El sitio o la aplicación se sienten mucho más receptivos y "ágiles". La API principal utilizada para esto es Fetch API , aunque es posible que el código anterior aún use la XMLHttpRequestAPI. También puedes encontrarte con el término Ajax , que describe esta técnica. Obtenga más información sobre dichas API en Obtención de datos del servidor .

// Las API para dibujar y manipular gráficos son ampliamente compatibles con los navegadores; las más populares son Canvas y WebGL , que le permiten actualizar mediante programación los datos de píxeles contenidos en un <canvas>elemento HTML para crear escenas 2D y 3D. Por ejemplo, puede dibujar formas como rectángulos o círculos, importar una imagen al lienzo y aplicarle un filtro como sepia o escala de grises usando la API de Canvas, o crear una escena 3D compleja con iluminación y texturas usando WebGL. Estas API a menudo se combinan con API para crear bucles de animación (como window.requestAnimationFrame()) y otras para crear escenas que se actualizan constantemente, como dibujos animados y juegos.

//Las API de audio y video comoHTMLMediaElementWeb Audio API y WebRTC le permiten hacer cosas realmente interesantes con multimedia, como crear controles de interfaz de usuario personalizados para reproducir audio y video, mostrar pistas de texto como leyendas y subtítulos junto con sus videos, capturar videos de su cámara web para manipularla a través de un lienzo (ver arriba) o mostrarla en la computadora de otra persona en una conferencia web, o agregar efectos a las pistas de audio (como ganancia, distorsión, panorámica, etc.).


// Las API del dispositivo le permiten interactuar con el hardware del dispositivo: por ejemplo, acceder al GPS del dispositivo para encontrar la posición del usuario mediante la API de geolocalización .

// Las API de almacenamiento del lado del cliente le permiten almacenar datos en el lado del cliente, por lo que puede crear una aplicación que guardará su estado entre cargas de página y tal vez incluso funcione cuando el dispositivo esté fuera de línea. Hay varias opciones disponibles, por ejemplo, almacenamiento simple de nombres/valores con la API de almacenamiento web y almacenamiento de bases de datos más complejo con la API IndexedDB .
// API de terceros comun

//API de terceros comunes

// Las API de terceros existen en una gran variedad; Algunos de los más populares que probablemente utilizará tarde o temprano son:

// API de mapas, como Mapquest y Google Maps API , que le permiten hacer todo tipo de cosas con mapas en sus páginas web.

// El conjunto de API de Facebook , que le permite utilizar varias partes del ecosistema de Facebook para beneficiar su aplicación, como proporcionar inicio de sesión en la aplicación mediante el inicio de sesión de Facebook, aceptar pagos dentro de la aplicación, implementar campañas publicitarias específicas, etc.

// Las API de Telegram , que te permiten incrustar contenido de canales de Telegram en tu sitio web, además de brindar soporte para bots.

// La API de YouTube , que le permite insertar vídeos de YouTube en su sitio, realizar búsquedas en YouTube, crear listas de reproducción y más.

// La API de Pinterest , que proporciona herramientas para administrar tableros y pines de Pinterest para incluirlos en su sitio web.

// La API de Twilio , que proporciona un marco para crear funciones de llamadas de voz y video en su aplicación, enviar SMS/MMS desde sus aplicaciones y más.

// La API de Disqus , que proporciona una plataforma de comentarios que se puede integrar en su sitio.

// La API de Mastodon , que le permite manipular funciones de la red social Mastodon mediante programación.

// La API IFTTT , que permite integrar múltiples API a través de una plataforma.

//como funcionan las diferentes APIs

// Las diferentes API de JavaScript funcionan de maneras ligeramente diferentes, pero en general tienen características comunes y temas similares en su funcionamiento.

// Se basan en objetos.
// Su código interactúa con las API mediante uno o más objetos JavaScript, que sirven como contenedores para los datos que utiliza la API(contenidos en las propiedades del objeto) y la funcionalidad que la API pone a disposición(contenida en los métodos del objeto).


// AudioContext, que representa un gráfico de audio que se puede utilizar para manipular la reproducción de audio dentro del navegador y tiene varios métodos y propiedades disponibles para manipular ese audio.

// MediaElementAudioSourceNode, que representa un <audio>elemento que contiene el sonido que desea reproducir y manipular dentro del contexto de audio.

// AudioDestinationNode, que representa el destino del audio, es decir, el dispositivo de su computadora que realmente lo emitirá (generalmente sus parlantes o auriculares).

// En primer lugar incluimos un <audio>elemento con el que incrustamos un MP3 en la página. No incluimos ningún control de navegador predeterminado. A continuación, incluimos un <button>elemento que usaremos para reproducir y detener la música, y un <input>elemento de tipo rango, que usaremos para ajustar el volumen de la pista mientras se reproduce.

// A continuación, veamos el JavaScript de este ejemplo.

// Empezamos creando una AudioContextinstancia dentro de la cual manipular nuestra pista:

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

//A continuación, creamos constantes que almacenan referencias a nuestros elementos <audio>, <button>y <input>, y usamos el AudioContext.createMediaElementSource()método para crear una MediaElementAudioSourceNoderepresentación de la fuente de nuestro audio; el <audio>elemento se reproducirá desde:

const audioElement = document.querySelector("audio");
const playBtn = document.querySelector(".pause");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);

//A continuación incluimos un par de controladores de eventos que sirven para alternar entre reproducción y pausa cuando se presiona el botón y restablecer la pantalla al principio cuando la canción ha terminado de reproducirse:


//play/Pause audio


playBtn.addEventListener("click", () => {
    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }

    //if track is stopped, play it

    if (playBtn.getAttribute("class") === "pause") {
        audioElement.play();
        playBtn.setAttribute("class", "playing");
        playBtn.textContent = "Pause";
        //if track is playing stop it

    } else if (playBtn.getAttribute("class") === "playing") {
        audioElement.pause();
        playBtn.setAttribute("class", "pause");
        playBtn.innerText = "Play";
    }
});

//if track ends

audioElement.addEventListener("ended", () => {
    playBtn.setAttribute("class", "pause");
    playBtn.textContent = "Play";
})

// Algunos de ustedes pueden notar que los métodos play()y pause()que se utilizan para reproducir y pausar la pista no forman parte de la API de Web Audio; son parte de la HTMLMediaElementAPI, que es diferente pero está estrechamente relacionada.

//A continuación, creamos un GainNodeobjeto usando el AudioContext.createGain()método, que se puede usar para ajustar el volumen del audio que pasa a través de él, y creamos otro controlador de eventos que cambia el valor de la ganancia (volumen) del gráfico de audio cada vez que se cambia el valor del control deslizante:

//volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
    gainNode.gain.value = volumeSlider.value;
});

//Lo último que hay que hacer para que esto funcione es conectar los diferentes nodos en el gráfico de audio, lo que se hace utilizando el AudioNode.connect()método disponible en cada tipo de nodo:


audioSource.connect(gainNode).connect(audioCtx.destination);

//El audio comienza en la fuente, que luego se conecta al nodo de ganancia para que se pueda ajustar el volumen del audio. Luego, el nodo de ganancia se conecta al nodo de destino para que el sonido se pueda reproducir en su computadora (la AudioContext.destinationpropiedad representa el valor predeterminado AudioDestinationNodedisponible en el hardware de su computadora, por ejemplo, sus parlantes).

//Al utilizar una API, debe asegurarse de saber dónde está el punto de entrada de la API. En Web Audio API, esto es bastante simple: es el AudioContextobjeto que debe usarse para realizar cualquier manipulación de audio.

// La API del Modelo de objetos de documento (DOM) también tiene un punto de entrada simple: sus características tienden a encontrarse colgando del Documentobjeto o en una instancia de un elemento HTML que desea afectar de alguna manera, por ejemplo:

//La API de Canvas también se basa en obtener un objeto de contexto para manipular cosas, aunque en este caso, es un contexto gráfico en lugar de un contexto de audio. Su objeto de contexto se crea obteniendo una referencia al <canvas>elemento que desea dibujar y luego llamando a su HTMLCanvasElement.getContext()método:

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Cualquier cosa que queramos hacer con el lienzo se logra llamando a las propiedades y métodos del objeto de contexto (que es una instancia de CanvasRenderingContext2D), por ejemplo:

// A menudo utilizan eventos para manejar cambios de estado.

// Ya analizamos los eventos anteriormente en el curso en nuestro artículo Introducción a los eventos , que analiza en detalle qué son los eventos web del lado del cliente y cómo se utilizan en su código. Si aún no está familiarizado con cómo funcionan los eventos de API web del lado del cliente, primero debe leer este artículo antes de continuar.

// Algunas API web no contienen eventos, pero la mayoría contiene al menos algunos. Las propiedades del controlador que nos permiten ejecutar funciones cuando se activan eventos generalmente se enumeran en nuestro material de referencia en secciones separadas "Controladores de eventos".

// Ya vimos varios controladores de eventos en uso en nuestro ejemplo de Web Audio API anterior:

// Disponen de mecanismos de seguridad adicionales en su caso
// Las funciones de WebAPI están sujetas a las mismas consideraciones de seguridad que JavaScript y otras tecnologías web (por ejemplo, política del mismo origen ), pero a veces cuentan con mecanismos de seguridad adicionales. Por ejemplo, algunas de las WebAPI más modernas solo funcionarán en páginas servidas a través de HTTPS debido a que transmiten datos potencialmente confidenciales (los ejemplos incluyen Service Workers y Push ).

// Además, algunas WebAPI solicitan permiso al usuario para habilitarlas una vez que se realizan llamadas en su código. Como ejemplo, la API de notificaciones solicita permiso mediante un cuadro de diálogo emergente:

//Web Audio y HTMLMediaElementlas API están sujetas a un mecanismo de seguridad llamado política de reproducción automática ; esto básicamente significa que no puedes reproducir audio automáticamente cuando se carga una página; debes permitir que tus usuarios inicien la reproducción de audio a través de un control como un botón. Esto se hace porque la reproducción automática de audio suele ser realmente molesta y no deberíamos someter a nuestros usuarios a ella.

//Nota: Dependiendo de cuán estricto sea el navegador, dichos mecanismos de seguridad podrían incluso impedir que el ejemplo funcione localmente, es decir, si carga el archivo de ejemplo local en su navegador en lugar de ejecutarlo desde un servidor web. Al momento de escribir este artículo, nuestro ejemplo de Web Audio API no funcionaba localmente en Google Chrome; tuvimos que cargarlo en GitHub antes de que funcionara.