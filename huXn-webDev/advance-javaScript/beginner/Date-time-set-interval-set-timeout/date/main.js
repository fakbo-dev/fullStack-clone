// Year, Month, day, hours, minutes, seconds, milliseconds



const date = new Date();

// Get dates
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

console.log(`Year: ${year}`);
console.log(`month: ${month}`);
console.log(`day: ${day}`);
console.log(`hours: ${hours}`);
console.log(`day: ${minutes}`);
console.log(`seconds: ${seconds}`);
console.log(`milliseconds: ${milliseconds}`);


//Different format

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());



