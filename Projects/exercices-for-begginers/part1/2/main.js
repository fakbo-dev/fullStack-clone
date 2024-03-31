//Write a javaScript program to get the extension of a filename


const fileName = "ma.in.js";

function checkExtension(str) {
    const fileName = str.slice(0, str.lastIndexOf("."));
    const extension = str.slice(str.lastIndexOf("."));
    const result = `fileName: ${fileName}, extension: ${extension}.`;
    return result;
}

console.log(checkExtension(fileName));