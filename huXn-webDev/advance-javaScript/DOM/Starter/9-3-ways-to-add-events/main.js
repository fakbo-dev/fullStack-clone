// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {

}
// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
best.addEventListener("click", () => console.log("This is a great way to provide event in javaScript"));
// ----------- Event (e) Object -----------

const para = document.querySelector(".para");

para.addEventListener("click", (event) => {
    console.log(event);
})

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(input.value);
    return console.log(event);
});
