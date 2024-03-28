// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// Frist element child

const element = document.querySelector(".fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";


const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "blue";

})

// lastElementChild

const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "green";

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "orange";
})

//next ElementSibling
const sibling = document.getElementById("apple");
const nextSibling = sibling.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

//previousElementSibling

const previusE = document.getElementById("onion");
const previusS = previusE.previousElementSibling;
previusS.style.backgroundColor = "violet";

//parent element (container)

const element2 = document.getElementById("apple");
const parent = element2.parentElement;
parent.style.backgroundColor = "yellow";

//children

const children2 = element.children;

console.log(children2); //html collection don't have forEach method we need to convert in to an array and then use the forEach method

Array.from(children2).forEach(child => {
    child.style.backgroundColor = "lightgreen";
})

//access by index number

children2[1].style.backgroundColor = "lightblue";