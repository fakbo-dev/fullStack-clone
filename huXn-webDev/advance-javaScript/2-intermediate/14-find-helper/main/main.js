// The find() method is another built-in array helper in JavaScript that allows you to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found.


const people = [
    { name: "HuXn", age: 17 },
    { name: "John", age: 18 },
    { name: "alex", age: 20 },
    { name: "Jimmy", age: 30 },
    { name: "alex", age: 30 },
];

const rest = people.find(person => person.name === "alex");


const posts = [
    { id: 1, content: "Good Post" },
    { id: 2, content: "funny Post" },
    { id: 3, content: "sad Post" },
];

const rest2 = posts.find((element) => element.content.includes("funny"));



console.log(rest2);