// Array chunk

// Write a function that takes an array and chunk size as input.
// the Function should return a new array where the original array is split into chunks of the specified size

// Chunk([1,2,3,4,5,6,7,8], 3) -> [[1,2,3], [4,5,6], [7,8]];

// chunkArray([1,2,3,4,5],2) -> Ouput: [[1,2], [3,4]];



// ? 1.

const chunkArray = (arr: number[], chunkSize: number) => {

    return arr.reduce((resultArray: number[][], currentValue: number, index: number) => {
        const chunkIndex = Math.floor(index / chunkSize);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(currentValue);
        return resultArray;
    }, []);
}



const test: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const test2: number[] = [1, 2, 3, 4, 5];

console.log(chunkArray(test, 3));
console.log(chunkArray(test2, 2));