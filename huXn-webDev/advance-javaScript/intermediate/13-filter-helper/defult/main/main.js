// The filter() method is a built-in array method in JavaScript that allows you to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements from an array based on a specified criteria.


const songs = [
    { name: "Lucky You", duration: 4.34 },
    { name: "Just Like You", duration: 3.23 },
    { name: "The Search", duration: 2.33 },
    { name: "Old Town Road", duration: 1.43 },
    { name: "The Box", duration: 5.23 },
];

console.log(songs.filter((song => song.duration > 3)));

const computer = [
    { ram: 4, hdd: 100 },
    { ram: 8, hdd: 200 },
    { ram: 16, hdd: 300 },
    { ram: 32, hdd: 400 },
];


const computerFilter = computer.filter((element) => {
    return element.ram > 6;
});

console.log(computerFilter);