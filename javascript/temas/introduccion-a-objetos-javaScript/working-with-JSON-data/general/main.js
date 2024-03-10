/*La notación de objetos JavaScript (JSON) es un formato estándar basado en texto para representar datos estructurados basados ​​en la sintaxis de objetos JavaScript. Se usa comúnmente para transmitir datos en aplicaciones web (por ejemplo, enviar algunos datos desde el servidor al cliente, para que puedan mostrarse en una página web, o viceversa). Lo encontrará con bastante frecuencia, por lo que en este artículo le brindamos todo lo que necesita para trabajar con JSON usando JavaScript, incluido el análisis de JSON para que pueda acceder a los datos que contiene y la creación de JSON.*/


// QUE ES JSON

/*JSON es un formato de datos basado en texto que sigue la sintaxis de objetos de JavaScript, que fue popularizado por Douglas Crockford . Aunque se parece mucho a la sintaxis literal de objetos de JavaScript, se puede utilizar independientemente de JavaScript y muchos entornos de programación cuentan con la capacidad de leer (analizar) y generar JSON.

JSON existe como una cadena, lo que resulta útil cuando desea transmitir datos a través de una red. Debe convertirse en un objeto JavaScript nativo cuando desee acceder a los datos. Esto no es un gran problema: JavaScript proporciona un objeto JSON global que tiene métodos disponibles para convertir entre los dos.

Nota: Convertir una cadena en un objeto nativo se llama deserialización , mientras que convertir un objeto nativo en una cadena para que pueda transmitirse a través de la red se llama serialización .

Una cadena JSON se puede almacenar en su propio archivo, que es básicamente solo un archivo de texto con una extensión .jsony un tipo MIME de application/json.*/

//ESRUCTURA JSON

/*Como se describió anteriormente, JSON es una cadena cuyo formato se parece mucho al formato literal del objeto JavaScript. Puede incluir los mismos tipos de datos básicos dentro de JSON que en un objeto JavaScript estándar: cadenas, números, matrices, booleanos y otros objetos literales. Esto le permite construir una jerarquía de datos, así:*/

const superHeroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

/*Si cargamos esta cadena en un programa JavaScript y la analizamos en una variable llamada, superHeroes por ejemplo, podríamos acceder a los datos que contiene usando la misma notación de punto/corchete que vimos en el artículo sobre conceptos básicos de objetos JavaScript . Por ejemplo:*/

superHeroes.homeTown;
superHeroes["active"];

/*Para acceder a datos más abajo en la jerarquía, debe encadenar los nombres de propiedad requeridos y los índices de matriz. Por ejemplo, para acceder al tercer superpoder del segundo héroe que figura en la lista de miembros, harías esto:*/

superHeroes["members"][1]["powers"][2];

/*Primero, tenemos el nombre de la variable: superHeroes.
Dentro de eso, queremos acceder a la memberspropiedad, entonces usamos ["members"].
memberscontiene una matriz poblada por objetos. Queremos acceder al segundo objeto dentro de la matriz, por eso usamos [1].
Dentro de este objeto, queremos acceder a la powerspropiedad, por eso usamos ["powers"].
Dentro de la powerspropiedad hay una matriz que contiene los superpoderes del héroe seleccionado. Queremos el tercero, así que usamos [2].*/

/*Nota: Hemos hecho que el JSON visto arriba esté disponible dentro de una variable en nuestro ejemplo JSONTest.html (consulte el código fuente ). Intente cargar esto y luego acceder a los datos dentro de la variable a través de la consola JavaScript de su navegador.*/


//MATRICES COMO JSON

/*Arriba mencionamos que el texto JSON básicamente parece un objeto JavaScript dentro de una cadena. También podemos convertir matrices a/desde JSON. A continuación también se muestra JSON válido, por ejemplo:*/


/*[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
*/

/*Lo anterior es JSON perfectamente válido. Sólo tendría que acceder a los elementos de la matriz (en su versión analizada) comenzando con un índice de matriz, por ejemplo [0]["powers"][0].*/

/*JSON es puramente una cadena con un formato de datos específico: solo contiene propiedades, no métodos.
JSON requiere el uso de comillas dobles alrededor de cadenas y nombres de propiedades. Las comillas simples no son válidas más que rodear toda la cadena JSON.
Incluso una sola coma o dos puntos mal colocados puede hacer que un archivo JSON funcione mal y no funcione. Debe tener cuidado al validar cualquier dato que intente utilizar (aunque es menos probable que el JSON generado por computadora incluya errores, siempre que el programa generador funcione correctamente). Puede validar JSON utilizando una aplicación como JSONLint .
En realidad, JSON puede tomar la forma de cualquier tipo de datos que sea válido para su inclusión dentro de JSON, no solo matrices u objetos. Entonces, por ejemplo, una sola cadena o número sería JSON válido.
A diferencia del código JavaScript en el que las propiedades de los objetos pueden estar sin comillas, en JSON solo se pueden utilizar cadenas entre comillas como propiedades.*/

//CONVERTIR OBJEROS ENTRE OBJETOS Y TEXTOS

/*El ejemplo anterior fue simple en términos de acceso al objeto JavaScript, porque convertimos la respuesta de la red directamente en un objeto JavaScript usando response.json().

Pero a veces no tenemos tanta suerte: a veces recibimos una cadena JSON sin formato y necesitamos convertirla en un objeto nosotros mismos. Y cuando queremos enviar un objeto JavaScript a través de la red, debemos convertirlo a JSON (una cadena) antes de enviarlo. Afortunadamente, estos dos problemas son tan comunes en el desarrollo web que hay un objeto JSON integrado disponible en los navegadores, que contiene los dos métodos siguientes:

parse(): Acepta una cadena JSON como parámetro y devuelve el objeto JavaScript correspondiente.
stringify(): Acepta un objeto como parámetro y devuelve la cadena JSON equivalente.
Puedes ver el primero en acción en nuestro ejemplo heroes-finished-json-parse.html (ver el código fuente ); esto hace exactamente lo mismo que el ejemplo que creamos anteriormente, excepto que:

recuperamos la respuesta como texto en lugar de JSON, llamando al text()método de la respuesta
Luego usamos parse()para convertir el texto en un objeto JavaScript.*/


async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

/*Como puedes imaginar, stringify()funciona al revés. Intente ingresar las siguientes líneas en la consola JavaScript de su navegador una por una para verlo en acción:*/

let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;

/* Aquí estamos creando un objeto JavaScript, luego comprobamos lo que contiene, luego lo convertimos a una cadena JSON usando stringify()(guardando el valor de retorno en una nueva variable) y luego comprobándolo nuevamente. */



