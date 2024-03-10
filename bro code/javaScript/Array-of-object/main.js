const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "Orange", color: "Orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

console.log(fruits[0].name);
console.log(fruits[1].color);
console.log(fruits[3].calories);

// push method

fruits.push({name: "grapges", color: "purple", calories: 62});

console.log(fruits);

// FOREACH METHOD

fruits.forEach(fruit => console.log(fruit.color));

//MAP mehtod

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColor = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColor);
console.log(fruitCalories);

// FILTER METHOD

const yellowFruit = fruits.filter(fruit => fruit.color === "yellow");

console.log(yellowFruit);

const lowCaloriesFruits = fruits.filter(fruit => fruit.calories < 100);

const highCaloriesFruits = fruits.filter(fruit => fruit.calories > 100);

console.log(lowCaloriesFruits);
console.log(highCaloriesFruits);

// REDUCE METHOD

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(maxFruit.calories);
console.log(minFruit);