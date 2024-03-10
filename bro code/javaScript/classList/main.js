// classList = element property in Javascript used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.

// add()
// remove()
// toggle(Remove if present, add if not)
// replace(oldClass, newClass)
// contains()

const btn = document.getElementById("btn");

//? ADD METHOD

btn.classList.add("enabled");

//* btn.addEventListener("mouseover", event => {
//*    event.target.classList.add("hover");
//* });

//? REMOVE METHOD

//* btn.classList.remove("enabled");

//* btn.addEventListener("mouseout", event => {
//*    event.target.classList.remove("hover");
//* })

//? TOGGLE METHOD

//* btn.addEventListener("mouseover", event => {
//*    event.target.classList.toggle("hover");
//* });

//* btn.addEventListener("mouseout", event => {
//*    event.target.classList.toggle("hover");
//* });

//? REPLACE METHOD & CONTAIN METHOD

btn.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🥵";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
})