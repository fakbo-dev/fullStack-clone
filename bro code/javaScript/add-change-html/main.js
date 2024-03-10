// Example 1 <h1>

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like Pizza";
newH1.id = "myH1";
newH1.style.textAlign = "center";
newH1.style.color = "tomato";

// STEP 3 APPEND ELEMENT TO DOM
//! when you append an element this new element is the last child if you will like to be the first element use prepend
//* document.body.prepend(newH1);
//* document.body.append(newH1);

// ? append to an box

//* document.getElementById("box1").append(newH1);

// ? insertBefore method
const box2 = document.getElementById("box2");
//* document.body.insertBefore(newH1, box2);

// ? add html with class

const boxes = document.querySelectorAll(".box");
//* document.body.insertBefore(newH1, boxes[1])


// REMOVE HTML ELEMENT

document.body.append(newH1);

document.body.removeChild(newH1);
//? remove elements in his parent
document.getElementById("box1").append(newH1);
document.getElementById("box1").removeChild(newH1)

