//creando un string 
const string = 'The revolution  will  not be televised';
console.log(string);

//comillas simples o comilas dobles (por preferencia)
const sgl = 'Single quotes.';
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);

//escapar caracteres
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

//concatenating strings (template literal[`].)
const names = "Chris";
const greeting = `Hello, ${names}`;
console.log(greeting); // "Hello, Chris"


//concatenacion en contexto
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);


//toString()
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

//incluir expresiones en cadenas
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

//cadenas multilineas
const outpu2t = `I like the song.
I gave it a score of 90%.`;
console.log(output2);

/*
I like the song.
I gave it a score of 90%.
*/

//en cadenas normales

const output3 = "I like the song.\nI gave it a score of 90%.";
console.log(output3);

/*
I like the song.
I gave it a score of 90%.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//METODOS UTILES DE CADENAS

//Encontrar Longitud de una cadena
const browserType = "mozilla";
browserType.length;


//Recuperar un carácter de cadena específico
browserType[0];
//recuperar ultimo caracter
browserType[browserType.length - 1];


//Probar si una cadena contiene una subcadena includes()
browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

//startsWith()
browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

//endsWith
browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

//Encontrar la posición de una subcadena en una cadena
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20

//para encontrar ocurrencias posteriores
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

//Extraer una cadena de una subcadena slice()
 browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"

browserType.slice(2); // "zilla"

//Cambio de Case
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

//actualizar partes de una cadena
 browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
//para guardar la nueva cadena
 let browserType2 = "mozilla";
browserType2 = browserType2.replace("moz", "van");

console.log(browserType); // "vanilla"

// remplazar todas las apariciones
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"






