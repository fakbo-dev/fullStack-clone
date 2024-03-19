// 1. Store this in template string ~
// The quick
// brown fox
// jumps over
// the lazy dog

// 2. Create two variables (firstName, lastName)
// 3. Use that variables in template string.


const templateText = `
    The quick
    brown fox 
    jumps over
    the lazy dog
`;


const firstName = "Fakbo";
const lastName = "WebDev";

const greetings = `Hello my name is ${firstName} ${lastName}`;

console.log(templateText);

console.log(greetings);