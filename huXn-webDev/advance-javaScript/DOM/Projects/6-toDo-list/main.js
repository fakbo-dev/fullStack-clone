//get Reference 

const form = document.querySelector("form");
const input = document.querySelector("input");
const todos = document.querySelector(".todos");


function getTodo(value) {
    //Creating new Elements

    const todo = document.createElement("div");
    const textEl = document.createElement("span");

    //Setting values & styles
    textEl.innerHTML = value;


    //Append our element to the DOM
    todo.appendChild(textEl);

    const closeEl = document.createElement("span");
    closeEl.innerHTML = "&times;";
    closeEl.classList.add("delete");

    //Attech Events

    closeEl.addEventListener("click", (e) => {
        todos.removeChild(todo);
    })

    todo.appendChild(closeEl);
    todo.classList.add("todo");

    return todo;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value;

    if (!(value.trim())) {
        return;
    }
    todos.appendChild(getTodo(value));
    input.value = "";
})