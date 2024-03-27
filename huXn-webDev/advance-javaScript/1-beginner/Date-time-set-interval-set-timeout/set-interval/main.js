// -------------------------------
// setInterval:
// -> The setInterval function is used to repeatedly execute a function or a block of code at a specified interval. It takes two arguments: the function or code to be executed and the time interval (in milliseconds) between each execution.


// ?setInterval(() => console.log(`This function will be executed every 2 second.`), 2000);

// -------------------------------
// setTimeout:
// -> The setTimeout function is used to execute a function or a block of code after a specified delay. It takes two arguments: the function or code to be executed and the time delay (in milliseconds) before the execution.


// ?setTimeout(function () {
//     ?return console.log(`This function will be executed after 3 seconds.`)
//? }, 3000);


const intervalId = setInterval(function () {
    console.log(`This function is being executed at the interval`);
}, 1000);


setTimeout(function () {
    clearInterval(intervalId);
    console.log(`Interval Stopped`);
}, 10000);
