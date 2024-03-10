// .map() =  accepts a callback and applies that function
//           to each element of an array, then return a new array

const numbers = [1, 2, 3, 4, 5];

const numberSquare = numbers.map(square);
const cubes = numbers.map(cube);

console.log(numbers);
console.log(numberSquare);

function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3)
}

// example
const students = ["Spongebob", "Pactrick", "Squidward", "Sandy"];
const studentsUpper = students.map(toUpperCase);
const studentsLower = students.map(toLowerCase);

console.log(studentsUpper);


function toUpperCase(element) {
    return element.toUpperCase();
}

function toLowerCase(element) {
    return element.toLowerCase();
}
// another examples

const dates = ["2024-1-10", "2025-2-20", "2027-3-30"];
const fomratteDates = dates.map(formatDates);
console.log(fomratteDates)

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
