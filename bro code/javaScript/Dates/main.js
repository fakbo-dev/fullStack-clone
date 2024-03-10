// Date object = Object that contain values that represent dates and times
//               These date objects can be changed or formatted

// ORDER to date constructor Date(year, month, day, hour, minute, second, ms)

const date = new Date(2024, 0, 1, 2, 3,4); // also work with ("2024-01-02T12:00:00Z")

console.log(date);

// for the year

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
