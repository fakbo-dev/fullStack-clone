//HTML viene con elementos para incrustar medios enriquecidos en documentos, <video>y <audio>que a su vez vienen con sus propias API para controlar la reproducción, la búsqueda, etc. Este artículo le muestra cómo realizar tareas comunes, como la creación de controles de reproducción personalizados.



// API HTMLMediaElement

//Como parte de la especificación HTML, la HTMLMediaElementAPI proporciona características que le permiten controlar reproductores de video y audio mediante programación, por ejemplo HTMLMediaElement.play(), HTMLMediaElement.pause()etc. Esta interfaz está disponible para ambos elementos <audio>y <video>, ya que las características que querrá implementar son casi idénticas. Veamos un ejemplo y agreguemos funciones a medida que avanzamos.


//starting