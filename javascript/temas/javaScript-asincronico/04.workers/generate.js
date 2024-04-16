// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", (message) => {
    if (message.data.command === "generate") {
        generatePrimes(message.data.quota);
    }
});

// Generate primes (very inefficiently)
function generatePrimes(quota) {
    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }

    // When we have finished, send a message to the main thread,
    // including the number of primes we generated.
    postMessage(primes.length);
}

// Recuerde que esto se ejecuta tan pronto como el script principal crea el trabajador.

// Lo primero que hace el trabajador es empezar a escuchar mensajes del script principal. Lo hace usando addEventListener(), que es una función global en un trabajador. Dentro del messagecontrolador de eventos, la datapropiedad del evento contiene una copia del argumento pasado desde el script principal. Si el script principal pasó el generatecomando, llamamos generatePrimes()y pasamos el quotavalor del evento del mensaje.

// La generatePrimes()función es como la versión síncrona, excepto que en lugar de devolver un valor, enviamos un mensaje al script principal cuando terminamos. Usamos la postMessage()función para esto, que addEventListener()es una función global en un trabajador. Como ya vimos, el script principal está escuchando este mensaje y actualizará el DOM cuando se reciba el mensaje.

//Otros tipos de trabajadores

// El trabajador que acabamos de crear era lo que se llama un trabajador dedicado . Esto significa que lo utiliza una única instancia de script.

// Sin embargo, existen otros tipos de trabajadores:

// Los trabajadores compartidos pueden ser compartidos por varios scripts diferentes que se ejecutan en diferentes ventanas.
// Los trabajadores de servicios actúan como servidores proxy, almacenando en caché los recursos para que las aplicaciones web puedan funcionar cuando el usuario está desconectado. Son un componente clave de las aplicaciones web progresivas .