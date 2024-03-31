
// Write a Javascript program to replace every
// character in a given string with the character 
// following it in the alphabet

function replace(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const chart = str[i];
        const index = alphabet.indexOf(chart.toLowerCase());

        if (index !== -1 && index < alphabet.length - 1) {
            const nextChar = alphabet[index + 1];
            result += chart === chart.toUpperCase() ? nextChar.toUpperCase() : nextChar;
        } else if (index === alphabet.length - 1) {
            const nextChar = alphabet[0];
            result += chart === chart.toUpperCase() ? nextChar.toUpperCase() : nextChar;
        } else {
            result += chart;
        }
    }

    return result;
};

console.log(replace("fakbo"));