/*En el último artículo , presentamos algunos conceptos básicos de programación orientada a objetos (POO) y analizamos un ejemplo en el que utilizamos principios de POO para modelar profesores y estudiantes en una escuela.

También hablamos sobre cómo es posible usar prototipos y constructores para implementar un modelo como este, y que JavaScript también proporciona características que se corresponden más estrechamente con los conceptos clásicos de programación orientada a objetos.

En este artículo, analizaremos estas características. Vale la pena tener en cuenta que las características descritas aquí no son una nueva forma de combinar objetos: bajo el capó, todavía usan prototipos. Son solo una forma de facilitar la configuración de una cadena prototipo.*/

//CLASES Y CONSTRUCTORES

/*Puedes declarar una clase usando la class palabra clave. Aquí hay una declaración de clase para nuestro Persondel artículo anterior:*/

class Person {
    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelft() {
        console.log(`Hi I'm ${this.name}`)
    }
}

/*Esto declara una clase llamada Person, con:

una name propiedad.

un constructor que toma un nameparámetro que se utiliza para inicializar la name propiedad del nuevo objeto

un introduceSelf()método que puede hacer referencia a las propiedades del objeto usando this.

La name;declaración es opcional: puede omitirla y la línea this.name = name;en el constructor creará la namepropiedad antes de inicializarla. Sin
embargo, enumerar propiedades explícitamente en la declaración de clase podría facilitar que las personas que lean su código vean qué propiedades forman parte de esta clase.

También puedes inicializar la propiedad a un valor predeterminado cuando la declaras, con una línea como name = '';.

El constructor se define mediante la constructorpalabra clave. Al igual que un constructor fuera de una definición de clase , hará lo siguiente:

crear un nuevo objeto

vincularse thisal nuevo objeto, para que pueda consultarlo thisen su código de constructor

ejecutar el código en el constructor

devolver el nuevo objeto.

Dado el código de declaración de clase anterior, puedes crear y usar una nueva Personinstancia como esta:*/

const giles = new Person('Giles');
giles.introduceSelft(); // Hi I'm Giles


//Tenga en cuenta que en este ejemplo llamamos al constructor usando el nombre de la clase Person 

//OMITIR CONSTRUCTORES 

/*Si no necesita realizar ninguna inicialización especial, puede omitir el constructor y se generará un constructor predeterminado:*/

class Animal {
    sleep() {
        console.log('zzzzzzzzzzz');
    }
}

const spot = new Animal();

spot.sleep(); //zzzzzzzzzzzzzz

//HERENCIA 

/*Dada nuestra Personclase anterior, definamos la Professorsubclase.*/

class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelft() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`,);
    }
    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

/*Usamos la extendspalabra clave para decir que esta clase hereda de otra clase.

La Professorclase agrega una nueva propiedad teaches, así que la declaramos.

Como queremos establecer teachescuándo se crea una nueva Professor, definimos un constructor, que toma namey teachescomo argumentos. Lo primero que hace este constructor es llamar al constructor de la superclase usando super(), pasando el nameparámetro. El constructor de la superclase se encarga de configurarlo name. Después de eso, el Professorconstructor establece la teachespropiedad.*/

/*Si una subclase tiene que realizar su propia inicialización, primero debe llamar al constructor de la superclase usando super(), pasando cualquier parámetro que el constructor de la superclase esté esperando.*/

/*También anulamos el introduceSelf()método de la superclase y agregamos un nuevo método grade()para calificar un trabajo (nuestro profesor no es muy bueno y simplemente asigna calificaciones aleatorias a los trabajos).

Con esta declaración ahora podemos crear y utilizar profesores:*/

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade

//ENCAPSULACION

/*Finalmente, veamos cómo implementar la encapsulación en JavaScript. En el último artículo discutimos cómo nos gustaría hacer que la yearpropiedad sea Studentprivada, para poder cambiar las reglas sobre las clases de tiro con arco sin romper ningún código que use la Studentclase.

Aquí hay una declaración de la Studentclase que hace precisamente eso:*/

class Student extends Person {
    #year;

    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelft() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
    canStudyArchery() {
        return this.#year > 1;
    }
}

/*En esta declaración de clase, #yearhay una propiedad de datos privada . Podemos construir un Studentobjeto y podemos usarlo #yearinternamente, pero si el código externo al objeto intenta acceder, #yearel navegador arroja un error:*/

const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

//summers.#year; // SyntaxError

// El código ejecutado en la consola de Chrome puede acceder a propiedades privadas fuera de la clase. Esta es una relajación de la restricción de sintaxis de JavaScript exclusiva de DevTools.

/*Las propiedades de datos privados deben declararse en la declaración de clase y sus nombres deben comenzar con #.*/

//METODOS PRIVADOS

/*Puede tener métodos privados así como propiedades de datos privados. Al igual que las propiedades de datos privados, sus nombres comienzan con #y solo pueden ser llamados mediante los propios métodos del objeto:*/

class Example {
    somePublicMethod() {
      this.#somePrivateMethod();
    }
  
    #somePrivateMethod() {
      console.log("You called me?");
    }
  }
  
  const myExample = new Example();
  
  myExample.somePublicMethod(); // 'You called me?'
 //  myExample.#somePrivateMethod(); // SyntaxError
  




