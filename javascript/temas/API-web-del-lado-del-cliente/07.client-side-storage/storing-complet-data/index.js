//La API IndexedDB (a veces abreviada IDB) es un sistema de base de datos completo disponible en el navegador en el que puede almacenar datos relacionados complejos, cuyos tipos no se limitan a valores simples como cadenas o números. Puede almacenar vídeos, imágenes y prácticamente cualquier otra cosa en una instancia de IndexedDB.



// inital setup database

//Create an instance of a db object for us to store the open database in

let db;


//Aquí declaramos una variable llamada db que luego se usará para almacenar un objeto que representa nuestra base de datos. Usaremos esto en algunos lugares, por lo que lo declaramos globalmente aquí para facilitar las cosas.


// Open our database; it is created if it doesn't already exist

// (see the upgradeneeded handler below)

const openRequest = window.indexedDB.open("notes_db", 1);

//Esta línea crea una solicitud para abrir la versión 1de una base de datos llamada notes_db. Si aún no existe, se creará mediante un código posterior. Verá que este patrón de solicitud se usa con mucha frecuencia en IndexedDB. Las operaciones de bases de datos toman tiempo. No desea bloquear el navegador mientras espera los resultados, por lo que las operaciones de la base de datos son asincrónicas , lo que significa que en lugar de ocurrir inmediatamente, sucederán en algún momento en el futuro y recibirá una notificación cuando terminen. Para manejar esto en IndexedDB, crea un objeto de solicitud (que puede llamarse como quiera; lo llamamos openRequestaquí, por lo que es obvio para qué sirve). Luego utiliza controladores de eventos para ejecutar código cuando la solicitud se completa, falla, etc., lo cual verá en uso a continuación.

//Nota: El número de versión es importante. Si desea actualizar su base de datos (por ejemplo, cambiando la estructura de la tabla), debe ejecutar su código nuevamente con un número de versión mayor, un esquema diferente especificado dentro del upgradeneededcontrolador (ver más abajo), etc. No cubriremos la actualización. bases de datos en este tutorial.

//Ahora agregue los siguientes controladores de eventos justo debajo de su adición anterior:

//Error handler signifies that the database didn't open successfully

openRequest.addEventListener("error", () => {
    console.error("Database failed to open");
});

//Success handler signifies that the database opened successfully
openRequest.addEventListener("success", () => {
    console.log("Database opened successfully");

    //Store the opened database object in the db variable. This is used a low below

    db = openRequest.result;

    //Run the displatData() function to display the notes alredy in the IDB;

    displayData();
})


//El errorcontrolador de eventos se ejecutará si el sistema vuelve diciendo que la solicitud falló. Esto le permite responder a este problema. En nuestro ejemplo, simplemente imprimimos un mensaje en la consola de JavaScript. El successcontrolador de eventos se ejecutará si la solicitud regresa exitosamente, lo que significa que la base de datos se abrió exitosamente. Si este es el caso, un objeto que representa la base de datos abierta pasa a estar disponible en la openRequest.resultpropiedad, lo que nos permite manipular la base de datos. Guardamos esto en la dbvariable que creamos anteriormente para su uso posterior. También ejecutamos una función llamada displayData(), que muestra los datos en la base de datos dentro del archivo <ul>. Lo ejecutamos ahora para que las notas que ya están en la base de datos se muestren tan pronto como se cargue la página. Lo verás displayData()definido más adelante.

//Finalmente, en esta sección agregaremos probablemente el controlador de eventos más importante para configurar la base de datos: upgradeneeded. Este controlador se ejecuta si la base de datos aún no se ha configurado o si la base de datos se abre con un número de versión mayor que la base de datos almacenada existente (al realizar una actualización). Agregue el siguiente código, debajo de su controlador anterior:


// Set up the database tables if this has not already been done
openRequest.addEventListener("upgradeneeded", (e) => {
    // Grab a reference to the opened database
    db = e.target.result;

    // Create an objectStore in our database to store notes and an auto-incrementing key
    // An objectStore is similar to a 'table' in a relational database
    const objectStore = db.createObjectStore("notes_os", {
        keyPath: "id",
        autoIncrement: true,
    });

    // Define what data items the objectStore will contain
    objectStore.createIndex("title", "title", { unique: false });
    objectStore.createIndex("body", "body", { unique: false });

    console.log("Database setup complete");
});


//Aquí es donde definimos el esquema (estructura) de nuestra base de datos; es decir, el conjunto de columnas (o campos) que contiene. Aquí primero tomamos una referencia a la base de datos existente de la resultpropiedad del objetivo del evento ( e.target.result), que es el requestobjeto. Esto es equivalente a la línea db = openRequest.result;dentro del successcontrolador de eventos, pero necesitamos hacer esto por separado aquí porque el upgradeneededcontrolador de eventos (si es necesario) se ejecutará antes que el successcontrolador de eventos, lo que significa que el dbvalor no estaría disponible si no hiciéramos esto. . Luego usamos IDBDatabase.createObjectStore()para crear un nuevo almacén de objetos dentro de nuestra base de datos abierta llamada notes_os. Esto equivale a una sola tabla en un sistema de base de datos convencional. Le hemos dado el nombre notas y también hemos especificado un autoIncrementcampo clave llamado id(en cada nuevo registro se le dará automáticamente un valor incrementado); el desarrollador no necesita configurar esto explícitamente. Al ser la clave, el idcampo se utilizará para identificar registros de forma única, como al eliminar o mostrar un registro. También creamos otros dos índices (campos) usando el IDBObjectStore.createIndex()método: title(que contendrá un título para cada nota) y body(que contendrá el texto del cuerpo de la nota).
