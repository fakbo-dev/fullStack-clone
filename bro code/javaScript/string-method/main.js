// string method = allow you to manipulate and work with text (string)


let userName = "BroCode";

//.chartAt method take the first letter of a string


console.log(userName.charAt(0)); // B

// .indexOf method return the index of the first occurence of the character

console.log(userName.indexOf("o")); // 2

// for the last occurence of the character use lastIndexOf

console.log(userName.lastIndexOf("o")); // 4

// .length  method to get the length of a string

console.log(userName.length); // 7

//.trim is for adjust the string content for delete any white space

const whiteSpace = "      fakbo           ";
const fixed = whiteSpace.trim();

console.log(fixed); // "fakbo"

// toUpperCase() method take any letter and transform to upper case 

console.log(userName.toUpperCase()); // BROCODE

// toLowerCase() method is the same of the previous but just to make it lower

console.log(userName.toLowerCase()); // brocode

//.repeat method repeat the string many times you want;

console.log(userName.repeat(3)) // BroCodeBroCodeBroCode

// to determinate if a string start with the giving character we can use the startsWith method this return a boolean value

let result = userName.startsWith(" "); //space

console.log(result) // false

//this method is useful with an if statement

if(result) {
console.log("Your username can't begin with ' '")
} else {
    console.log(userName)
}

// .endWith() method is the same of the previous but determinate if a string end with the giving character, he also  return a boolean value

result = userName.endsWith(" ");
console.log(result) // false

//.includes method use a boolean method as well 

result = userName.includes(" ");

if(result) {
    console.log("Your username can't include ' '")
    } else {
        console.log(userName)
    }

//? replaceAll method
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(phoneNumber) // 123/456/7890

//padStart method 

phoneNumber = phoneNumber.padStart(15, '0');

console.log(phoneNumber) // 00000123/456/7890

//padEnd method

phoneNumber = phoneNumber.padEnd(15, '0');

console.log(phoneNumber) // 123/456/789000000


