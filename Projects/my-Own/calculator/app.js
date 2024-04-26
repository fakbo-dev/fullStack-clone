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
const calcDisplay = calculator.querySelector(".calculatorDisplay");
const calcKeys = calculator.querySelector(".calculatorButtons");


//functions

const calculate = (n1, operator, n2) => {
    let result = "";

    switch (operator) {
        case "add":
            result = parseFloat(n1) + parseFloat(n2);
            break;
        case "subtract":
            result = parseFloat(n1) - parseFloat(n2);
            break;
        case "multiply":
            result = parseFloat(n1) * parseFloat(n2);
            break;
        case "divide":
            result = parseFloat(n1) / parseFloat(n2);
            break;
        default:
            result = "";
    }


    return result;
}


//add Event Listener para recuperar cada pulsasion de teclas
calcKeys.addEventListener("click", (event) => {

    //Asegurarse si los elementos presionados son botones

    if (event.target.matches("button")) {
        //tomar referencias

        const key = event.target; // boton actual presionado
        const action = key.dataset.action; // recuperar dataset del boton presionado
        const keyContext = key.textContent; // recuperar el contenido del boton actual
        const displayContext = calcDisplay.textContent; // recuperar el contenido del display actual
        const previousKeyType = calculator.dataset.previousKeyType;
        //agregar un dataset para verificar si la tecla anterior es un operador


        //! INDETIFICAR CADA KEY 

        //? si el key no tiene action es porque es un numero 

        if (!action) {

            // si display es igual a 0 queremos reemplazar la pantalla de la calculadora con el contenido de la key actual, y si no es asi agregamos el valor de key al numero existente

            if (displayContext === "0" || previousKeyType === "operator") {
                calcDisplay.textContent = keyContext;
            } else {
                calcDisplay.textContent = displayContext + keyContext;
            }
            calculator.dataset.previousKeyType = 'number';


            //cuando un usuario presiona una tecla numerica luego de un operador debemos remover el estado pressed de todas las keys 

        }


        //? si la key tiene data-action y coincide con la condicion es un operador

        if (action === "add" || action === "subtract" || action === "multiply" || action === "divide") {

            // si esta pulsado un operador debemos destacar la el operador actual para saber que operacion se esta haciendo


            key.classList.add("pressed");
            calculator.dataset.previousKeyType = 'operator';

            calculator.dataset.firstValue = displayContext;
            calculator.dataset.operator = action;
        }

        //? si la key tiene data action y coincide con los vaores especiales

        if (action === "decimal") {
            //al pulsar la key decimal debe agregarse al displaycontext despues del numero en el que estaba
            if (!displayContext.includes(".")) {
                calcDisplay.textContent = displayContext + ".";
            } else if (previousKeyType === "operator") {
                calcDisplay.textContent = "0.";
            }
            calculator.dataset.previousKeyType = "decimal";

        }

        if (action === "clear") {
            calcDisplay.textContent = "0";
            calculator.dataset.previousKeyType = "clear";
        }

        if (action === "equal") {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayContext;

            calcDisplay.textContent = calculate(firstValue, operator, secondValue);
            calculator.dataset.previousKeyType = "equal";
        }
        Array.from(calcKeys.parentNode.children)
            .forEach(item => item.classList.remove("pressed"));

    }
})



