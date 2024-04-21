// El navegador contiene algunas herramientas de programación de gráficos muy potentes, desde el lenguaje de gráficos vectoriales escalables ( SVG ) hasta API para dibujar en <canvas>elementos HTML (consulte La API de Canvas y WebGL ). Este artículo proporciona una introducción al lienzo y más recursos que le permitirán aprender más.



//Graphic on the web

//Si desea crear una escena 2D o 3D en una página web, debe comenzar con un <canvas>elemento HTML. Este elemento se utiliza para definir el área de la página en la que se dibujará la imagen. Esto es tan sencillo como incluir el elemento en la página:


const canvas = document.querySelector(".myCanvas");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//Aquí hemos almacenado una referencia al lienzo en la canvasconstante. En la segunda línea establecemos una nueva constante widthy la propiedad del lienzo widthigual a Window.innerWidth(lo que nos da el ancho de la ventana gráfica). En la tercera línea establecemos una nueva constante heighty la propiedad del lienzo heightigual a Window.innerHeight(lo que nos da la altura de la ventana gráfica). ¡Ahora tenemos un lienzo que ocupa todo el ancho y alto de la ventana del navegador! También verá que estamos encadenando asignaciones con múltiples signos iguales; esto está permitido en JavaScript y es una buena técnica si desea que varias variables tengan el mismo valor. Queríamos que el ancho y el alto del lienzo fueran fácilmente accesibles en las variables ancho/alto, ya que son valores útiles para tener disponibles para más adelante (por ejemplo, si desea dibujar algo exactamente a la mitad del ancho del lienzo).

//Generalmente debes establecer el tamaño de la imagen usando atributos HTML o propiedades DOM, como se explicó anteriormente. Podrías usar CSS, pero el problema es que el tamaño se realiza después de que el lienzo se haya renderizado y, al igual que cualquier otra imagen (el lienzo renderizado es solo una imagen), la imagen podría pixelarse/distorsionarse.


//Get the context and final setup

//Necesitamos hacer una última cosa antes de que podamos considerar nuestra plantilla de lienzo terminada. Para dibujar en el lienzo necesitamos obtener una referencia especial al área de dibujo llamada contexto. Esto se hace usando el HTMLCanvasElement.getContext()método, que para uso básico toma una sola cadena como parámetro que representa el tipo de contexto que desea recuperar.

const ctx = canvas.getContext("2d");

//Nota: otros valores de contexto que puede elegir incluyen webglWebGL, webgl2WebGL 2, etc., pero no los necesitaremos en este artículo.


ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);


//Aquí configuramos un color de relleno usando la fillStylepropiedad del lienzo (esto toma valores de color tal como lo hacen las propiedades CSS), luego dibujamos un rectángulo que cubre toda el área del lienzo con el fillRectmétodo (los primeros dos parámetros son las coordenadas del rectángulo esquina superior izquierda; los dos últimos son el ancho y el alto en el que desea dibujar el rectángulo (le dijimos que esas widthvariables heightserían útiles).


//Conceptos basicos de lienzo 2D

//Como dijimos anteriormente, todas las operaciones de dibujo se realizan manipulando un CanvasRenderingContext2Dobjeto (en nuestro caso ctx). Muchas operaciones necesitan recibir coordenadas para determinar exactamente dónde dibujar algo: la parte superior izquierda del lienzo es el punto (0, 0), el eje horizontal (x) va de izquierda a derecha y el eje vertical (y) va desde de arriba hacia abajo.


//Rectangulo simple --------> ver canvas template


