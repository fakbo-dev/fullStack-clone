// Template strings, also known as template literals, are a feature in JavaScript that allows you to create strings with embedded expressions. They are denoted by backticks `` instead of single or double quotes. Template strings provide a more flexible and concise way to construct strings, especially when they involve variables or expressions.


let firstName = "fakbo";
let lastName = "WebDev";

function intro() {
    return "Hello my name is Fakbo WebDev & i'm 20 years old";
}

console.log(
    `Hello my name is ${firstName} ${lastName} & i'm ${19} years old.`
);