// write a JavaScript program to create a new String
// from a given string taking the first 3 characters
// and the last 3 characters of a string and adding
// them together. the string length must be 3 or more,
// if not, the original string is returned

function newString(str) {
    const threeChar = str.slice(0, 3);
    const lastThreeChar = str.slice(-3);
    const sumStr = `${threeChar}${lastThreeChar}`;
    let final;

    if (str.length > 3) {
        final = sumStr;
    }
    else {
        final = str;
    }
    return console.log(final);
}

newString("abc");
newString("abcdef");
newString("abc123abc123");

newString("ab");




