const canvas = document.querySelector(".myCanvas");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, width, height);


//Es posible renderizar imágenes externas en su lienzo. Pueden ser imágenes simples, fotogramas de vídeos o el contenido de otros lienzos. Por el momento sólo veremos el caso de utilizar algunas imágenes simples en nuestro lienzo.

//Como antes, haga otra copia nueva de nuestra plantilla de lienzo ( 1_canvas_template ) en la que dibujará el nuevo ejemplo. Las imágenes se dibujan sobre lienzo utilizando este drawImage()método. La versión más simple requiere tres parámetros: una referencia a la imagen que deseas renderizar y las coordenadas X e Y de la esquina superior izquierda de la imagen.


const image = new Image();

image.src = "firefox.png";

image.addEventListener("load", () => ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175));


//Aquí creamos un nuevo HTMLImageElementobjeto usando el Image()constructor. El objeto devuelto es del mismo tipo que el que se devuelve cuando se toma una referencia a un <img>elemento existente. Luego configuramos su srcatributo para que sea igual a la imagen de nuestro logotipo de Firefox. En este punto, el navegador comienza a cargar la imagen.

// Ahora podríamos intentar incrustar la imagen usando drawImage(), pero primero debemos asegurarnos de que el archivo de imagen se haya cargado; de lo contrario, el código fallará.Esto lo podemos lograr usando el loadevento, que solo se activará cuando la imagen haya terminado de cargarse.Añade el siguiente bloque debajo del anterior:


// El primer parámetro es la referencia de la imagen, como antes.

// Los parámetros 2 y 3 definen las coordenadas de la esquina superior izquierda del área que desea recortar de la imagen cargada, en relación con la esquina superior izquierda de la imagen misma. No se dibujará nada a la izquierda del primer parámetro ni encima del segundo.

// Los parámetros 4 y 5 definen el ancho y alto del área que queremos recortar de la imagen original que cargamos.

// Los parámetros 6 y 7 definen las coordenadas en las que desea dibujar la esquina superior izquierda de la parte recortada de la imagen, en relación con la esquina superior izquierda del lienzo.

// Los parámetros 8 y 9 definen el ancho y el alto para dibujar el área recortada de la imagen. En este caso, hemos especificado las mismas dimensiones que el sector original, pero puede cambiar su tamaño especificando valores diferentes.


canvas.setAttribute("arial-label", "Firefox Logo");

