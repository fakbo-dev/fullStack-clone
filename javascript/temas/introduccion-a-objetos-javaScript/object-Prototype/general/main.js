/*son el mecanismo mediante el cual los objetos puede heredar caracteristicas entre si*/

//STRING PROTOTYPE

const myObject = {
    city: 'Madrid',
    greet() {
        console.log(`Greeting from ${this.city}`);
    },
};

myObject.greet(); // Greeting from Madrid

/*Este es un objeto con una propiedad de datos cityy un método greet(). Si escribe el nombre del objeto seguido de un punto en la consola, como myObject., la consola mostrará una lista de todas las propiedades disponibles para este objeto. Verás que además de cityy greet, ¡hay muchas otras propiedades!*/

/*__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf*/

myObject.toString(); // "[object Object]"

/*Funciona (incluso si no es obvio qué toString()funciona).

¿Cuáles son estas propiedades adicionales y de dónde vienen?

Cada objeto en JavaScript tiene una propiedad incorporada, que se llama prototipo . El prototipo es en sí mismo un objeto, por lo que tendrá su propio prototipo, formando lo que se llama una cadena de prototipos . La cadena termina cuando llegamos a un prototipo que tiene nullpor prototipo propio.*/

/*Nota: La propiedad de un objeto que apunta a su prototipo no se llama prototype. Su nombre no es estándar, pero en la práctica todos los navegadores utilizan __proto__. La forma estándar de acceder al prototipo de un objeto es el Object.getPrototypeOf()método.*/

/*Cuando se intenta acceder a una propiedad de un objeto: si la propiedad no se puede encontrar en el objeto mismo, se busca la propiedad en el prototipo. Si aún no se puede encontrar la propiedad, entonces se busca el prototipo del prototipo, y así sucesivamente hasta que se encuentra la propiedad o se llega al final de la cadena, en cuyo caso undefinedse devuelve.

Entonces, cuando llamamos myObject.toString(), el navegador:

busca toStringenmyObject
No puedo encontrarlo allí, así que busca en el objeto prototipo de myObjectfortoString
lo encuentra allí y lo llama.
¿ Para qué sirve el prototipo myObject? Para averiguarlo podemos usar la función Object.getPrototypeOf():*/

/*Este es un objeto llamado Object.prototype, y es el prototipo más básico que todos los objetos tienen por defecto. El prototipo de Object.prototypees null, por lo que está al final de la cadena del prototipo:*/

/*El prototipo de un objeto no siempre lo es Object.prototype. Prueba esto:*/

const myDate = new Date();
let object = myDate;

do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while (object);

//Este código crea un Date objeto, luego recorre la cadena de prototipos y registra los prototipos. Nos muestra que el prototipo de my Datees un Date.prototypeobjeto, y el prototipo de eso es Object.prototype.

/*De hecho, cuando llamas a métodos familiares, como myDate2.getMonth(), estás llamando a un método que está definido en Date.prototype.*/


//SHADOWING PROPERTIES

/*¿Qué sucede si define una propiedad en un objeto, cuando se define una propiedad con el mismo nombre en el prototipo del objeto? Vamos a ver:*/

const myDate2 =  new Date2(1995, 11, 17);
console.log(myDate2.getYear()); //95

myDate2.getYear = () => {
    console.log('something else!')

};

myDate2.getYear(); //Something else!

/*Esto debería ser predecible, dada la descripción de la cadena del prototipo. Cuando llamamos, getYear()el navegador primero busca myDateuna propiedad con ese nombre y solo verifica el prototipo si myDateno lo define. Entonces, cuando agregamos getYear()a , se llama myDatea la versión en .myDate

A esto se le llama "seguimiento" de la propiedad.*/




//SETTING A PROTOTYPE

/*Hay varias formas de configurar el prototipo de un objeto en JavaScript, y aquí describiremos dos: Object.create()y constructores.*/

//OBJECT.CREATE
/*El Object.create()método crea un nuevo objeto y le permite especificar un objeto que se utilizará como prototipo del nuevo objeto.*/

const personPrototype = {
    greet() {
        console.log('Hello!');
    },
};
const carl = Object.create(personPrototype);
carl.greet(); //Hello!

//Aquí creamos un objeto personPrototype, que tiene un greet()método. Luego usamos Object.create()para crear un nuevo objeto con personPrototypesu prototipo. Ahora podemos llamar greet()al nuevo objeto y el prototipo proporciona su implementación.

//CONSTRUCTOR

/*En JavaScript, todas las funciones tienen una propiedad denominada prototype. Cuando llamas a una función como constructor, esta propiedad se establece como el prototipo del objeto recién construido (por convención, en la propiedad denominada __proto__).

Entonces, si configuramos prototypeun constructor, podemos asegurarnos de que todos los objetos creados con ese constructor reciban ese prototipo:*/

const personPrototype2 = {
    greet() {
        console.log(`hello, my name is ${this.name}!`)
    },
};

function person(name) {
    this.name = name;
}

Object.assign(person.prototype, personPrototype2)

//or

//person.prototype.greet = personPrototype.greet;

/*Aquí creamos:

un objeto personPrototype, que tiene un greet()método
una Person()función constructora que inicializa el nombre de la persona a crear.
Luego colocamos los métodos definidos en personPrototypela propiedad Personde la función prototypeusando Object.assign .

Después de este código, los objetos creados usando Person()obtendrán Person.prototypesu prototipo, que contiene automáticamente el greetmétodo.*/

const ruben = new person('ruben');
ruben.greet(); //hello, my name is ruben!

/*Esto también explica por qué dijimos antes que el prototipo de myDatese llama Date.prototype: es prototypepropiedad del Dateconstructo*/

//OWN PROPERTIES

/*Los objetos que creamos usando el Personconstructor anterior tienen dos propiedades:

una namepropiedad, que se establece en el constructor, por lo que aparece directamente en Personlos objetos
un greet()método, que se establece en el prototipo.
Es común ver este patrón, en el que los métodos se definen en el prototipo, pero las propiedades de los datos se definen en el constructor. Esto se debe a que los métodos suelen ser los mismos para cada objeto que creamos, mientras que a menudo queremos que cada objeto tenga su propio valor para sus propiedades de datos (como aquí donde cada persona tiene un nombre diferente).

Las propiedades que se definen directamente en el objeto, como nameaquí, se denominan propiedades propias y puedes comprobar si una propiedad es propia usando el Object.hasOwn()método estático:*/


const irma = new person('Irma');

console.log(Object.hasOwn(irma, 'name')) //true
console.log(Object.hasOwn(irma, 'greet')) //false

/*También puede utilizar el Object.hasOwnProperty()método no estático aquí, pero le recomendamos que lo utilice Object.hasOwn()si puede.*/

//PROTOTYPES AND INHERITANCE
/*Los prototipos son una característica poderosa y muy flexible de JavaScript, que permite reutilizar código y combinar objetos.

En particular apoyan una versión de herencia . La herencia es una característica de los lenguajes de programación orientados a objetos que permite a los programadores expresar la idea de que algunos objetos en un sistema son versiones más especializadas de otros objetos.

Por ejemplo, si estamos modelando una escuela, podríamos tener profesores y estudiantes : ambos son personas , por lo que tienen algunas características en común (por ejemplo, ambos tienen nombres), pero cada uno podría agregar características adicionales (por ejemplo, profesores tienen una materia que enseñan) o podrían implementar la misma característica de diferentes maneras. En un sistema POO podríamos decir que tanto los profesores como los estudiantes heredan de las personas.

Puede ver cómo en JavaScript, si los objetos Professory Studentpueden tener Personprototipos, entonces pueden heredar las propiedades comunes, mientras agregan y redefinen aquellas propiedades que deben diferir.

En el próximo artículo analizaremos la herencia junto con las otras características principales de los lenguajes de programación orientados a objetos y veremos cómo JavaScript los admite.*/



