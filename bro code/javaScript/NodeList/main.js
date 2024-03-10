// NodeList = Static collection of html elements by (id, class, alement)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            Nodelist won't update to automatically reflect changes


let btns = document.querySelectorAll(".myButtons");




btns.forEach( button => {
    button.style.backgroundColor = "green";
    button.textContent += "😀";
});

//? CLick EventListener

btns.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

//? Mouse over & mouseout eventListener

btns.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(240, 97%, 43%)";
    })
});

btns.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(240, 97%, 53%)";
    })
});

//? ADD AN ELEMENT 

const newBtn = document.createElement("button"); // STEP 1

newBtn.textContent = "button 5"; // STEP 2
newBtn.classList = "myButtons";  // STEP 2

document.body.appendChild(newBtn);

//! Important to add the new button in to the NodeList

btns = document.querySelectorAll(".myButtons"); 

console.log(btns);

//? REMOVE AN ELEMENT

btns.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        btns = document.querySelectorAll(".myButtons");
        console.log(btns)
    })
})




