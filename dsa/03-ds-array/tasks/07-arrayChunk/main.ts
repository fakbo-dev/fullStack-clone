// Array chunk

// Write a function that takes an array and chunk size as input.
// the Function should return a new array where the original array is split into chunks of the specified size

// Chunk([1,2,3,4,5,6,7,8], 3) -> [[1,2,3], [4,5,6], [7,8]];

// chunkArray([1,2,3,4,5],2) -> Ouput: [[1,2], [3,4]];



// ? 1.crear una funcion que tome los dos paremetros un array y el size del chunk
// 2.

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
const test3: number[] = [1, 2, 3, 4, 5];
// console.log(chunkArray(test, 3));
// console.log(chunkArray(test2, 2));


// ?Better way

// 1. create an empty array to hold the chunks
// 2. set a starting index to keep track of where we are in the original array
// 3. loop through the original array as long as the index hasn't reached the end
// 4. extract a chunk of the desired size from the original array
// 5. add the extracted chunk to the "chunked" array
// 6. move the index forward by the chunk size to get the next chunk.
// 7. return the final array of chunks.



const chunkArrayBetter = (arr: number[], chunkSize: number): number[][] => {

    const chunkedArray: number[][] = [];

    let index = 0;

    while (index < arr.length) {
        const chunk = arr.slice(index, index + chunkSize)

        chunkedArray.push(chunk);
        index += chunkSize;
    }
    return chunkedArray;
}



console.log(chunkArrayBetter(test, 3));