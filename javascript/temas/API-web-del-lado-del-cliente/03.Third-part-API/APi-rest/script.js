// Defining a baseURL and key to as part of the request URL

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = "UPnfoRPBdBcmZihvr6B7lAd9L0fYQJ23";

// Grab references to all the DOM elements you'll need to manipulate
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const section = document.querySelector('section');
const nav = document.querySelector('nav');

// Hide the "Previous"/"Next" navigation to begin with, as we don't need it immediately
nav.style.display = 'none';

// define the initial page number and status of the navigation being displayed
let pageNumber = 0;

// Event listeners to control the functionality

searchForm.addEventListener("submit", submitSearch);
nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
}

function previousPage(e) {
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
}



// submitSearch()Para empezar, establece el número de página nuevamente en 0 y luego llama fetchResults(). Esto primero llama preventDefault()al objeto de evento para detener el envío del formulario (lo que rompería el ejemplo). A continuación, utilizamos alguna manipulación de cadenas para ensamblar la URL completa a la que realizaremos la solicitud. Comenzamos ensamblando las piezas que consideramos obligatorias para esta demostración:

// La URL base (tomada de la baseURLvariable).
// La clave API, que debe especificarse en el api-keyparámetro URL (el valor se toma de la keyvariable).
// El número de página, que debe especificarse en el pageparámetro URL (el valor se toma de la pageNumbervariable).
// El término de búsqueda, que debe especificarse en el qparámetro URL (el valor se toma del valor del searchTermtexto <input>).
// El tipo de documento para el que devolver resultados, como se especifica en una expresión pasada a través del fqparámetro URL. En este caso, queremos devolver artículos.
// A continuación, utilizamos un par de if ()declaraciones para comprobar si los elementos startDatey endDatetienen valores completados. Si es así, agregamos sus valores a la URL, especificados en begin_datey end_dateparámetros de URL respectivamente.


//SOLICITAR DATOS DE LA API

//Ahora que hemos construido nuestra URL, hagámosle una solicitud. Haremos esto usando la API Fetch .

// Agregue el siguiente bloque de código dentro de la fetchResults()función, justo encima de la llave de cierre:

// Use fetch() to make the request to the API

function submitSearch(e) {
    pageNumber = 0;
    fetchResults(e);
}

function fetchResults(e) {
    // Use preventDefault() to stop the form submitting
    e.preventDefault();

    // Assemble the full URL
    let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;

    if (startDate.value !== "") {
        url = `${url}&begin_date=${startDate.value}`;
    }

    if (endDate.value !== "") {
        url = `${url}&end_date=${endDate.value}`;
    }

    fetch(url)
        .then((response) => response.json())
        .then((json) => displayResults(json))
        .catch((error) => console.error(`Error fetching data:${error.message}`));

}

//Aquí ejecutamos la solicitud pasando nuestra url variable a fetch(), convertimos el cuerpo de la respuesta a JSON usando la json() función y luego pasamos el JSON resultante a la displayResults()función para que los datos se puedan mostrar en nuestra interfaz de usuario. También detectamos y registramos cualquier error que pueda producirse.


//Mostrando los datos

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    const articles = json.response.docs;

    nav.style.display = articles.length === 10 ? "block" : "none";

    if (articles.length === 0) {
        const para = document.createElement("p");
        para.textContent = "No results returned.";
        section.appendChild(para);
    } else {
        for (const current of articles) {
            const article = document.createElement("article");
            const heading = document.createElement("h2");
            const link = document.createElement("a");
            const img = document.createElement("img");
            const para1 = document.createElement("p");
            const keywordPara = document.createElement("p");
            keywordPara.classList.add("keywords");

            console.log(current);

            link.href = current.web_url;
            link.textContent = current.headline.main;
            para1.textContent = current.snippet;
            keywordPara.textContent = "Keywords: ";
            for (const keyword of current.keywords) {
                const span = document.createElement("span");
                span.textContent = `${keyword.value} `;
                keywordPara.appendChild(span);
            }

            if (current.multimedia.length > 0) {
                img.src = `http://www.nytimes.com/${current.multimedia[0].url}`;
                img.alt = current.headline.main;
            }

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para1);
            article.appendChild(keywordPara);
            section.appendChild(article);
        }
    }
}

//Cableando los botones de paginacion

//Para que los botones de paginación funcionen, incrementaremos (o disminuiremos) el valor de la pageNumbervariable y luego volveremos a ejecutar la solicitud de recuperación con el nuevo valor incluido en el parámetro de URL de la página. Esto funciona porque la API de NYTimes solo devuelve 10 resultados a la vez; si hay más de 10 resultados disponibles, devolverá los primeros 10 (0-9) si el pageparámetro URL está establecido en 0 (o no se incluye en absoluto; 0 es el valor predeterminado), los siguientes 10 (10-19) si está configurado en 1, y así sucesivamente.

// Esto nos permite escribir una función de paginación simplista.

//Debajo de la llamada existente addEventListener(), agregue estas dos nuevas, que hacen que se invoquen las funciones nextPage()y cuando se hace clic en los botones relevantes:previousPage()

//La primera función incrementa la pageNumbervariable, luego ejecuta la fetchResults()función nuevamente para mostrar los resultados de la página siguiente. La segunda función funciona casi exactamente de la misma manera a la inversa, pero también tenemos que dar el paso adicional de verificar que pageNumberno sea ya cero antes de disminuirlo; si la solicitud de recuperación se ejecuta con un pageparámetro de URL negativo, podría causar errores. Si pageNumberya es 0, salimos returnde la función; si ya estamos en la primera página, no necesitamos cargar los mismos resultados nuevamente.