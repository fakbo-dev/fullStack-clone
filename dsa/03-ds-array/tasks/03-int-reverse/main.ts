// Reverse a int

// 1234 -> 4321
// 5678 -> 8765


// ? My Own
const intReverse = (int: number): number => {

    let initalInt: string = int.toString();
    initalInt.split("");
    let reverseInt: string[] = [];
    for (let i = initalInt.length - 1; i >= 0; i--) {


        reverseInt.push(initalInt[i]);
    }
    const result: number = parseInt(reverseInt.join(""));
    return result * Math.sign(int);
};


console.log(intReverse(1234));
console.log(intReverse(-5678));

//? Better way

const intReverseBetter = (int: number) => parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);

console.log(intReverseBetter(-789));