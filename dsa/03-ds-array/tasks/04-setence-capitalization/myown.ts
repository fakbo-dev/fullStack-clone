// Problem: Write a function that takes a string as input and capitalizes the first letter of each word in the string. The function should return the modified string.

// Example:

// Input:
// const sentence = "hello world";
// console.log(capitalizeWords(sentence));

// Output:
// Hello World

// Input:
// const sentence = "fakbo webdev";
// console.log(capitalizeWords(sentence));

// Output:
// Fakbo Webdev

// Note:
// The function should handle punctuation marks and special characters correctly.
// The function should not capitalize any words that are part of a list of exceptions (e.g., "a", "an", "the").
// The function should handle edge cases such as empty strings and strings with only one word.
// The function should be case-insensitive when checking for exceptions.






const capitalizeWords = (setence: string): string => {

    const setenceLowerCase = setence.toLowerCase();
    const setenceArr = setenceLowerCase.split(" ");
    const setenceToUpper = setenceArr.map((word: string): string => {

        if (word === "a" || word === "an" || word === "the") {
            return word;
        }
        const changeWord = word.charAt(0).toUpperCase() + word.slice(1);
        return changeWord
    });


    const result = setenceToUpper.join(" ");
    return result;
}


console.log(capitalizeWords("hello my name is fakbo and i am the chosen one"));