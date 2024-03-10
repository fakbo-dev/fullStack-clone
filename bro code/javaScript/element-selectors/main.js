// element selector = Method used to tarfe and manipulate HTML elements
//                    they allow you to select one or multiple HTML elements
//                    from the DOM (Document Object Model)

//                    1. document.getElementById()        // ElEMENT OR NULL
//                    2. document.getElementsByClassName()  // HTML COLLECTION
//                    3. document.getElementByTagName()   // HTML COLLECTION
//                    4. document.querySelector()         // FIRST ELEMENT OR NULL
//                    5. document.querySelectorALL()      // NODELIST

//! ID
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

//!CLASS NAME
const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "yellow";

//iterate all of the elements

for (const fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
}

//iterate with forEach

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
});

//!TAG NAME

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");


h4Elements[0].style.backgroundColor = "yellow";

// handsome loop 

for (const  h4Element of h4Elements) {
    h4Element.style.backgroundColor ="yellow";
}
for (const liElement of liElements) {
    liElement.style.backgroundColor = "lightgreen";
}

// forEach method

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "red";
})
//!querySelector method the first match is selected

const element = document.querySelector(".fruits");

element.style.backgroundColor = "purple";


//! querySelectorAll nodelist
const fruits2 = document.querySelectorAll(".fruits");
const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "lightblue";
})
fruits2[1].style.backgroundColor = "grey";



