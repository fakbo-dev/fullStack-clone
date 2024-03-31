// Write a JavaScript program to replace the first digit in a
// string (should contains at least digit) with $ character

const replaceFirstLetter = (str) => {
    const first = str.replace(str.charAt(0), "$");
    const final = `${first}`;

    if (str.length === 0) {
        return console.error("Should contains at least digit");
    }
    return final;

};


console.log(replaceFirstLetter("fakbo"));