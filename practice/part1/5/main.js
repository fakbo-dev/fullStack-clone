// Write a javaScript program to create a new 
// string adding "New!" in front of a given string.
// If the given string begins with "New!" already
// then return the original string

function newString(str) {
    let current;
    if (str.startsWith("New!")) {
        current = str;
    }
    else {
        current = `New! ${str}`;
    }
    return console.log(current);
}

newString("fakbo");

