// O(1) aka constant time, signifies that the execution time of an algorithm remains constant regardless of the input size.


// Example

// Image you have a box filled with items, and you know exactly where each item is located. To get a specific item, you go directly to its location, talking the same amount of time irrespective of how many items are in the box


const numbers: number[] = [1, 2, 3, 4, 5];


const getElement = (arr: number[], index: number): number => arr[index];

console.log(getElement(numbers, 2));
