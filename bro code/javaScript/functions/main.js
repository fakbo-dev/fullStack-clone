//  function = A section of a reusable code.
//             Declare code one, use it whenever you want
//             Call the function to execute that code.

function happyBirthday(username, age) {
    console.log(`Happy birthday to you!!`);
    console.log(`Happy birthday to you!!`);
    console.log(`Happy birthday dear ${username}!!`);
    console.log(`Happy birthday to you!!`);
    console.log(`You are ${age} years old`);
}

happyBirthday("fakbo", 20);

//return keyboard

function add(x, y) {
    let result = x + y;
    return result;
}
let answer = add(2,3);
console.log(answer);// 5

// OR

console.log(add(2,3)) // 5

function subTrack(x, y) {
    return (x - y);
}

console.log(subTrack(30, 20));

// function to determinate is a number is even or odd

function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
//OR

//return number % 2 === 0 ? true : false
}

//function is a email is valid 

function isValidEmail(email) {
    
    if(email.includes("@")){
        return true;
    }
    else {
        return false;
    }
}
console.log(isValidEmail("fakbo0206@gmail.com"));
