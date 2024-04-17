const input = document.querySelector("input");
const ul = document.querySelector("ul");
const btn = document.querySelector("button");


btn.addEventListener("click", () => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    const currentValue = input.value;
    input.value = "";

    li.appendChild(span);
    li.appendChild(deleteBtn);

    span.textContent = currentValue;
    deleteBtn.textContent = "Delete";


    ul.appendChild(li);


    deleteBtn.addEventListener("click", () => {
        li.parentNode.removeChild(li);
    });

    input.focus();
})


