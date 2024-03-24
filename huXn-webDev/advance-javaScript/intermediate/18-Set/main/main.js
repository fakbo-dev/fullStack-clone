// -------------------------------------------------
// Set is a built-in data structure introduced in (ES6) that represents a collection of unique values. Unlike arrays, Set allows you to store only unique values, which means duplicate values are automatically removed. Each value can occur only once within a Set.

// Set objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific value.



const initialValues = [1, 2, 3];
const newSet = new Set(initialValues);

newSet.add("apple");
newSet.add("Banana");
newSet.add("Orange");
newSet.add("apple");

console.log(newSet.has("Banana"));
console.log(newSet.delete("Orange"));
// console.log(newSet.clear());

console.log(newSet);


// iterate over the values

for (let item of newSet) {
    console.log(item);
}

