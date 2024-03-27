// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18


const ages = [32, 33, 16, 40];

const adult = ages.filter((age) => age > 18);

console.log(adult);

// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

const wordsFixed = words.filter((str) => str.length >= 6);

console.log(wordsFixed);