//Conceptos Basicos

/*Un objeto es una colección de datos y/o funcionalidades relacionadas. Estos suelen constar de varias variables y funciones (que se denominan propiedades y métodos cuando están dentro de objetos). Trabajemos con un ejemplo para comprender cómo se ven.*/

//Como ocurre con muchas cosas en JavaScript, la creación de un objeto a menudo comienza con la definición e inicialización de una variable

//  const person = {};

// en la consola de navegador se ve asi 

/*[object Object]
Object { }
{ }*/

/*Felicitaciones, acaba de crear su primer objeto. ¡Trabajo hecho! Pero este es un objeto vacío, por lo que no podemos hacer mucho con él. Actualicemos el objeto JavaScript en nuestro archivo para que se vea así:*/

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

/*Después de guardar y actualizar, intente ingresar algo de lo siguiente en la consola de JavaScript en las herramientas de desarrollo de su navegador:
*/
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."

/*¡Ahora tiene algunos datos y funcionalidades dentro de su objeto, y ahora puede acceder a ellos con una sintaxis simple y agradable!

Entonces, ¿qué está pasando aquí? Bueno, un objeto se compone de varios miembros, cada uno de los cuales tiene un nombre (por ejemplo, name y age arriba) y un valor (por ejemplo, ['Bob', 'Smith']y 32). Cada par de nombre/valor debe estar separado por una coma, y ​​el nombre y el valor en cada caso están separados por dos puntos. La sintaxis siempre sigue este patrón:*/

const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};

/*El valor de un miembro de objeto puede ser prácticamente cualquier cosa: en nuestro objeto persona tenemos un número, una matriz y dos funciones. Los dos primeros elementos son elementos de datos y se denominan propiedades del objeto . Los dos últimos elementos son funciones que permiten al objeto hacer algo con esos datos y se denominan métodos del objeto .

Cuando los miembros del objeto son funciones, hay una sintaxis más simple. En lugar de bio: function ()podemos escribir bio(). Como esto:*/


const person2 = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
//es mejor practica usar esta sintaxis mas corta

/*Un objeto como este se conoce como objeto literal : literalmente, hemos escrito el contenido del objeto a medida que lo creamos. Esto es diferente en comparación con los objetos instanciados a partir de clases, que veremos más adelante.

Es muy común crear un objeto utilizando un literal de objeto cuando se desea transferir una serie de elementos de datos estructurados y relacionados de alguna manera, por ejemplo, enviando una solicitud al servidor para que se coloque en una base de datos. Enviar un solo objeto es mucho más eficiente que enviar varios elementos individualmente y es más fácil trabajar con él que una matriz cuando desea identificar elementos individuales por su nombre.*/

// NOTACION DE PUNTOS 

/*Arriba, accedió a las propiedades y métodos del objeto usando notación de puntos . El nombre del objeto (persona) actúa como espacio de nombres ; primero debe ingresarse para acceder a cualquier cosa dentro del objeto. Luego escribe un punto, luego el elemento al que desea acceder; este puede ser el nombre de una propiedad simple, un elemento de una propiedad de matriz o una llamada a uno de los métodos del objeto, por ejemplo:*/
fakbo
person.age;
person.bio();

/*Objetos como propiedades de objeto.

Una propiedad de objeto puede ser en sí misma un objeto. Por ejemplo, intente cambiar el name miembro de*/

const person3 = {
  name: ["Bob", "Smith"],
};

/*a*/
const person4 = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};

/*Para acceder a estos elementos sólo necesitas encadenar el paso adicional al final con otro punto. Pruebe estos en la consola JS:*/

person.name.first;
person.name.last;

/*Si hace esto, también necesitará revisar el código de su método y cambiar cualquier instancia de*/
name[0];
name[1];

//a
name.first;
name.last;

/*De lo contrario, sus métodos ya no funcionarán.*/


//NOTACION ENTRE CORCHETES

/*La notación entre corchetes proporciona una forma alternativa de acceder a las propiedades de los objetos. En lugar de utilizar notación de puntos como esta:*/

person["age"];
person["name"]["first"];

/*Esto se parece mucho a cómo se accede a los elementos de una matriz, y es básicamente lo mismo: en lugar de usar un número de índice para seleccionar un elemento, se utiliza el nombre asociado con el valor de cada miembro. No es de extrañar que a los objetos a veces se les llame matrices asociativas : asignan cadenas a valores de la misma manera que las matrices asignan números a valores.

Generalmente se prefiere la notación de puntos a la notación entre corchetes porque es más concisa y más fácil de leer. Sin embargo, hay algunos casos en los que es necesario utilizar corchetes. Por ejemplo, si el nombre de una propiedad de un objeto se encuentra en una variable, entonces no puede usar la notación de puntos para acceder al valor, pero puede acceder al valor usando la notación entre corchetes.

En el siguiente ejemplo, la logProperty()función se puede utilizar person[propertyName]para recuperar el valor de la propiedad nombrada en propertyName.*/

const person8 = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32

//ESTABLECER MIEMBROS DE OBJETOS

/*Hasta ahora solo hemos analizado la recuperación (u obtención ) de miembros de objetos; también puede establecer (actualizar) el valor de los miembros de objetos declarando el miembro que desea configurar (usando notación de puntos o corchetes), de esta manera:*/

person.age = 45;
person["name"]["last"] = "Cratchit";

/*Intente ingresar las líneas anteriores y luego vuelva a hacer que los miembros vean cómo han cambiado, así:*/

person.age;
person["name"]["last"];

/*La configuración de miembros no se limita únicamente a actualizar los valores de las propiedades y métodos existentes; También puedes crear miembros completamente nuevos. Pruebe estos en la consola JS:*/

person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

/*Ahora puedes probar a tus nuevos miembros:*/

person["eyes"];
person.farewell();
// "Bye everybody!"

/*Un aspecto útil de la notación entre corchetes es que se puede utilizar para establecer no sólo valores de miembros de forma dinámica, sino también nombres de miembros. Digamos que queremos que los usuarios puedan almacenar tipos de valores personalizados en los datos de sus personas, escribiendo el nombre del miembro y el valor en dos entradas de texto. Podríamos obtener esos valores así:*/

//const myDataName = nameInput.value;
//const myDataValue = nameValue.value;

/*Luego podríamos agregar este nuevo nombre de miembro y valor al person objeto de esta manera:*/

person[myDataName] = myDataValue;

/*Para probar esto, intente agregar las siguientes líneas en su código, justo debajo de la llave de cierre del personobjeto:*/

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

/*Ahora intente guardar y actualizar e ingrese lo siguiente en su entrada de texto:*/

person.height;

/*Agregar una propiedad a un objeto usando el método anterior no es posible con la notación de puntos, que solo puede aceptar un nombre de miembro literal, no un valor de variable que apunte a un nombre.*/




//METODO THIS

/*Es posible que hayas notado algo un poco extraño en nuestros métodos. Mira este por ejemplo:*/

introduceSelf(); {
  console.log(`Hi! I'm ${this.name[0]}.`);
}

/*Probablemente te estés preguntando qué es "esto". La 'this' palabra clave se refiere al objeto actual en el que se está escribiendo el código, por lo que en este caso this es equivalente a person. Entonces, ¿por qué no simplemente escribir person?

Bueno, cuando sólo tienes que crear un único objeto literal, no es tan útil. Pero si crea más de uno, this le permite utilizar la misma definición de método para cada objeto que cree.

Ilustremos lo que queremos decir con un par simplificado de objetos persona:*/

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person10 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

/*En este caso, person1.introduceSelf()se genera "¡Hola! Soy Chris."; person2.introduceSelf()por otro lado genera "¡Hola! Soy Deepti", aunque el código del método es exactamente el mismo en cada caso. Esto no es muy útil cuando se escriben literales de objetos a mano, pero será esencial cuando comencemos a usar constructores para crear más de un objeto a partir de una única definición de objeto, y ese es el tema de la siguiente sección.*/

//CONSTRUCTORES 


/*Usar objetos literales está bien cuando sólo necesitas crear un objeto, pero si tienes que crear más de uno, como en la sección anterior, son muy inadecuados. Tenemos que escribir el mismo código para cada objeto que creamos, y si queremos cambiar algunas propiedades del objeto, como agregar una height propiedad, debemos recordar actualizar cada objeto.

Nos gustaría encontrar una forma de definir la "forma" de un objeto (el conjunto de métodos y las propiedades que puede tener) y luego crear tantos objetos como queramos, simplemente actualizando los valores de las propiedades que son diferentes.

La primera versión de esto es sólo una función:*/

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

/*Esta función crea y devuelve un nuevo objeto cada vez que la llamamos. El objeto tendrá dos miembros:

una propiedad name
un método introduceSelf().
Tenga en cuenta que createPerson() necesita un parámetro name para establecer el valor de la name propiedad, pero el valor del introduceSelf() método será el mismo para todos los objetos creados con esta función. Este es un patrón muy común para crear objetos.

Ahora podemos crear tantos objetos como queramos, reutilizando la definición:*/

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."


/*Esto funciona bien pero es un poco largo: tenemos que crear un objeto vacío, inicializarlo y devolverlo. Una mejor manera es utilizar un constructor . Un constructor es simplemente una función llamada usando la new palabra clave. Cuando llamas a un constructor, este:

crear un nuevo objeto
vincularse this al nuevo objeto, para que pueda consultarlo this en su código de constructor
ejecutar el código en el constructor
devolver el nuevo objeto.
Los constructores, por convención, comienzan con una letra mayúscula y reciben nombres según el tipo de objeto que crean. Entonces podríamos reescribir nuestro ejemplo así:*/

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

/*Para llamar Person()como constructor, usamos new:*/

const salva2 = new Person("Salva");
salva2.name;
salva2.introduceSelf();
// "Hi! I'm Salva."

const frankie2 = new Person("Frankie");
frankie2.name;
frankie2.introduceSelf();
// "Hi! I'm Frankie."



/*Has estado usando objetos todo el tiempo.
Al leer estos ejemplos, probablemente haya pensado que la notación de puntos que ha estado usando le resulta muy familiar. ¡Eso es porque lo has estado usando durante todo el curso! Cada vez que hemos estado trabajando en un ejemplo que utiliza una API de navegador integrada o un objeto JavaScript, hemos estado usando objetos, porque dichas características se crean utilizando exactamente el mismo tipo de estructuras de objetos que hemos estado viendo aquí. , aunque más complejos que en nuestros propios ejemplos personalizados básicos.*/

myString.split(",");

/*Estabas usando un método disponible en un Stringobjeto. Cada vez que crea una cadena en su código, esa cadena se crea automáticamente como una instancia de Stringy, por lo tanto, tiene varios métodos y propiedades comunes disponibles.

Cuando accedió al modelo de objetos del documento usando líneas como esta:*/

const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");


/*Estabas usando métodos disponibles en un Documentobjeto. DocumentPara cada página web cargada, se crea una instancia de , llamada document, que representa la estructura completa, el contenido y otras características de la página, como su URL. Nuevamente, esto significa que tiene varios métodos y propiedades comunes disponibles.

Lo mismo ocurre con prácticamente cualquier otro objeto integrado o API que haya estado utilizando: Array, Mathetc.

Tenga en cuenta que los objetos integrados y las API no siempre crean instancias de objetos automáticamente. Como ejemplo, la API de notificaciones , que permite a los navegadores modernos activar notificaciones del sistema, requiere que cree una nueva instancia de objeto utilizando el constructor para cada notificación que desee activar. Intente ingresar lo siguiente en su consola JavaScript:*/

const myNotification = new Notification("Hello!");




