
const isValidParenthesis = (str) => {

    let stack = [];

    const brakets = {
        "{": "}",
        "[": "]",
        "(": ")",
    }

    for (let char of str) {
        if (brakets[char]) {
            stack.push(char)
        } else {

            const top = stack.pop();

            if (!top || brakets[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParenthesis("()")); // true

console.log(isValidParenthesis(")(")); // false

console.log(isValidParenthesis("({[()]}")); // true

console.log(isValidParenthesis("({[)}")); // false