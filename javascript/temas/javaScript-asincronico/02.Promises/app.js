// Las promesas son la base de la programación asincrónica en JavaScript moderno.Una promesa es un objeto devuelto por una función asincrónica, que representa el estado actual de la operación.En el momento en que se devuelve la promesa a la persona que llama, la operación a menudo no finaliza, pero el objeto de promesa proporciona métodos para manejar el eventual éxito o fracaso de la operación.

//Con una API basada en promesas, la función asincrónica inicia la operación y devuelve un Promise objeto. Luego puede adjuntar controladores a este objeto de promesa, y estos controladores se ejecutarán cuando la operación haya tenido éxito o haya fallado.


//Usando API fetch()
//https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json


// Para hacer esto, realizaremos una solicitud HTTP al servidor.En una solicitud HTTP, enviamos un mensaje de solicitud a un servidor remoto y este nos envía una respuesta.En este caso, enviaremos una solicitud para obtener un archivo JSON del servidor. ¿Recuerda el artículo anterior donde realizamos solicitudes HTTP utilizando la XMLHttpRequestAPI ? Bueno, en este artículo usaremos la fetch()API, que es el reemplazo moderno y basado en promesas de XMLHttpRequest.


// const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//     console.log(`Received response: ${response.status}`);
// });


// console.log("Started request");

// Aquí estamos:

// llamar a la fetch()API y asignar el valor de retorno a la fetchPromisevariable

// inmediatamente después, registrando la fetchPromisevariable. Esto debería generar algo como: Promise { <state>: "pending" }, diciéndonos que tenemos un Promiseobjeto y que tiene un statevalor cuyo valor es "pending". El "pending"estado significa que la operación de recuperación aún continúa.

// pasar una función de controlador al then()método de la Promesa. Cuando (y si) la operación de recuperación tiene éxito, la promesa llamará a nuestro controlador y pasará un Responseobjeto que contiene la respuesta del servidor.
// registrando un mensaje de que hemos iniciado la solicitud.

// Tenga en cuenta que Started request…se registra antes de que recibamos la respuesta. A diferencia de una función sincrónica, fetch()regresa mientras la solicitud aún está en curso, lo que permite que nuestro programa siga respondiendo. La respuesta muestra el código de estado200 (OK) , lo que significa que nuestra solicitud se realizó correctamente.

// Probablemente esto se parezca mucho al ejemplo del último artículo, donde agregamos controladores de eventos al XMLHttpRequestobjeto. En lugar de eso, pasamos un controlador al then()método de la promesa devuelta.

//--------------------------------------------------------------------------

//CHAINING PROMISES

//Con la fetch()API, una vez que obtienes un Responseobjeto, necesitas llamar a otra función para obtener los datos de respuesta. En este caso, queremos obtener los datos de respuesta como JSON, por lo que llamaríamos al json()método del Responseobjeto. Resulta que json()también es asincrónico. Este es un caso en el que tenemos que llamar a dos funciones asincrónicas sucesivas.

// fetchPromise.then((response) => {
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//         console.log(data[0].name);
//     });
// });

// En este ejemplo, como antes, agregamos un then()controlador a la promesa devuelta por fetch(). Pero esta vez, nuestro controlador llama response.json()y luego pasa un nuevo then()controlador a la promesa devuelta por response.json().

// Esto debería registrar "frijoles horneados" (el nombre del primer producto enumerado en "products.json").

// ¡Pero espera! ¿Recuerda el último artículo, donde dijimos que al llamar a una devolución de llamada dentro de otra devolución de llamada, obteníamos sucesivamente más niveles de código anidados? ¿Y dijimos que este "infierno de devolución de llamadas" hacía que nuestro código fuera difícil de entender? ¿No es lo mismo, sólo que con then()las llamadas?

// Lo es, por supuesto. Pero la característica elegante de las promesas es que then()ellas mismas devuelven una promesa, que se completará con el resultado de la función que se le pasa . Esto significa que podemos (y ciertamente deberíamos) reescribir el código anterior de esta manera:

// fetchPromise
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data[1].name);
//     })

// En lugar de llamar al segundo then()dentro del controlador para el primero then(), podemos devolver la promesa devuelta por json()y llamar al segundo then()con ese valor de retorno. Esto se llama encadenamiento de promesas y significa que podemos evitar niveles cada vez mayores de sangría cuando necesitamos realizar llamadas a funciones asincrónicas consecutivas.

// Antes de pasar al siguiente paso, hay una pieza más que agregar. Necesitamos verificar que el servidor aceptó y pudo manejar la solicitud antes de intentar leerla. Haremos esto verificando el código de estado en la respuesta y arrojando un error si no estaba "OK":

const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");



fetchPromise
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    })




//--------------------------------------------

//ERROR HANDLING

// Esto nos lleva a la última parte: ¿cómo manejamos los errores? La fetch()API puede generar un error por muchas razones (por ejemplo, porque no había conectividad de red o porque la URL tenía algún formato incorrecto) y nosotros mismos estamos generando un error si el servidor devolvió un error.

// En el último artículo, vimos que el manejo de errores puede resultar muy difícil con las devoluciones de llamadas anidadas, lo que nos obliga a manejar errores en todos los niveles de anidamiento.

// Para admitir el manejo de errores, Promiselos objetos proporcionan un catch()método. Esto es muy parecido a then(): lo llamas y le pasas una función de controlador. Sin embargo, mientras que se llama al controlador pasado then()cuando la operación asincrónica tiene éxito , se llama al controlador pasado cuando fallacatch() la operación asincrónica .

// Si agrega catch()al final de una cadena de promesa, se llamará cuando falle cualquiera de las llamadas a funciones asincrónicas. Por lo tanto, puede implementar una operación como varias llamadas a funciones asincrónicas consecutivas y tener un único lugar para manejar todos los errores.

// Pruebe esta versión de nuestro fetch()código. Agregamos un controlador de errores usando catch()y también modificamos la URL para que la solicitud falle.

const fetchPromise2 = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise2
    .then((response) => {
        if (!(response.ok)) {
            throw new Error(`HTTPS Error: ${response.status}`);
        } else {
            response.json();
        }
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.error(`Could not get products: ${error}`);
    });

//--------------------------------------------------------------------------

//Terminologia Promise


// Las promesas vienen con una terminología bastante específica que vale la pena aclarar.

// Primero, una promesa puede estar en uno de tres estados:

// Pending : la promesa se ha creado y la función asincrónica a la que está asociada no ha tenido éxito o ha fallado todavía. Este es el estado en el que se encuentra su promesa cuando se devuelve de una llamada a fetch()y la solicitud aún se está realizando.
// fulfilled : la función asincrónica ha tenido éxito. Cuando se cumple una promesa, then()se llama a su controlador.
// rejected : la función asincrónica ha fallado. Cuando se rechaza una promesa, catch()se llama a su controlador.

// Tenga en cuenta que lo que significa aquí "tuvo éxito" o "falló" depende de la API en cuestión. Por ejemplo, fetch()rechaza la promesa devuelta si (entre otras razones) un error de red impidió que se enviara la solicitud, pero cumple la promesa si el servidor envió una respuesta, incluso si la respuesta fue un error como 404 Not Found .

// En ocasiones, utilizamos el término acordado para abarcar tanto el cumplimiento como el rechazo .

// Una promesa se resuelve si se liquida o si ha sido "bloqueada" para seguir el estado de otra promesa.

// El artículo Hablemos de cómo hablar de promesas ofrece una excelente explicación de los detalles de esta terminología.


//--------------------------------------------------------------------------

//Combine Promises

// La cadena de promesa es lo que necesita cuando su operación consta de varias funciones asincrónicas y necesita que cada una de ellas se complete antes de comenzar la siguiente. Pero hay otras formas en las que es posible que necesites combinar llamadas a funciones asincrónicas, y la PromiseAPI proporciona algunas ayudas para ellas.

// A veces es necesario que se cumplan todas las promesas, pero no dependen unas de otras. En un caso como ese, es mucho más eficiente comenzar con todos juntos y luego recibir una notificación cuando se hayan cumplido. El Promise.all()método es lo que necesitas aquí. Toma una serie de promesas y devuelve una única promesa.

// La promesa devuelta por Promise.all()es:

// cumplirá cuando y si se cumplen todas las promesas del conjunto. En este caso, then()se llama al controlador con una matriz de todas las respuestas, en el mismo orden en que se pasaron las promesas all().
// rechazado cuando y si alguna de las promesas de la matriz es rechazada. En este caso, catch()se llama al controlador con el error arrojado por la promesa que rechazó.


const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise02 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);


Promise.all([fetchPromise1, fetchPromise02, fetchPromise3])
    .then((responses) => {
        for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });


// Aquí, realizamos tres fetch()solicitudes a tres URL diferentes. Si todos tienen éxito, registraremos el estado de respuesta de cada uno. Si alguno de ellos falla, registraremos el error.

// Con las URL que hemos proporcionado todas las solicitudes deberían cumplirse, aunque para la segunda el servidor devolverá 404(No encontrado) en lugar de 200(OK) porque el archivo solicitado no existe. Entonces la salida debería ser:

// A veces, es posible que necesites cumplir cualquiera de un conjunto de promesas, y no te importa cuál. En ese caso, quieres Promise.any(). Esto es como Promise.all(), excepto que se cumple tan pronto como se cumple cualquiera de las promesas, o se rechaza si se rechazan todas:


Promise.any([fetchPromise1, fetchPromise02, fetchPromise3])
    .then((response) => {
        console.log(`${response.url}: ${response.status}`);
    })
    .catch((error) => {
        console.log(`Failed to fetch: ${error}`);
    });

// Tenga en cuenta que en este caso no podemos predecir qué solicitud de recuperación se completará primero.

// Estas son sólo dos de las Promisefunciones adicionales para combinar múltiples promesas. Para conocer el resto, consulte la Promisedocumentación de referencia.

//--------------------------------------------------------------------------

//ASYNC AWAIT

// La async palabra clave le ofrece una forma más sencilla de trabajar con código asincrónico basado en promesas. Agregar asyncal inicio de una función la convierte en una función asíncrona:

async function myFunction() {
    // this is an async function
}

// Dentro de una función asíncrona, puede usar la awaitpalabra clave antes de llamar a una función que devuelve una promesa. Esto hace que el código espere en ese punto hasta que se resuelva la promesa, momento en el cual el valor cumplido de la promesa se trata como un valor de retorno o se arroja el valor rechazado.

// Esto le permite escribir código que utiliza funciones asincrónicas pero que parece código sincrónico. Por ejemplo, podríamos usarlo para reescribir nuestro ejemplo de búsqueda:



async function fetchProducts() {
    try {
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        // after this line, our function will wait for the `response.json()` call to be settled
        // the `response.json()` call will either return the parsed JSON object or throw an error
        const data = await response.json();
        console.log(data[0].name);
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

fetchProducts();


// Aquí, estamos llamando await fetch()y, en lugar de obtener un Promise, nuestra persona que llama obtiene un Responseobjeto completamente completo, ¡como si fetch()fuera una función sincrónica!

// Incluso podemos usar un try...catchbloque para el manejo de errores, exactamente como lo haríamos si el código fuera sincrónico.

// Sin embargo, tenga en cuenta que las funciones asíncronas siempre devuelven una promesa, por lo que no puede hacer algo como:

// async function fetchProducts() {
//     try {
//       const response = await fetch(
//         "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(`Could not get products: ${error}`);
//     }
//   }
//   const promise = fetchProducts();
//   !console.log(promise[0].name); // "promise" is a Promise object, so this will not work

//En su lugar, necesitarías hacer algo como:

async function fetchProducts2() {
    try {
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

const promise = fetchProducts2();
promise.then((data) => console.log(data[0].name));


//Probablemente usará asyncmuchas funciones en las que de otro modo podría usar cadenas de promesas, y hacen que trabajar con promesas sea mucho más intuitivo.

// Tenga en cuenta que, al igual que una cadena de promesas, awaitobliga a que las operaciones asincrónicas se completen en serie. Esto es necesario si el resultado de la siguiente operación depende del resultado de la última, pero si ese no es el caso, algo así Promise.all()tendrá más rendimiento.


//CONCLUSION

// Las promesas son la base de la programación asincrónica en JavaScript moderno. Hacen que sea más fácil expresar y razonar sobre secuencias de operaciones asincrónicas sin devoluciones de llamadas profundamente anidadas y admiten un estilo de manejo de errores similar a la try...catchdeclaración sincrónica.

// Las palabras asyncclave awaity facilitan la creación de una operación a partir de una serie de llamadas a funciones asincrónicas consecutivas, lo que evita la necesidad de crear cadenas de promesas explícitas y le permite escribir código que parece código sincrónico.

// Las promesas funcionan en las últimas versiones de todos los navegadores modernos; El único lugar donde el soporte prometido será un problema es en Opera Mini e IE11 y versiones anteriores.

// No abordamos todas las características de las promesas en este artículo, solo las más interesantes y útiles. A medida que empiece a aprender más sobre las promesas, encontrará más funciones y técnicas.

// Muchas API web modernas se basan en promesas, incluidas WebRTC , Web Audio API , Media Capture y Streams API , y muchas más.