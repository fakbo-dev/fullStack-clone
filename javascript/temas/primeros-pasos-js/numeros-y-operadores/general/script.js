//Metodos numericos utiles

//objeto Number

//toFixed()
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;

//conversion de a tipo de datos numerico Number()
//manera incorrecta

let myNumber = '74';
myNumber += 3; // 743

//manera Correcta
myNumber = Number(myNumber) + 3; // 77

//operadores aritmeticos

//suma
6 + 9 // 15

//Sustraccion
20-15 //5

//multiplicacion
3*7 //21

//division
10 / 5 // 5

//Modulo
8 % 3 // 2

//Exponente
5 ** 2 //devuelve 25 porque es lo mismo que 5 * 5
Math.pow(5, 2) // 25

//Precedencia del Operador

const num1  = 10;
const num2 = 50;

num2 + num1 / 8 + 2; // 53,25 Manera incorreta js evalua primero division, multiplicacion luego suma y sustraccion

(num2 + num1) / (8 + 2); // 6 manera Correcta


//Operadores de Incremento 

//solo se puede incrementar una variable existente 
let Num1 = 4;
Num1++;

let Num2 = 6;
Num2--;
Num2;

//++num1 y --num2. para incrementar una variable y luego devolver el valor 

//Operadores de Asignacion 
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4

//operadores complejos

x += 4; // x = x + 4
x -= 3; // x = x - 3
x *= 3; // x = x * 3
x /= 5; // x = x / 5

// Operadores de Comparacion (Booleanos)

5 === 2 + 4; //Igualdad Estricta
5 !== 2 + 3 // Igualdad No Estricta
10 < 6 // menor que
10 > 6 // mayor que
3 <= 2 // menor igual que
5 >= 4 // mayor igual que 







