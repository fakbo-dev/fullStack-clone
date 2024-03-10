// forEach() = method use to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided

let numbers = [1, 2, 3 ,4 ,5];

numbers.forEach(double);
numbers.forEach(display);


function double(element, index, array) {
    array[index] = element * 2;
}

function triple(element, index, array) {
    array[index] = element * 3;
}

function display(element) {
    console.log(element)
}
// example


let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(upperCase);
fruits.forEach(display2);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function firstLetter(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element,slice(1).toLowerCase();
}

function toLowerCase(element, index, array) {
    array[index] = element.toLowerCase();
}


function display2(element) {
    console.log(element)
}