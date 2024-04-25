//para construir una calculadora se divide en dos partes la pantalla y las teclas

// la calculadora puede hacer solo 5 cosas:

//1. pulsar operadores (+, -, x, /)
//2. pulsar numeros (0-9)
//3. pulsar una coma (.)
//4. pulsar  para borrar los valores (C)
//5. retornar el valor  (=)

// los primeros pasos para hacer funcionar una calculadora es poder
// 1. listen todas las teclas en la calculadora
// 2. retornar el valor que se muestra en la tecla

//Take references

const calculator = document.querySelector(".calculator");
const calcDisplay = document.querySelector(".calculatorDisplay");
const calcKeys = calculator.querySelector(".calculatorButtons");


//add Event Listener para recuperar cada pulsasion de teclas

calcKeys.addEventListener("click", (event) => {

    //Asegurarse si los elementos presionados son botones

    if (event.target.matches("button")) {
        //tomar referencias

        const key = event.target; // boton actual presionado
        const action = key.dataset.action; // recuperar dataset del boton presionado
        const keyContext = key.textContent; // recuperar el contenido del boton actual
        const displayContext = calcDisplay.textContent; // recuperar el contenido del display actual
        const previousKeyType = calculator.dataset.previousKeyType; //agregar un dataset para verificar si la tecla anterior es un operador


        //! INDETIFICAR CADA KEY 

        //? si el key no tiene action es porque es un numero 

        if (!action) {

            // si display es igual a 0 queremos reemplazar la pantalla de la calculadora con el contenido de la key actual, y si no es asi agregamos el valor de key al numero existente

            if (displayContext === "0" || previousKeyType === "operator") {
                calcDisplay.textContent = keyContext;
            } else {
                calcDisplay.textContent = displayContext + keyContext;
            }

            //cuando un usuario presiona una tecla numerica luego de un operador debemos remover el estado pressed de todas las keys 

            Array.from(key.parentNode.children).forEach(item => item.classList.remove("pressed"));
        }


        //? si la key tiene data-action y coincide con la condicion es un operador

        if (action === "add" || action === "subtract" || action === "multiply" || action === "divide") {

            // si esta pulsado un operador debemos destacar la el operador actual para saber que operacion se esta haciendo


            key.classList.add("pressed");

            calculator.dataset.previousKeyType = "operator";
        }

        //? si la key tiene data action y coincide con los vaores especiales

        if (action === "decimal") {
            //al pulsar la key decimal debe agregarse al displaycontext despues del numero en el que estaba

            calcDisplay.textContent = `${displayContext}.`;

        }

        if (action === "clear") {
            console.log("Clear key!");
        }

        if (action === "equal") {
            const secondValue = displayContext;
        }



    }
})


