// Take a string a reverse each letter

// example
// Hello = olleH
// Apple = elppA;


// ? My Own

const reverseString = (str: string): string => {

    // 1. transformar el string en un array
    let stringArray = str.toLowerCase().split("");

    let reversedString: string = "";
    // 2. como puedo dar vuelta al string? => iterar a travez de mi array empezando desde el ultimo valor hasta el valor en el primer indice "0" decrementando su iteracion 

    for (let i = stringArray.length - 1; i >= 0; i--) {
        reversedString += stringArray[i];
    }
    //3. Tomar el valor final y volver su primer valor a mayuscula 
    const result = reversedString.charAt(0).toUpperCase() + reversedString.slice(1);
    return result;

}



console.log(reverseString("Hello")); //Expected ouput: "Olleh";
console.log(reverseString("Apple")); //Expected ouput: "Elppa"


// ? Better way



const reverseStringTwo = (str: string): string => str.toLowerCase().split("").reverse().join("");

console.log(reverseStringTwo("fakbo"));
console.log(reverseStringTwo("kol0"));