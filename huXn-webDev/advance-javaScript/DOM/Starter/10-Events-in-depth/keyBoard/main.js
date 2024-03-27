// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

input.addEventListener("keypress", () => console.log("keyUp"));

//USEFUL PROPERTIES AND METHODS

input.addEventListener("keypress", (e) => console.log(e.charCode));
input.addEventListener("keydown", (e) => console.log(e.code));
input.addEventListener("keyup", (e) => console.log(e.ctrlKey));
input.addEventListener("keypress", (e) => console.log(e.key));
input.addEventListener("keypress", (e) => console.log(e.shiftKey));