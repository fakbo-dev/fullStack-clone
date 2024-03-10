// method Chaining = calling one method after another
//                   in one continous line of code

const userName = window.prompt("Enter your username");

const userNameFix = userName.valueOf(userName).trim().charAt(0).toUpperCase() + userName.valueOf(userName).trim().slice(1).toLowerCase();

console.log(userNameFix);


