// Problem:

// Write a function called `isPalindrome` that takes a string as input and returns a boolean indicating whether the input string is a palindrome.

// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// Example:

// Input:
// ```javascript
// isPalindrome("racecar");
// ```

// Output:
// ```javascript
// true
// ```

// Constraints:

// - The input string will only contain lowercase and uppercase letters, numbers, and special characters.
// - The function should not use any built-in string manipulation methods (e.g., `reverse()`, `split()`, `join()`).
// - The function should have a time complexity of O(n), where n is the length of the input string.
// - The function should have a space complexity of O(1), meaning it should not use any additional data structures.

// Additional Instructions:

// - You can solve this problem using either an iterative or recursive approach.
// - If you choose an iterative approach, you can use a loop to compare characters from the beginning and end of the string.
// - If you choose a recursive approach, you can define a helper function that takes two pointers, one at the beginning and one at the end of the string, and recursively calls itself to compare characters.
// - You can also consider using a two-pointer approach, where you initialize two pointers at the beginning and end of the string and move them towards the center, comparing characters along the way.
// - Feel free to use any additional helper functions or variables you need to solve the problem.




const isPalindrome = (value: string) => {

    value.toLowerCase();
    const [...reverseValue] = value;
    let newReverseString: string[] = [];
    let result: string = "";
    for (let i = reverseValue.length - 1; i >= 0; i--) {

        newReverseString.push(reverseValue[i]);
    }

    for (let i = 0; i < newReverseString.length; i++) {

        result += `${newReverseString[i]}`
    }

    if (result === value) {
        return true
    } else {
        return false;
    }
}
console.log(isPalindrome("racecar"));


// ? Better way

const isPalindromeBetter = (value: string) => {
    const lowercaseValue = value.toLowerCase();
    let start = 0;
    let end = lowercaseValue.length - 1;

    while (start < end) {
        if (lowercaseValue[start] !== lowercaseValue[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(isPalindromeBetter("racecar"));