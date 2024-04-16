//En el último artículo analizamos cómo utilizar API que devuelven promesas. En este artículo veremos el otro lado: cómo implementar API que devuelvan promesas. Esta es una tarea mucho menos común que usar API basadas en promesas, pero aún así vale la pena conocerla.

//Generalmente, cuando implementas una API basada en promesas, estarás envolviendo una operación asincrónica, que puede usar eventos, devoluciones de llamadas simples o un modelo de paso de mensajes. Dispondrás que un Promiseobjeto maneje adecuadamente el éxito o el fracaso de esa operación.

//IMPLEMENTACION DE UNA API ALARM()

//En este ejemplo implementaremos una API de alarma basada en promesas, llamada alarm(). Tomará como argumentos el nombre de la persona a despertar y un retraso en milisegundos que se esperará antes de despertar a la persona. Después del retraso, la función enviará un "¡Despierta!" mensaje, incluyendo el nombre de la persona que necesitamos despertar.

//Wrap setTimeout()


const output = document.querySelector("#output");
const btn = document.querySelector("#set-alarm");

//Usaremos la setTimeout() API para implementar nuestra alarm() función. La setTimeout() API toma como argumentos una función de devolución de llamada y un retraso, expresado en milisegundos. Cuando setTimeout()se llama, inicia un temporizador configurado con el retraso dado y, cuando expira el tiempo, llama a la función dada.

// En el siguiente ejemplo, llamamos setTimeout()con una función de devolución de llamada y un retraso de 1000 milisegundos:



// function setAlarm() {
//     setTimeout(() => {
//         output.textContent = "Wake up!";
//     }, 1000);
// }


// btn.addEventListener("click", setAlarm);

//PROMISE CONSTRUCTOR

// Nuestra alarm()función devolverá un Promiseque se cumple cuando expire el temporizador. Pasará un "¡Despierta!" mensaje en el then()controlador y rechazará la promesa si la persona que llama proporciona un valor de retraso negativo.

// El componente clave aquí es el Promise()constructor. El Promise()constructor toma una única función como argumento. Llamaremos a esta función executor. Cuando crea una nueva promesa, proporciona la implementación del ejecutor.

// Esta función ejecutora en sí misma toma dos argumentos, que también son funciones y que convencionalmente se denominan resolvey reject. En la implementación de su ejecutor, llama a la función asincrónica subyacente. Si la función asincrónica tiene éxito, llama resolvey si falla, llama reject. Si la función ejecutora arroja un error, rejectse llama automáticamente. Puede pasar un único parámetro de cualquier tipo a resolvey reject.

// Entonces podemos implementar alarm()así:

// function alarm(person, delay) {
//     return new Promise((resolve, reject) => {
//         if (delay < 0) {
//             throw new Error("Alarm delay must not be negative");
//         }
//         setTimeout(() => {
//             resolve(`Wake up, ${person}`);
//         }, delay);
//     });
// }

// Esta función crea y devuelve un nuevo archivo Promise. Dentro del ejecutor de la promesa, nosotros:

// compruebe que delayno sea negativo y arroje un error si lo es.
// llamar setTimeout(), pasar una devolución de llamada y delay. La devolución de llamada se llamará cuando expire el temporizador, y en la devolución de llamada llamamos resolve, pasando nuestro "Wake up!"mensaje.

const name = document.querySelector("#name");
const delay = document.querySelector("#delay");

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
            resolve(`Wake up. ${person}!`);
        }, delay);
    });
};

btn.addEventListener("click", () => {
    alarm(name.value, delay.value)
        .then((message) => (output.innerText = message))
        .catch((error) => (output.innerText = `Couldn't set alarm: ${error}`));
});


//--------------------------------------------------------------------------

// With ASYNC AWAIT

const btn2 = document.querySelector("#btn-2");

btn2.addEventListener("click", async () => {
    try {
        const message = await alarm(name.value, delay.value);
        output.innerText = message;
    } catch (error) {
        output.textContent = `Couldn't set alarm: ${error}`;
    }
})