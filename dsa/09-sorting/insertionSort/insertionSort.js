
function insertion(arr) {

    for (let i = 1; i < arr.length; i++) {

        let key = arr[i] //currentElement
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    return arr;
}

const myArr = [4, 2, 6, 5, 1, 3];
const result = insertion(myArr);

console.log(result);