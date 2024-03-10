const newListItem = document.createElement("li");
const orange = document.getElementById("orange");
const fruits = document.getElementById("fruits");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").insertBefore(newListItem, orange); 

//? use without ID

const listItem = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItem[0]);
