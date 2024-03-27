// The ternary operator in JavaScript is a concise way of writing conditional expressions. It is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false.

// condition ? exprIfTrue : exprIfFalse;

// ------------------------------------


const pwd = 8;

function pwdChecker(ps) {
    if (ps === 8) {
        return "Strong Password";
    } else {
        return "Password should be 8 characters";
    }
}

const rest = pwdChecker(pwd);
console.log(rest);


//reestructuring


function pwdCheckerTrue(ps) {
    return ps === 8 ? "Strong Password" : "Password should be 8 characters";
}

console.log(pwdCheckerTrue(2));


const age = 25;

const isAdult = age >= 18 ? "adult" : "Not an Adult";


console.log(isAdult);