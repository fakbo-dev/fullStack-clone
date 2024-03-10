// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)

const fullName = "Bro Code";

let firstName = fullName.slice(0, 3); // Bro (the last index is exclusive)

let lastName = fullName.slice(4, 8); // Code

let fistChar = fullName.slice(0, 1 ); //B
let lastChar = fullName.slice(-1); // e

// Correct way to slice a name


const fullName2 = "Broseph Code";

const firstName2 = fullName2.slice(0,fullName2.indexOf(" "));
const lastName2 = fullName2.slice(fullName2.indexOf(" ") + 1);

console.log(firstName2) //Broseph
console.log(lastName2) //Code
