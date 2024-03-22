// 1. Iterate over "ages" array
// 2. Print only those ages which is greater then 18

const ages = [3, 10, 18, 20];

function checkAge(age) {
    return age > 18
}

const ageRest = ages.find(checkAge);

console.log(ageRest);



// BONUS => REFACTOR
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// let product;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Books") {
//     product = products[i];
//     break;
//   }
// }
// console.log(product);


const products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
];

const product = products.find(element => element.category.includes("Books"));

console.log(product);