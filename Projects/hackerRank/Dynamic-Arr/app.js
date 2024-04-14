//Declara un arr multi dimensional (arr) de (n) matrices vacias. Todas las matrices estan indexadas a cero

// Declarar un Numbero entero (lastAnswer) e inicialicelo en 0;

// hay 2 tipos de queries, dadas como una matriz de cadenas para que usted las analize:

//queries 1xy

//1. let  idx = ((x ^ lastAnswer) % n).
//2. asignar el valor arr[idx][y % size(arr[idx])] a last answer;
//3. Almacene el nuevo valor de lastAnswer a un arr de respuesta;

// n = el numero de arr vacias para inicializar
// queries de cadenas [q] = cadenas de queries que contienen 3 Numeros enteros separados por espacios;



function dynamicArr(n, queries) {
    let arr = Array(n).fill().map(() => []);
    let lastAnswer = 0;
    let answer = [];
    for (let i = 0; i < queries.length; i++) {
        let [type, x, y] = queries[i];
        let idx = (x ^ lastAnswer) % n;

        if (type === 1) {
            arr[idx].push(y);
        } else {
            lastAnswer = arr[idx][y % arr[idx].length];
            answer.push(lastAnswer);
        }

        return answer;
    }

}



const queries = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1]
];


dynamicArr(2, queries);