// write a JavaScript program to concatenate two strings
// except their first character

const concatenateStrings = (a, b) => {
    const string1 = a.slice(1, a.length);
    const string2 = b.slice(1, b.length);
    const sum = string1 + string2;
    return sum;
};


console.log(concatenateStrings("mario", "Luigi"));