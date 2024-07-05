
// Indicates that the algorithm's execution time grows quadratically with the size of the input data (represented by n);


// Example

// Imagine you have a box of items and wants to compare each item with every other item to find specific pairs. As the number of items (n) increases, the number of comparisons (n^2) grows much faster.


const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const findPairs = (arr: number[]): void => {

    // O(n^2)
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            console.log(`Pair: ${arr[i]}, ${arr[j]}`)
        }
    }


    // O(n)
    for (let q = 0; q < arr.length; q++) {
        console.log(`----------------------- ${q}`)
    }


    // if we combine all the "O" operations it becomes O(n^2)

    // O(n^2) is a Dominant term

    // "n"is a non-Dominant term and we're only left with O(n^2)

    // This way, we simplify our bigO
}




findPairs(numbers);



