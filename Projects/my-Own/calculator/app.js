// Take references

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".calculator-display");
const keys = calculator.querySelector(".calculator-buttons");


// we need to listen all the keypresses and determine the type of key is pressed


keys.addEventListener("click", (e) => {

    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;


        if (!action) {
            console.log("Number Key!");

            if (displayedNum === "0") {

                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }
        else if (action === "add" || action === "subtract" || action === "multiply" || action === "divide") {
            console.log("Operator key!");
            key.classList.add("is-depressed");
        }
        else if (action === "decimal") {
            console.log("Decimal key!");
            display.textContent = displayedNum + ".";
        }
        else if (action === "clear") {
            console.log("Clear key!")
            display.textContent = 0;
        }
        else if (action === "equal") {
            console.log("Equal Key!")
        }

        Array.from(key.parentNode.children).forEach(item => item.classList.remove("is-depressed"));
    }
});