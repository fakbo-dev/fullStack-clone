//bucles atraves de una  coleccion 
//Un tipo de colección es el Array, que vimos en el capítulo Arreglos de este curso. Pero también hay otras colecciones en JavaScript, incluidas Sety Map.


// bucle for ... of
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
/*En este ejemplo, for (const cat of cats)dice:

Dada la colección cats, obtenga el primer elemento de la colección.
Asígnelo a la variable caty luego ejecute el código entre llaves {}.
Obtenga el siguiente elemento y repita (2) hasta que haya llegado al final de la colección.*/

// map() and filter()

//Puede usar map()para hacer algo con cada elemento de una colección y crear una nueva colección que contenga los elementos modificados:
function toUpper(string) {
    return string.toUpperCase();
  }
  
cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  

  const upperCats = cats.map(toUpper);
  
  console.log(upperCats);
  // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]


//Puede usar filter()para probar cada elemento de una colección y crear una nueva colección que contenga solo elementos que coincidan:
function lCat(cat) {
    return cat.startsWith("L");
  }
  
cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
  const filtered = cats.filter(lCat);
  
  console.log(filtered);
  // [ "Leopard", "Lion" ]


//bucle estandar
for (initializer; condition; final-expression) {
    // code to run
  }

// ejemplo Real
const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
/*Resultado
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81

Finished!*/
/*let i = 1: la variable de contador, i, comienza en 1. Tenga en cuenta que tenemos que usar letpara el contador, porque lo estamos reasignando cada vez que damos la vuelta al ciclo.

i < 10: sigue dando la vuelta al bucle hasta que isea menor que 10.

i++: agregue uno a icada vuelta del bucle.

Dentro del bucle, calculamos el cuadrado del valor actual de i, es decir: i * i. Creamos una cadena que expresa el cálculo que hicimos y el resultado, y agregamos esta cadena al texto de salida. También agregamos \n, por lo que la próxima cadena que agreguemos comenzará en una nueva línea. Entonces:

Durante la primera ejecución, i = 1, por lo que agregaremos 1 x 1 = 1.
Durante la segunda ejecución, i = 2, por lo que agregaremos 2 x 2 = 4.
Etcétera…
Cuando isea igual a, 10dejaremos de ejecutar el ciclo y pasaremos directamente al siguiente bit de código debajo del ciclo, imprimiendo el Finished!mensaje en una nueva línea.*/



// recorriendo Colleciones con bluces for 
cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
// A veces aún necesita usar un for bucle para iterar a través de una matriz. Por ejemplo, en el siguiente código queremos registrar un mensaje con la lista de nuestros gatos:
 cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "

//manera correcta
 cats = ["Pete", "Biggles", "Jasmine"];

myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

//Salir de bucles con pausa

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});
/*En primer lugar, tenemos algunas definiciones de variables: tenemos una matriz de información de contacto, y cada elemento es una cadena que contiene un nombre y un número de teléfono separados por dos puntos.
A continuación, adjuntamos un detector de eventos al botón ( btn) para que cuando se presione se ejecute algún código para realizar la búsqueda y devolver los resultados.
Almacenamos el valor ingresado en la entrada de texto en una variable llamada searchName, antes de vaciar la entrada de texto y enfocarla nuevamente, listo para la próxima búsqueda. Tenga en cuenta que también ejecutamos el toLowerCase()método en la cadena, por lo que las búsquedas no distinguirán entre mayúsculas y minúsculas.
Ahora vamos a la parte interesante, el for...ofbucle:
Dentro del ciclo, primero dividimos el contacto actual en el carácter de dos puntos y almacenamos los dos valores resultantes en una matriz llamada splitContact.
Luego usamos una declaración condicional para probar si splitContact[0](el nombre del contacto, nuevamente en minúsculas con toLowerCase()) es igual al ingresado searchName. Si es así, ingresamos una cadena en el párrafo para informar cuál es el número del contacto y lo usamos breakpara finalizar el ciclo.
Después del ciclo, verificamos si configuramos un contacto y, si no, configuramos el texto del párrafo en "Contacto no encontrado".*/


// SALTAR ITERACIONES CON 'CONTINUE'

//La instrucción continue funciona de manera similar a break, pero en lugar de salir del ciclo por completo, salta a la siguiente iteración del ciclo.

/*const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");*/

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});

/*En este caso, la entrada debe ser un número ( num). Al forbucle se le asigna un contador que comienza en 1 (ya que en este caso no estamos interesados ​​en 0), una condición de salida que dice que el bucle se detendrá cuando el contador sea mayor que la entrada numy un iterador que suma 1 al contador cada uno. tiempo.

Dentro del ciclo, encontramos la raíz cuadrada de cada número usando Math.sqrt(i) , luego verificamos si la raíz cuadrada es un número entero probando si es igual a sí mismo cuando se ha redondeado hacia abajo al entero más cercano (esto es lo que Math.floor() hace con el número que se pasa).

Si la raíz cuadrada y la raíz cuadrada redondeada hacia abajo no son iguales ( !==), significa que la raíz cuadrada no es un número entero, por lo que no nos interesa. En tal caso, usamos la continuedeclaración para pasar a la siguiente iteración del ciclo sin registrar el número en ninguna parte.

Si la raíz cuadrada es un número entero, saltamos el ifbloque por completo, por lo que la continuedeclaración no se ejecuta; en su lugar, concatenamos el ivalor actual más un espacio al final del contenido del párrafo.*/


//while and do...while

//sintaxis

initializer
while (condition) {
  // code to run

  final-expression
}

// ejemplo de bucle While

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."



// bucle Do While

initializer
do {
  // code to run

  final-expression
} while (condition)

// la diferencia entre un do while y un while es que el codigo dentro del do while siempre se ejecuta al menos una vez, esto se debe a que la condicion viene despues del codigo dentro del bucle entonces siempre ejecutamos ese codigo y luego cerificamos si se necesita ejecutar nuevamente. con while y for la verificacion es lo primero por lo que es posible que el codugo nunca se ejecte

//ejemplo de do while

//////////////////////////////////////

//const cats = ["Pete", "Biggles", "Jasmine"];

//let myFavoriteCats = "My cats are called ";

// let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

/* Con while y do... while, como con todos los bucles, debes asegurarte de que el inicializador se incremente o, según el caso, se disminuya, para que la condición eventualmente se vuelva falsa. De lo contrario, el bucle continuará para siempre y el navegador lo obligará a detenerse o se bloqueará. Esto se llama bucle infinito */




//que tipo de bucle usar 

/*Si está iterando a través de una matriz o algún otro objeto que lo admita y no necesita acceso a la posición del índice de cada elemento, entonces for...of es la mejor opción. Es más fácil de leer y hay menos posibilidades de equivocarse.*/

/*Para otros usos, for, whiley do...while los bucles son en gran medida intercambiables. Todos se pueden utilizar para resolver los mismos problemas, y cuál utilice dependerá en gran medida de sus preferencias personales: cuál le resultará más fácil de recordar o más intuitivo. Recomendaríamos for, al menos para empezar, ya que probablemente sea el más fácil para recordar todo: el inicializador, la condición y la expresión final deben ir claramente entre paréntesis, por lo que es fácil ver dónde están y verificar que no te los estás perdiendo.*/

//Primero for...of:

for (const item of array) {
  // code to run
}


// for 

for (initializer; condition; final-expression) {
  // code to run
}

//while

initializer
while (condition) {
  // code to run

  final-expression
}


//do while

initializer
do {
  // code to run

  final-expression
} while (condition)



//////////////////////////////////////////////////////////////////////////



let output = document.querySelector('.output');
output.innerHTML = '';




//let i = 10;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = `cuenta Regresiva ${i}`;
  } else if (i === 0) {
    para.textContent = 'despegue';
  } else {
    para.textContent = i;
  }
  output.appendChild(para);

  i--;
}

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (const element of people) {
if (element === 'Phil' || element === 'Lola') {
refused.textContent += `${element}, `;


}else {
admitted.textContent += `${element}, `;
}
}
refused.textContent = refused.textContent.slice(0, -2) + '.';

admitted.textContent = admitted.textContent.slice(0, -2) + '.';


