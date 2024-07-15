

const reverseStringStack = (str) => {
    const toLower = str.toLowerCase();
    let stack = [];
    let reverseString = "";
    for (let char of toLower) {
        stack.push(char);
    }

    while (stack.length > 0) {

        reverseString += stack.pop();
    }

    return reverseString;
}



const reverseString = reverseStringStack("Hello World");
console.log(reverseString) // Ouput: dlrow olleh