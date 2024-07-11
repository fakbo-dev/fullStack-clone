// Problem:

// Write a function called `reverseString` that takes a string as input and returns the reverse of that string.

// Example:

// Input:
// ```javascript
// reverseString("hello");
// ```

// Output:
// ```javascript
// "olleh"
// ```

// Constraints:

// - The input string will only contain lowercase and uppercase letters, numbers, and special characters.
// - The function should not use any built-in string manipulation methods (e.g., `reverse()`, `split()`, `join()`).
// - The function should have a time complexity of O(n), where n is the length of the input string.
// - The function should have a space complexity of O(1), meaning it should not use any additional data structures.

// Additional Instructions:

// - You can solve this problem using either an iterative or recursive approach.
// - If you choose an iterative approach, you can use a loop to iterate through the characters of the string and build the reversed string character by character.
// - If you choose a recursive approach, you can define a helper function that takes the current index as a parameter and recursively calls itself to build the reversed string.
// - You can also consider using a two-pointer approach, where you initialize two pointers at the beginning and end of the string and swap the characters at the pointers until they meet in the middle.
// - Feel free to use any additional helper functions or variables you need to solve the problem.


const reverseString = (str: string) => {
    let finalString: string[] = [];
    // Split the string in to an array
    const [...strChart] = str;
    let result: string = "";
    // iterate over the array  from the last one to the beggining

    for (let i = strChart.length - 1; i >= 0; i--) {

        finalString.push(strChart[i]);
    }

    for (let i = 0; i < finalString.length; i++) {

        result += `${finalString[i]}`;
    }

    return result;
}

console.log(reverseString("hello"));