// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)

const email = "fakbo0206@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@" + 1));

console.log(userName); // fakbo0206
console.log(extension) // gmail.com
