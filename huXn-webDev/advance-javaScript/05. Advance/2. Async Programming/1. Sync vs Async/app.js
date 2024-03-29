
//Synchronous Code

function myFunc() {
  return console.log("inside Function");
}

console.log("start");
myFunc();
console.log("End");


//Asynchronous Code

console.log("start")

setTimeout(() => {
  console.log("InsideTimout");
}, 2000);

console.log("End");
