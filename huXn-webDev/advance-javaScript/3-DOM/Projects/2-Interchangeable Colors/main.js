// get references to the DOM

const body = document.querySelector("body");
const btns = document.querySelectorAll(".btn");


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        color = btn.value;
        return changeBackground(color);
    });
});


function changeBackground(color) {
    body.className = "";

    switch (color) {
        case "purple":
            body.classList.add("purple");
            break;
        case "blue":
            body.classList.add("blue");
            break;
        case "red":
            body.classList.add("red");
            break;
        case "green":
            body.classList.add("green");
            break;
        case "yellow":
            body.classList.add("yellow");
            break;
        case "teal":
            body.classList.add("teal");
            break;
        case "default":
            body.classList.add("default");
        default:
            break;
    }
}
