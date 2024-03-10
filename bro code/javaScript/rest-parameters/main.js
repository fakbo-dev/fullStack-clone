// rest parameters = (...rest) allow a function work with a variable
//                   number of argument by building them into an array

//                   spread = expands an array into separate elements
//                   rest = bundles separate elements into an array

//example

function openFridge(...foods) {
    console.log(...foods);
}

function getFood(...foods) {
    return foods
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);


//another example

function sum(...numbers) {

    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total}`)

function getAverage(...numbers) {

    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const total2 = getAverage(74, 100, 85, 90, 50);

console.log(total2); // 80

// another example
function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineString("Mr", "Spongebob", "Squarepants", "III");

console.log(fullName) // MR SPongebob Squarepants III