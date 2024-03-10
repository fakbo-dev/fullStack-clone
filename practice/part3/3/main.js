// Write a JavaScript program to check whether a given array
// of integers is sorted in ascending order


const valuesSorted = (arr) =>  {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] < arr[i]) {
            return false;
        }
        return true;
    }
}

console.log(valuesSorted([9,8,7,6,5,4,3,2,1]));
console.log(valuesSorted([1,2,3,4,5,6,7,8,9]));

