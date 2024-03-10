// matriz general
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

//matriz number
const sequence = [1, 1, 2, 3, 5, 8, 13];

//matriz con un string Number y otra matriz multidimensional
const random = ["tree", 795, [0, 1, 2]];

//ejemplos de matrices

const valo = ['vandal', '25', 'phantom', '30', 'operator', '5'];
const oneCoin =['latesitoo', 'urigod', 'mauu', 'puvlo', 'marcogod'];
const numeros = [13, 13.23, 14.25, 20.50, 18];


//longitud de una matriz (cantidad de elementos)
console.log(shopping.length) // 5

//ACCESO Y MODIFICACION DE UNA MATRIZ

//Acceder a elemento individual de la matriz
console.log(shopping[0]); // bread

//modificar la matriz dando un nuevo valor a un unico elemento
shopping[0] = "tahini";
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]


//Accerder a una matriz multidimensional (matriz dentro de una matriz)
random = ["tree", 795, [0, 1, 2]];
random[2][2]; //muestra el tercer valor de la matriz y el tercer valor dentro d e la matriz multidimensional


//Encontrar el índice de elementos en una matriz


const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1

//Agregar elementos con el metodo (push()) al final de la matriz

const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]


//La nueva longitud de la matriz se devuelve cuando se completa la llamada al método. Si quisiera almacenar la nueva longitud de la matriz en una variable, podría hacer algo como esto:
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3



//Para agregar un elemento al comienzo de la matriz, use unshift():

cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]

//Eliminar Elementos

//eliminar ultimo elemento pop()
cities.pop();
console.log(cities); // [ "Manchester" ]

//El pop()método devuelve el elemento que se eliminó. Para guardar ese elemento en una nueva variable, puede hacer esto:
const removedCity = cities.pop();
console.log(removedCity); // "Liverpool"

//eliminar primer elemento shift()

cities.shift();
console.log(cities); // [ "Liverpool" ]
//si se conoce el indice del elemento se puede usar para eliminar usando el metodo splice()

const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]

/*En esta llamada a splice(), el primer argumento dice dónde comenzar a eliminar elementos y el segundo argumento indica cuántos elementos se deben eliminar. Para que pueda eliminar más de un elemento:*/

if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]

//Acceder a elementos
//Muy a menudo querrá acceder a todos los elementos de la matriz. Puedes hacer esto usando la for...of declaración:

for (const bird of birds) {
  console.log(bird);
}

//A veces querrá hacer lo mismo con cada elemento de una matriz, dejándole una matriz que contiene los elementos modificados. Puedes hacer esto usando map(). El siguiente código toma una matriz de números y duplica cada número:
function double(number) {
    return number * 2;
  }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  console.log(doubled); // [ 10, 4, 14, 12 ]

//Asignamos una función a map(), y map()llamamos a la función una vez por cada elemento de la matriz, pasando el elemento. Luego agrega el valor de retorno de cada llamada de función a una nueva matriz y finalmente devuelve la nueva matriz.


//A veces querrá crear una nueva matriz que contenga solo los elementos de la matriz original que coincidan con alguna prueba. Puedes hacer eso usando filter(). El siguiente código toma una matriz de cadenas y devuelve una matriz que contiene solo las cadenas que tienen más de 8 caracteres:

function isLong(city) {
    return city.length > 8;
  }
  //const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
  const longer = cities.filter(isLong);
  console.log(longer); // [ "Liverpool", "Edinburgh" ]
  

//Como map(), le damos una función al filter()método y filter()llamamos a esta función para cada elemento de la matriz, pasando el elemento. Si la función devuelve true, el elemento se agrega a una nueva matriz. Finalmente devuelve la nueva matriz.


//Conversión entre cadenas y matrices


//split()  esto toma un solo parámetro, el carácter en el que desea separar la cadena, y devuelve las subcadenas entre el separador como elementos en una matriz.

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// const cities = data.split(",");

cities; //['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle']

//Finalmente, intente encontrar la longitud de su nueva matriz y recuperar algunos elementos de ella:
cities.length;
cities[0]; // the first item in the array
cities[1]; // the second item in the array
cities[cities.length - 1]; // the last item in the array    


//SENTIDO CONTRARIO JOIN() volver matrices en strings
const commaSeparated = cities.join(",");
commaSeparated;


//Otra forma de convertir una matriz en una cadena es usar el toString()método. toString()es posiblemente más simple que join()ya que no toma un parámetro, pero es más limitante. Con join()puede especificar diferentes separadores, mientras que toString()siempre usa una coma. (Intente ejecutar el paso 4 con un carácter diferente a una coma).

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger

// Repasar cada elemento del Array y agregar su numero de indice despues del nombre entre parentesis
for (let i = 0; i < cities.length; i++) { // cities es myArray pero lo cambie por error 
  myArray[i] = myArray[i] + `(${i})`;
}



//ejercicios

// imprimir nombres de productos y precios en una factura, luego sumar los precios e imprimirlos en la parte inferior. En el ejemplo editable a continuación, hay comentarios que contienen números: cada uno de estos marca un lugar donde debe agregar algo al código. Son los siguientes:

// number 1
'Underpants:6.99'
'Socks:5.99'
'T-shirt:14.99'
'Trousers:31.99'
'Shoes:23.99';
const products =['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];
// number 2
for (product of products) {
// number 3
const subArray = product.split(':');
const name = subArray[0];
const price = subArray[1];
const priceF = Number(price);

// number 4
total += priceF;
// number 5
let itemText = `${name} - $${priceF}`; 
const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);

// number 6
}
