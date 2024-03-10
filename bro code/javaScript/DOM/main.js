// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       web browser constructs the dom when it loads an html document,
//       and structures all the elements in a tree like representation.
//       JavaScript can access the dom to dynamically
//       change the content, structure and style of a web page

//select an elemente by id

//Document is an object is contain properties and methods and other nested objects

document.getElementById("");

// if i was to console.log the document well his gonna display the html document

//show the directory

document.title = "My website";
document.body.style.backgroundColor = "hsl(0,0%,15%)"

console.dir(document);

const username = " Fakbo";
const welcomeMsg = document.querySelector(".welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;
