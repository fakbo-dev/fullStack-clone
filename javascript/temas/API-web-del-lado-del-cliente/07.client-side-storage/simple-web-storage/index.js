const rembemberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");

const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");

//A continuación, debemos incluir un pequeño detector de eventos para evitar que el formulario se envíe solo cuando se presiona el botón de enviar, ya que este no es el comportamiento que queremos. Agregue este fragmento debajo de su código anterior:

form.addEventListener("submit", (e) => e.preventDefault());

//Ahora necesitamos agregar un detector de eventos, cuya función de controlador se ejecutará cuando se haga clic en el botón "Saludar". Los comentarios explican en detalle lo que hace cada bit, pero en esencia aquí tomamos el nombre que el usuario ingresó en el cuadro de entrada de texto y lo guardamos en el almacenamiento web usando setItem(), luego ejecutamos una función llamada nameDisplayCheck()que se encargará de actualizar el texto real del sitio web. Agregue esto al final de su código:

//run function when the "say hello" button is clicked

submitBtn.addEventListener("click", () => {
    //store the entered name in web storage
    localStorage.setItem("name", nameInput.value);
    // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
    nameDisplayCheck();

});

//En este punto, también necesitamos un controlador de eventos para ejecutar una función cuando se hace clic en el botón "Olvidar"; esto solo se muestra después de hacer clic en el botón "Saludar" (los dos estados del formulario alternan hacia adelante y hacia atrás). En esta función eliminamos el nameelemento del almacenamiento web usando removeItem()y luego lo ejecutamos nuevamente nameDisplayCheck()para actualizar la pantalla. Añade esto al final:

// run function when the "forget" button is clicked

forgetBtn.addEventListener("click", () => {
    //Remove the stored name from web storage
    localStorage.removeItem("name");

    //run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
    nameDisplayCheck();
});

//Ahora es el momento de definir la nameDisplayCheck()función en sí. Aquí verificamos si el elemento de nombre se ha almacenado en el almacenamiento web utilizándolo localStorage.getItem('name')como prueba condicional. Si el nombre se ha almacenado, esta llamada se evaluará como true; de lo contrario, la llamada se evaluará como false. Si la llamada se evalúa como true, mostramos un saludo personalizado, mostramos la parte "olvidar" del formulario y ocultamos la parte "Saludar" del formulario. Si la llamada se evalúa como false, mostramos un saludo genérico y hacemos lo contrario. Nuevamente, coloque el siguiente código en la parte inferior:

function nameDisplayCheck() {

    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
        h1.textContent = `Welcome, ${name}`;
        personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while ou are there`;
        forgetDiv.style.display = "block";
        rembemberDiv.style.display = "none";
    } else {
        h1.textContent = "Welcome to our website";
        personalGreeting.textContent = "Welcome to our website. We hope you have fun while you are here.";
        forgetDiv.style.display = "none";
        rembemberDiv.style.display = "block";
    }
}

nameDisplayCheck();