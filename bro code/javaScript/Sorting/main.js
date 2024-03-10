// sort() = method used to sort elements of an array in place.
//          Sort elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings


let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();

console.log(fruits);

let numbers = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];

numbers.sort((a, b) => a - b);

// for reverse

numbers.sort((a,b) => b -a);


//  for objects

const people = [{name: "Spogebob", age:30, gpa: 3.0}, 
                {name: "Patrick", age:34, gpa: 1.5}, 
                {name: "Squidware", age:51, gpa: 2.5}, 
                {name: "Sandy", age:27, gpa: 4.0}];

people.sort((a,b) => a.age - b.age);

console.log(people);

// for aphabetic order

people.sort((a,b) => a.name.localeCompare(b.name));