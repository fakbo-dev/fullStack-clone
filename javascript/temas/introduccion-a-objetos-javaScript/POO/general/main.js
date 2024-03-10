/*La programación orientada a objetos (POO) es un paradigma de programación fundamental para muchos lenguajes de programación, incluidos Java y C++. En este artículo, proporcionaremos una descripción general de los conceptos básicos de la programación orientada a objetos. Describiremos tres conceptos principales: clases e instancias , herencia y encapsulación . Por ahora, describiremos estos conceptos sin hacer referencia a JavaScript en particular, por lo que todos los ejemplos se dan en pseudocódigo .*/

/*Para ser precisos, las características descritas aquí pertenecen a un estilo particular de programación orientada a objetos llamado programación orientada a objetos basada en clases o "clásica". Cuando la gente habla de programación orientada a objetos, generalmente se refieren a este tipo de programación.*/


/*La programación orientada a objetos consiste en modelar un sistema como una colección de objetos, donde cada objeto representa algún aspecto particular del sistema. Los objetos contienen funciones (o métodos) y datos. Un objeto proporciona una interfaz pública a otro código que quiere usarlo pero mantiene su propio estado interno privado; otras partes del sistema no tienen que preocuparse por lo que sucede dentro del objeto.*/


//CLASES E INSTANCIAS

/*Cuando modelamos un problema en términos de objetos en programación orientada a objetos, creamos definiciones abstractas que representan los tipos de objetos que queremos tener en nuestro sistema. Por ejemplo, si estuviéramos modelando una escuela, es posible que queramos tener objetos que representen a los profesores. Cada profesor tiene algunas propiedades en común: todos tienen un nombre y una materia que imparten. Además, cada profesor puede hacer ciertas cosas: todos pueden calificar un trabajo y pueden presentarse a sus alumnos a principios de año, por ejemplo.

Entonces Professorpodría ser una clase en nuestro sistema. La definición de la clase enumera los datos y métodos que tiene cada profesor.

En pseudocódigo, una Professorclase podría escribirse así:*/

/*class Professor
    properties
        name
        teaches
    methods
        grade(paper)
        introduceSelf()*/

/*Esto define una Professorclase con:

dos propiedades de datos: nameyteaches

dos métodos: grade() calificar un trabajo y introduceSelf() presentarse.

Por sí sola, una clase no hace nada: es una especie de plantilla para crear objetos concretos de ese tipo. Cada profesor concreto que creamos se llama instancia de la Professorclase. El proceso de creación de una instancia lo realiza una función especial llamada constructor . Pasamos valores al constructor para cualquier estado interno que queramos inicializar en la nueva instancia.*/

/*Generalmente, el constructor se escribe como parte de la definición de la clase y normalmente tiene el mismo nombre que la clase misma:

class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()*/


/*Este constructor toma dos parámetros, por lo que podemos inicializar las propiedades namey teaches cuando creamos un nuevo profesor concreto.

Ahora que tenemos un constructor, podemos crear algunos profesores. Los lenguajes de programación suelen utilizar la palabra clave new para indicar que se está llamando a un constructor.*/
walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'

/*Esto crea dos objetos, ambas instancias de la Professorclase.*/

//HERENCIA 

/*Supongamos que en nuestra escuela también queremos representar a los estudiantes. A diferencia de los profesores, los estudiantes no pueden calificar trabajos, no enseñan una materia en particular y pertenecen a un año en particular.

Sin embargo, los estudiantes tienen un nombre y es posible que también quieran presentarse, por lo que podríamos escribir la definición de una clase de estudiantes de esta manera:

class Student
    properties
        name
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()*/

/*Sería útil si pudiéramos representar el hecho de que estudiantes y profesores comparten algunas propiedades, o más exactamente, el hecho de que, en algún nivel, son el mismo tipo de cosas . La herencia nos permite hacer esto.

Empezamos observando que tanto estudiantes como profesores son personas, y las personas tienen nombres y quieren presentarse. Podemos modelar esto definiendo una nueva clase Person, donde definimos todas las propiedades comunes de las personas. Entonces, Professory Studentambos pueden derivar de Person, añadiendo sus propiedades extra:*/


/*class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()

En este caso, diríamos que Person es la superclase o clase padre de ambos Professor y Student. Por el contrario, Professor y Student son subclases o clases secundarias de Person.

Puede notar que introduceSelf() está definido en las tres clases. La razón de esto es que si bien todas las personas quieren presentarse, la forma en que lo hacen es diferente:*/

walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'

/*Es posible que tengamos una implementación predeterminada de introduceSelf()para personas que no son estudiantes ni profesores:*/

pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'

/*Esta característica (cuando un método tiene el mismo nombre pero una implementación diferente en diferentes clases) se llama polimorfismo . Cuando un método en una subclase reemplaza la implementación de la superclase, decimos que la subclase anula la versión de la superclase.*/

//ENCAPSULACION 

/*Los objetos proporcionan una interfaz para otro código que quiere usarlos pero mantienen su propio estado interno. El estado interno del objeto se mantiene privado , lo que significa que solo se puede acceder a él mediante los métodos propios del objeto, no desde otros objetos. Mantener privado el estado interno de un objeto y, en general, hacer una división clara entre su interfaz pública y su estado interno privado, se denomina encapsulación .

Esta es una característica útil porque permite al programador cambiar la implementación interna de un objeto sin tener que buscar y actualizar todo el código que lo utiliza: crea una especie de firewall entre este objeto y el resto del sistema.

Por ejemplo, supongamos que a los estudiantes se les permite estudiar tiro con arco si están en el segundo año o más. Podríamos implementar esto simplemente exponiendo la yearpropiedad del estudiante, y otro código podría examinarla para decidir si el estudiante puede tomar el curso:*/

if (student.year > 1) {
    // allow the student into the class
  }


/*El problema es que, si decidimos cambiar los criterios para permitir que los estudiantes estudien tiro con arco (por ejemplo, exigiendo también que el padre o tutor dé su permiso), necesitaríamos actualizar todos los lugares de nuestro sistema que realizan esta prueba. Sería mejor tener un canStudyArchery()método sobre Studentobjetos que implemente la lógica en un solo lugar:

class Student : extends Person
    properties
       year
    constructor
       Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }*/

       if (student.canStudyArchery()) {
        // allow the student into the class
      }
      

/*De esa forma, si queremos cambiar las reglas sobre el estudio del tiro con arco, sólo tendremos que actualizar la Studentclase y todo el código que la utilice seguirá funcionando.

En muchos lenguajes de programación orientada a objetos, podemos evitar que otro código acceda al estado interno de un objeto marcando algunas propiedades como private. Esto generará un error si el código externo al objeto intenta acceder a ellos:

class Student : extends Person
    properties
       private year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // error: 'year' is a private property of Student
En lenguajes que no exigen un acceso como este, los programadores usan convenciones de nomenclatura, como comenzar el nombre con un guión bajo, para indicar que la propiedad debe considerarse privada.*/

//POO y javaScript

/*En este artículo, hemos descrito algunas de las características básicas de la programación orientada a objetos basada en clases implementada en lenguajes como Java y C++.

En los dos artículos anteriores, analizamos un par de características principales de JavaScript: constructores y prototipos . Estas características ciertamente tienen alguna relación con algunos de los conceptos de programación orientada a objetos descritos anteriormente.

Los constructores en JavaScript nos proporcionan algo así como una definición de clase, lo que nos permite definir la "forma" de un objeto, incluidos los métodos que contiene, en un solo lugar. Pero aquí también se pueden utilizar prototipos. Por ejemplo, si un método se define en la prototypepropiedad de un constructor, entonces todos los objetos creados usando ese constructor obtienen ese método a través de su prototipo, y no necesitamos definirlo en el constructor.
la cadena de prototipos parece una forma natural de implementar la herencia. Por ejemplo, si podemos tener un Studentobjeto cuyo prototipo sea Person, entonces puede heredar namey anular introduceSelf().
Pero vale la pena comprender las diferencias entre estas características y los conceptos de programación orientada a objetos "clásicos" descritos anteriormente. Destacaremos un par de ellos aquí.

Primero, en la programación orientada a objetos basada en clases, las clases y los objetos son dos construcciones separadas, y los objetos siempre se crean como instancias de clases. Además, existe una distinción entre la característica utilizada para definir una clase (la sintaxis de la clase misma) y la característica utilizada para crear una instancia de un objeto (un constructor). En JavaScript, podemos crear, y a menudo lo hacemos, objetos sin ninguna definición de clase separada, ya sea usando una función o un objeto literal. Esto puede hacer que trabajar con objetos sea mucho más liviano que en la programación orientada a objetos clásica.

En segundo lugar, aunque una cadena prototipo parece una jerarquía de herencia y se comporta como ella en algunos aspectos, es diferente en otros. Cuando se crea una instancia de una subclase, se crea un único objeto que combina las propiedades definidas en la subclase con las propiedades definidas más arriba en la jerarquía. Con la creación de prototipos, cada nivel de la jerarquía está representado por un objeto separado y están vinculados entre sí a través de la __proto__propiedad. El comportamiento de la cadena de prototipos se parece menos a una herencia y más a una delegación . La delegación es un patrón de programación en el que un objeto, cuando se le pide que realice una tarea, puede realizarla él mismo o pedirle a otro objeto (su delegado ) que realice la tarea en su nombre. En muchos sentidos, la delegación es una forma más flexible de combinar objetos que la herencia (por un lado, es posible cambiar o reemplazar completamente el delegado en tiempo de ejecución).

Dicho esto, se pueden utilizar constructores y prototipos para implementar patrones de programación orientada a objetos basados ​​en clases en JavaScript. Pero usarlos directamente para implementar funciones como la herencia es complicado, por lo que JavaScript proporciona funciones adicionales, superpuestas al modelo prototipo, que se asignan más directamente a los conceptos de programación orientada a objetos basada en clases. Estas características adicionales son el tema del próximo artículo.*/




