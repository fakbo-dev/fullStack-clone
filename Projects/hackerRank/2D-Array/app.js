// dada una arr 6x6 multi dimensional

// un reloj de arena en A es un subconjunto de valores con indices que caen en este patron en arr:

// a b c
//   d
// e f g


// hay 16 Relojes de arena en Arr Una suma de reloj de arena es la suma de los valores de un reloj de arena. Calcula la suma del reloj de arena para cada reloj de arena en arr. Luego imprima la suma maxima del reloj de arena. la matriz siempre sera 6x6 

function hourglassSum(arr) {
    let top = 6;
    let bottom = 6;
    let count = -100;

    for (let i = 0; i < top - 2; i++) {
        for (let j = 0; j < bottom - 2; j++) {
            let sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2]) +
                (arr[i + 1][j + 1]) +
                (arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);

            if (sum > count) {
                count = sum;
            }
        }
    }
    return console.log(count);
}



// la matriz siempre sera 6x6
//Primero necesito recorrer el arr multi dimensional y sumar cada elemento
// Luego debo tomar el valor maximo de la suma e imprimirlo 



const test = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

hourglassSum(test);