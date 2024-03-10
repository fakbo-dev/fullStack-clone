// declaracion if... else
if (condition) {
    /* code to run if condition is true */
  } else {
    /* run some other code instead */
  }

//ejemplo 
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

// else if (si queremos mas de dos condicionales)
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}

//nota sobre operadores  Cualquier valor que no sea false, undefined, , , o una cadena vacía ( ) en realidad regresa cuando se prueba como una declaración condicional, por lo tanto, puede usar un nombre de variable por sí solo para probar si es null, o incluso si existe (es decir, no está indefinido).

shoppingDone = false;
childsAllowance;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

//Nesting if...else (Anidadas)

if (choice === "sunny") {
    if (temperature < 86) {
      para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
    } else if (temperature >= 86) {
      para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
    }
  }

// Logical operators: AND, OR and NOT (&&, ||, ) (sin escribir if... else)
/*&&- Y; le permite encadenar dos o más expresiones para que todas tengan que evaluarse individualmente truepara que se devuelva la expresión completa true.
||- O; le permite encadenar dos o más expresiones para que una o más de ellas tengan que evaluarse individualmente truepara que se devuelva la expresión completa true.*/


//con AND

if (choice === "sunny" && temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (choice === "sunny" && temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }


//con OR
if (iceCreamVanOutside || houseStatus === "on fire") {
    console.log("You should leave the house quickly.");
  } else {
    console.log("Probably should just stay in then.");
  }

  //El último tipo de operador lógico, NOT, expresado por el '!' operador, puede usarse para negar una expresión. Combinémoslo con OR en el ejemplo anterior:
  if (!(iceCreamVanOutside || houseStatus === "on fire")) {
    console.log("Probably should just stay in then.");
  } else {
    console.log("You should leave the house quickly.");
  }

//Puede combinar tantas declaraciones lógicas como desee, en cualquier estructura. El siguiente ejemplo ejecuta el código interno solo si ambas declaraciones OR devuelven verdadero, lo que significa que la declaración AND general devolverá verdadero:

if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
    // run the code
  }

//combinar declaraciones logicas
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
    // run the code
  }

//errores con OR
if (x === 5 || 7 || 10 || 20) {  
    // run my code
  } //incorrecto

  if (x === 5 || x === 7 || x === 10 || x === 20) {
    // run my code
  }
//correcto



////////////////

//cambiar declaraciones (switch)

/*estructura 

switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}

*/

//ejemplo de cambio de declaraciones
 select = document.querySelector("select");
 para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}

//operador ternario

// pseudocodigo
//condition ? run this code : run this code instead
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";


  //ejemplo 
  const selecct = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

selecct.addEventListener("change", () =>
  selecct.value === "black" ?   ("black", "white") : update("white", "black")
);


let days = 31;

if (choice === 'January' || choice === 'March' || choice === 'May' || choice === 'July' || choice === 'August' || choice === 'October' || choice === 'December') {

 days = 31;

} else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November'){
days = 30;
}
else {
days = 28;
}

//mejor logica 

//let days = 31;
if (choice === 'February') {
  days = 28;
} else if (choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
  days = 30;
}

/*switch(choice) {
    case 'black':
      update('black','white');
      break;
    case 'white':
      update('white','black');
      break;
    case 'purple':
      update('purple','white');
      break;
    case 'yellow':
      update('yellow','purple');
      break;
    case 'psychedelic':
      update('lime','purple');
      break;
  }
});*/