// Problem: Reverse Integer

// Given a 32 - bit signed integer, reverse the digits of the integer.If the reversed integer overflows, return 0.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

// Constraints:
// The input integer is within the range[-2 ^ 31, 2 ^ 31 - 1].
// Do not use any built -in functions or libraries to solve this problem.



const reverseInt = (int: number) => {
    const intString = int.toString();
    const [...reversedString] = intString;
    let reverseArr: string[] = [];
    let result: number | string = "";
    for (let i = reversedString.length - 1; i >= 0; i--) {

        reverseArr.push(reversedString[i]);
    }

    for (let i = 0; i < reverseArr.length; i++) {
        result += `${reverseArr[i]}`;
    }

    result = parseInt(result);

    return result * Math.sign(int);
}

console.log(reverseInt(1234));