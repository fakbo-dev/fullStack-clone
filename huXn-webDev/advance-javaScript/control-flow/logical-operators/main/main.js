// Logical Operators


//1. AND OPERATOR (&&)
// -> TRUE if both operands/booleans values are true, else evaluates to false

const a = true;
const b = false;
const c = 4;

//2. OR OPERATOR (||)
// -> TRUE if either of the operands/boolean values is true.
// evaluates to false if both are false

//3. -> Logical NOT (!)
// -> True if the operands is false and vice-versa

console.log(!a);
console.log(!(a === b));

const password = "Fakbo-WebDev";

if (password.length >= 8 && password.includes("Web")) {
    console.log("Valid password");
} else {
    console.log("Invalidad Password")
}