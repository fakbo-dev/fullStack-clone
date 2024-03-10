
// Write a Javascript program to replace every
// character in a given string with the character 
// following it in the alphabet


function changeChar(str) {
    const arrayTransform = str.split("");
    const arrayMap = arrayTransform.map(getAlphabet).join("");
    return arrayMap;
}



function getAlphabet(char) {

    return String.fromCharCode(char.charCodeAt(0) + 1)
}


console.log(changeChar("abcd"));