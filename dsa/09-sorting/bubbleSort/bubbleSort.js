// Bubble Sort
// Take the first Element and compare with the next value
// compare is the current value is greater or less than the next value
// if the value is less than the current swap is positions
// iif the value is greater than the current keep as the same

function bubbleSort(arr) {

    for (let i = arr.length - 1; i > 0; i--) {

        for (j = 0; j < i; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const myArr = [4, 2, 6, 5, 1, 3];

const result = bubbleSort(myArr);

console.log(result);