//Otra tarea muy común en los sitios web y aplicaciones modernos es recuperar elementos de datos individuales del servidor para actualizar secciones de una página web sin tener que cargar una página nueva completa. Este detalle aparentemente pequeño ha tenido un gran impacto en el rendimiento y el comportamiento de los sitios, por lo que en este artículo explicaremos el concepto y analizaremos las tecnologías que lo hacen posible: en particular, Fetch API .



// FETCH API

// Esta serie de archivos actuará como nuestra base de datos falsa; en una aplicación real, sería más probable que usáramos un lenguaje del lado del servidor como PHP, Python o Node para solicitar nuestros datos de una base de datos. Aquí, sin embargo, queremos mantenerlo simple y concentrarnos en la parte del lado del cliente.

// Para comenzar este ejemplo, haga una copia local de fetch-start.html y los cuatro archivos de texto ( verse1.txt , verse2.txt , verse3.txt y verse4.txt ) en un nuevo directorio de su computadora. En este ejemplo, buscaremos un verso diferente del poema (que quizás reconozcas) cuando esté seleccionado en el menú desplegable.

const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");


verseChoose.addEventListener("change", () => {
    const verse = verseChoose.value;
    updateDisplay(verse);
});

function updateDisplay(verse) {
    verse = verse.replace(" ", "").toLowerCase();
    const url = `${verse}.txt`;
    // Call `fetch()`, passing in the URL.
    fetch(url)
        // fetch() returns a promise. When we have received a response from the server,
        // the promise's `then()` handler is called with the response.
        .then((response) => {
            // Our handler throws an error if the request did not succeed.
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            // Otherwise (if the response succeeded), our handler fetches the response
            // as text by calling response.text(), and immediately returns the promise
            // returned by `response.text()`.
            return response.text();
        })
        // When response.text() has succeeded, the `then()` handler is called with
        // the text, and we copy it into the `poemDisplay` box.
        .then((text) => {
            poemDisplay.textContent = text;
        })
        // Catch any errors that might happen, and display a message
        // in the `poemDisplay` box.
        .catch((error) => {
            poemDisplay.textContent = `Could not fetch verse: ${error}`;
        });

}

updateDisplay("Verse 1");

verseChoose.value = "Verse 1";