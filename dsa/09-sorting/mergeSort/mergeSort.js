function merge(left, right) {
    const result = [];

    let i = 0
    let j = 0;

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            result.push(left[i]);
            i++
        } else {
            result.push(right[j]);
            j++;
        }
    }

    result.push(...left.slice(i));
    result.push(...right.slice(j));

    return result;
}


const res = merge([3, 27, 38, 43], [9, 10, 17, 82]);
console.log(res);


// mergeSort for split an array

function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}


const final = mergeSort(res);

console.log(final);