// Array chunk

// Write a function that takes an array and chunk size as input.
// the Function should return a new array where the original array is split into chunks of the specified size

// Chunk([1,2,3,4,5,6,7,8], 3) -> [[1,2,3], [4,5,6], [7,8]];

// chunkArray([1,2,3,4,5],2) -> Ouput: [[1,2], [3,4]];


const arrayChunk = (arr: number[], chunkSize: number) => {
    let newArr: number[][] = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        if (chunk.length === chunkSize) {
            newArr.push(chunk);
        } else {
            break;
        }
    }

    return newArr;
}

const test1 = [1, 2, 3, 4, 5, 6, 7, 8];
const test2 = [1, 2, 3, 4, 5];
console.log(arrayChunk(test1, 3));
console.log(arrayChunk(test2, 2));

arrayChunk(test1, 3);