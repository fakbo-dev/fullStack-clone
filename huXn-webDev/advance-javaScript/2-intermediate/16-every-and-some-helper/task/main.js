// REFACTOR -> USE EVERY & SOME HELPERS
let products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
];

// let allProductsBooks = true;
// let someProductsBooks = false;

// for (let i = 0; i < products.length; i++) {
//     if (products[i].category != "Books") {
//         allProductsBooks = false;
//     } else {
//         someProductsBooks = true;
//     }
// }
// console.log(allProductsBooks);
// console.log(someProductsBooks);


const everyBooks = products.every((element) => {
    return element.category.includes("Books");
});

const someBooks = products.some(element => element.category.includes("Books"));

console.log(everyBooks);
console.log(someBooks);