// setTimeout() = function in javaScript that allows you to schelude
//                the execution of a function after an amoun of time (milliseconds)
//                times ares approximate (varies based on the workload of the javaScript runtime env.)

//                setTimeout(callback, delay);

function sayHello() {
    window.alert("Hello");
}

const timeoutId = setTimeout(sayHello, 3000);

clearTimeout(timeoutId);

///////


const btn = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
let timeoutId2;

btn.addEventListener("click", startTimer);
btn2.addEventListener("click", clearTimer);

function startTimer() {
    timeoutId2 = setTimeout(() => window.alert("hello"), 3000);
    console.log("Started")
}

function clearTimer() {
    clearTimeout(timeoutId2);
    console.log("CLEARED")
}