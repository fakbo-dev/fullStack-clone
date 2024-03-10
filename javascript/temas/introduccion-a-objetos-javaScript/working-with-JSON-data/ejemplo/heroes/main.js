/*Aprendizaje activo: trabajar con un ejemplo JSON
Entonces, trabajemos con un ejemplo para mostrar cómo podríamos utilizar algunos datos con formato JSON en un sitio web.

Empezando
Para empezar, haga copias locales de nuestros archivos heroes.html y style.css . Este último contiene CSS simple para darle estilo a nuestra página, mientras que el primero contiene HTML de cuerpo muy simple, además de un <script>elemento que contiene el código JavaScript que escribiremos en este ejercicio:*/

/*Función de nivel superior
La función de nivel superior se ve así:*/

async function populate() {
    const requestURL =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroes = await response.json();
  
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
  }

/*Para obtener el JSON utilizamos una API llamada Fetch . Esta API nos permite realizar solicitudes de red para recuperar recursos de un servidor a través de JavaScript (por ejemplo, imágenes, texto, JSON e incluso fragmentos de HTML), lo que significa que podemos actualizar pequeñas secciones de contenido sin tener que recargar toda la página.

En nuestra función, las primeras cuatro líneas utilizan la API Fetch para recuperar el JSON del servidor:

declaramos la requestURLvariable para almacenar la URL de GitHub
Usamos la URL para inicializar un nuevo Requestobjeto.
hacemos la solicitud de red usando la fetch()función, y esto devuelve un Responseobjeto
recuperamos la respuesta como JSON usando la json()función del Responseobjeto.*/

/*La fetch()API es asíncrona . Aprenderemos mucho sobre las funciones asincrónicas en el siguiente módulo , pero por ahora, solo diremos que necesitamos agregar la palabra clave async antes del nombre de la función que usa la API de recuperación y agregar la palabra clave await antes de las llamadas a cualquier función asincrónica.*/

/*Después de todo eso, la superHeroesvariable contendrá el objeto JavaScript basado en JSON. Luego pasamos ese objeto a dos llamadas a funciones: la primera completa el archivo <header>con los datos correctos, mientras que la segunda crea una tarjeta de información para cada héroe del equipo y la inserta en el archivo <section>.*/


/*Completando el encabezado
Ahora que recuperamos los datos JSON y los convertimos en un objeto JavaScript, usémoslos escribiendo las dos funciones a las que hicimos referencia anteriormente. En primer lugar, agregue la siguiente definición de función debajo del código anterior:*/

function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
  
    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }

/*Creando las tarjetas de información del héroe.
A continuación, agregue la siguiente función en la parte inferior del código, que crea y muestra las tarjetas de superhéroe*/

function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;
  
    for (const hero of heroes) {
      const myArticle = document.createElement("article");
      const myH2 = document.createElement("h2");
      const myPara1 = document.createElement("p");
      const myPara2 = document.createElement("p");
      const myPara3 = document.createElement("p");
      const myList = document.createElement("ul");
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = "Superpowers:";
  
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement("li");
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }


/*Para empezar, almacenamos la memberspropiedad del objeto JavaScript en una nueva variable. Esta matriz contiene múltiples objetos que contienen la información de cada héroe.

A continuación, utilizamos un bucle for...of para recorrer cada objeto de la matriz. Para cada uno, nosotros:

Cree varios elementos nuevos: an <article>, an <h2>, three <p>s y a <ul>.

Configure el <h2>para que contenga el del héroe actual name.
Rellena los tres párrafos con sus secretIdentity, agey una línea que diga "Superpoderes:" para introducir la información en la lista.
Almacene la powerspropiedad en otra nueva constante llamada superPowers: contiene una matriz que enumera los superpoderes del héroe actual.
Usa otro for...ofbucle para recorrer los superpoderes del héroe actual: para cada uno creamos un <li>elemento, colocamos el superpoder dentro de él y luego colocamos el listIteminterior del <ul>elemento ( myList) usando appendChild().
Lo último que hacemos es agregar <h2>, <p>s y <ul>dentro de <article>( myArticle), luego agregar el <article>interior de <section>. El orden en el que se agregan los elementos es importante, ya que este es el orden en que se mostrarán dentro del HTML. */

/*Llamar a la función de nivel superior
Finalmente, necesitamos llamar a nuestra populate()función de nivel superior:*/




populate();