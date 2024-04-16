//En este último artículo de nuestro módulo "JavaScript asíncrono", presentaremos los trabajadores , que le permiten ejecutar algunas tareas en un hilo de ejecución separado.

// En el primer artículo de este módulo, vimos lo que sucede cuando tienes una tarea sincrónica de larga duración en tu programa: toda la ventana deja de responder por completo. Básicamente, la razón de esto es que el programa es de un solo subproceso . Un hilo es una secuencia de instrucciones que sigue un programa. Debido a que el programa consta de un solo subproceso, solo puede hacer una cosa a la vez: por lo tanto, si está esperando que regrese nuestra llamada sincrónica de larga duración, no puede hacer nada más.

// Los trabajadores le brindan la posibilidad de ejecutar algunas tareas en un subproceso diferente, de modo que pueda iniciar la tarea y luego continuar con otro procesamiento (como manejar las acciones del usuario).

// Una preocupación de todo esto es que si varios subprocesos pueden tener acceso a los mismos datos compartidos, es posible que los cambien de forma independiente e inesperada (entre sí). Esto puede provocar errores difíciles de encontrar.

// Para evitar estos problemas en la web, su código principal y su código de trabajo nunca obtienen acceso directo a las variables de cada uno y solo pueden "compartir" datos en casos muy específicos. Los trabajadores y el código principal se ejecutan en mundos completamente separados y solo interactúan enviándose mensajes entre sí. En particular, esto significa que los trabajadores no pueden acceder al DOM (la ventana, el documento, los elementos de la página, etc.).

// Hay tres tipos diferentes de trabajadores:

// trabajadores dedicados
// trabajadores compartidos
// trabajadores de servicios
// En este artículo, analizaremos un ejemplo del primer tipo de trabajador y luego analizaremos brevemente los otros dos.


// WEB WORKERS

const worker = new Worker("./generate.js");

document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    worker.postMessage({
        command: "generate",
        quota
    });
});


worker.addEventListener("message", (message) => {
    document.querySelector("#ouput").innerText = `Finished generating ${message.data} Primes!`;
})


document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value = `Try typing in here immediately after pressing "Generate primers"`;
    document.reload();
})