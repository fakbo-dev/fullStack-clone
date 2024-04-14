// La programación asincrónica es una técnica que permite que su programa inicie una tarea potencialmente de larga duración y aún pueda responder a otros eventos mientras se ejecuta esa tarea, en lugar de tener que esperar hasta que finalice. Una vez que la tarea ha finalizado, se presenta el resultado a su programa.

// Muchas funciones proporcionadas por los navegadores, especialmente las más interesantes, pueden tardar mucho tiempo y, por tanto, son asincrónicas. Por ejemplo:

// Realizar solicitudes HTTP utilizando fetch()
// Acceder a la cámara o al micrófono de un usuario usando getUserMedia()
// Pedirle a un usuario que seleccione archivos usando showOpenFilePicker()



// Entonces, aunque no tenga que implementar sus propias funciones asincrónicas con mucha frecuencia, es muy probable que necesite usarlas correctamente .

// En este artículo, comenzaremos analizando el problema con las funciones síncronas de larga ejecución, que hacen que la programación asincrónica sea una necesidad.

