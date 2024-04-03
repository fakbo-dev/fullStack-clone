//calcular valor min y max de un arr en una sola linea separados por espacio
//min = sumar 4 numeros
//max = sumar los 4 numeros luego del primero;
// imprimir valores en una misma linea y separados por un espacio


function minMax(arr) {
    let result = 0;
    let min = arr[0];
    let max = arr[0];
    let store = 0;
    // iterate through the array
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        } else if (max < arr[i]) {
            max = arr[i];
        }
        store += arr[i];

        const sumMax = store - max;
        const minMax = store - min;
        result = `${sumMax} ${minMax}`;
    }
    console.log(result);
}

const test = [7, 69, 2, 221, 8974];

minMax(test);

//expected ouput 299 9271