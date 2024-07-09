// Palindromes

// if the reverse string is equal to the original one then that word is a palindrome

// cddc === cddc ✅
// abba === abba ✅

// Hello !== olleH ❌

// 1. Convert string to Array
// 2. Reverse the Array
// 3. Convert array back to string
// 4. Compare Strings


// ? My Own
function detectPalindromes(str: string): void {

    const stringArray: string[] = str.split("");
    let stringTransform: string[] = [];
    for (let i = stringArray.length - 1; i >= 0; i--) {
        stringTransform.push(stringArray[i]);
    }
    const result = stringTransform.join("");

    if (result === str) {
        console.log(`Is a palindrome: initial String: "${str}" is equal to result: "${result}"`);
    } else {
        console.log(`Is Not  a palindrome: initial String: "${str}" is not equal to result: "${result}"`);
    }
}

detectPalindromes("hola");
detectPalindromes("cddc");

// ? Better Way

const detectPalindromesTwo = (str: string): void => str.split("").reverse().join("") === str
    ? console.log(`Is a palindrome: initial String: "${str}" is equal to result: "${str.split("").reverse().join("")}"`)
    : console.log(`Is Not  a palindrome: initial String: "${str}" is not equal to result: "${str.split("").reverse().join("")}"`);

detectPalindromesTwo("hola");
detectPalindromesTwo("cddc");