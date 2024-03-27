//get Reference

const btn = document.querySelector("#btn");


console.log(btn);


btn.addEventListener("click", () => {
    let number1 = document.querySelector(".num1").value;
    let number2 = document.querySelector(".num2").value;
    let result = document.querySelector(".result");
    let operator = document.querySelector("#selectOp").value;


    switch (operator) {
        case "plus":
            result.innerHTML = Number(number1) + Number(number2);
            break;
        case "min":
            result.innerHTML = Number(number1) - Number(number2);
            break;
        case "div":
            result.innerHTML = Number(number1) / Number(number2);
            break;
        case "multi":
            result.innerHTML = Number(number1) * Number(number2);
    }
})