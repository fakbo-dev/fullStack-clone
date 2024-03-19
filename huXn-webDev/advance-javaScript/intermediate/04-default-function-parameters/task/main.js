// ---------------------------
// 1. Create a function name (append) it will take 2 parameters (value, array)
// 2. The default value of parameter "array" will be [].



function append(value, array = []) {
    array.push(value);
    return console.log(array);
}

append(3);

// ----------------------------
// 1. Create function name (multiply) with 2 parameters (a, b) which will multiply the parameters value
// 2. Provide 1 as the default value to parameter "b"


function multiply(a, b = 1) {
    return console.log(a * b);
}

multiply(5);