// VALORES DE RETORNO

/*Los valores de retorno son exactamente lo que parecen: los valores que devuelve una función cuando se completa. Ya has encontrado valores de retorno varias veces, aunque es posible que no hayas pensado en ellos explícitamente.*/

const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made


/*La replace()función se invoca en la myTextcadena y se le pasan dos parámetros:

La subcadena a encontrar ('fría')
La cadena para reemplazarla con ('cálida')*/


/*Cuando la función se completa (termina de ejecutarse), devuelve un valor, que es una nueva cadena con el reemplazo realizado. En el código anterior, el resultado de este valor de retorno se guarda en la variable newString.*/

/*Generalmente, se utiliza un valor de retorno cuando la función es un paso intermedio en un cálculo de algún tipo. Quiere llegar a un resultado final, que implica algunos valores que deben calcularse mediante una función. Después de que la función calcula el valor, puede devolver el resultado para almacenarlo en una variable; y puede utilizar esta variable en la siguiente etapa del cálculo.*/


//USAR VALORES DE RETORNO

/*Para devolver un valor de una función personalizada, debe utilizar la palabra clave return . Vimos esto en acción recientemente en nuestro ejemplo random-canvas-circles.html . Nuestra draw()función dibuja 100 círculos aleatorios en algún lugar de un HTML <canvas>:*/

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,0,0,0.5)";
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.fill();
    }
  }

//Dentro de cada iteración del bucle, se realizan tres llamadas a la función para generar un valor aleatorio para la coordenada x , la coordenada y y el radiorandom() del círculo actual , respectivamente. La función toma un parámetro (un número entero) y devuelve un número aleatorio completo entre ese número. Se parece a esto:random()0


function random(number) {
    return Math.floor(Math.random() * number);
  }

  /*esto podria escribirse de la siguiente manera*/

  function random(number) {
    const result = Math.floor(Math.random() * number);
    return result;
  }

  /*Pero la primera versión es más rápida de escribir y más compacta.

Devolvemos el resultado del cálculo Math.floor(Math.random() * number)cada vez que se llama a la función. Este valor de retorno aparece en el punto en que se llamó a la función y el código continúa.

Entonces cuando ejecutas lo siguiente:*/

ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);


/*Si las tres random()llamadas devuelven los valores 500, 200y 35, respectivamente, la línea se ejecutaría como si fuera así:*/

ctx.arc(500, 200, 35, 0, 2 * Math.PI);

/*Las llamadas a funciones en la línea se ejecutan primero y sus valores de retorno se sustituyen por las llamadas a funciones, antes de ejecutar la línea misma.*/


////////////// ver el index.html

/*Las funciones squared()y cubed()son bastante obvias: devuelven el cuadrado o el cubo del número que se proporcionó como parámetro. La factorial()función devuelve el factorial del número dado.*/
function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}


/*Incluya una forma de imprimir información sobre el número ingresado en la entrada de texto agregando el siguiente controlador de eventos debajo de las funciones existentes:*/
input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}. `;
    para.textContent += `${num} cubed is ${cubed(num)}. `;
    para.textContent += `${num} factorial is ${factorial(num)}. `;
  }
});


/*Al agregar un oyente al changeevento, esta función se ejecuta cada vez que el changeevento se activa en la entrada de texto, es decir, cuando se ingresa un nuevo valor en el texto inputy se envía (por ejemplo, ingrese un valor y luego desenfoque la entrada presionando Tabo Return). Cuando se ejecuta esta función anónima, el valor de inputse almacena en la numconstante.

La declaración if imprime un mensaje de error si el valor ingresado no es un número. La condición comprueba si la expresión isNaN(num)devuelve true. La isNaN()función prueba si el numvalor no es un número; si es así, devuelve true, y si no, devuelve false.

Si la condición devuelve false, el numvalor es un número y la función imprime una oración dentro del elemento de párrafo que indica los valores cuadrado, cúbico y factorial del número. La oración llama a las funciones squared(), cubed()y factorial()para calcular los valores requeridos.*/


