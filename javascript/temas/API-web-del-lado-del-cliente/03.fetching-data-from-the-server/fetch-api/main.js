// La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del protocolo , como solicitudes y respuestas. También proporciona un fetch()método global que proporciona una forma sencilla y lógica de recuperar recursos de forma asíncrona en toda la red.

// A diferencia XMLHttpRequestde una API basada en devolución de llamadas, Fetch se basa en promesas y proporciona una mejor alternativa que se puede utilizar fácilmente en los trabajadores de servicios . Fetch también integra conceptos HTTP avanzados como CORS y otras extensiones de HTTP.

//Una solicitud de recuperación básica se ve así:

async function logMovies() {

    try {
        const response = await fetch("https://example.com/movies.json");
        const movies = await response.json();
        console.log(movies);
    } catch (error) {
        console.log(error);
    }

}

logMovies();


//Aquí buscamos un archivo JSON a través de la red, lo analizamos e imprimimos los datos en la consola. El uso más simple de fetch()toma un argumento (la ruta al recurso que desea recuperar) y no devuelve directamente el cuerpo de la respuesta JSON, sino que devuelve una promesa que se resuelve con un Responseobjeto.

//El Response objeto, a su vez, no contiene directamente el cuerpo de la respuesta JSON real, sino que es una representación de toda la respuesta HTTP. Entonces, para extraer el contenido del cuerpo JSON del Responseobjeto, usamos el json()método que devuelve una segunda promesa que se resuelve con el resultado de analizar el texto del cuerpo de la respuesta como JSON.

//Las solicitudes de recuperación están controladas por la connect-srcdirectiva de la Política de seguridad de contenido en lugar de por la directiva de los recursos que se recuperan.


// SUPPLYNG REQUEST OPTION

//Opcionalmente, el fetch()método puede aceptar un segundo parámetro, un initobjeto que le permite controlar una serie de configuraciones diferentes:

// Consulte fetch()todas las opciones disponibles y más detalles.

// Example POST method implementation:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
});


//ABORT REQUEST

// Para cancelar fetch()operaciones incompletas, utilice las interfaces AbortControllery AbortSignal.

const controller = new AbortController();
const signal = controller.signal;

const url = "video.mp4";

