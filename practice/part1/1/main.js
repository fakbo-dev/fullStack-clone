// Write a JavaScript program to check two
// numbers and return true if one of the numbers
// is 100 or if the sum of the two numbers is 
// 100


function checkTwoNumbers(a, b) {
    let sum = a + b;
    let boolean;

    if (a === 100 || b === 100 || sum === 100) {
        boolean = true;
    }
    else {
        boolean = false;
    }
    return console.log(boolean);
}

checkTwoNumbers(0, 100);