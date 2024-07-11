// Two sum

// Imagine you have a list of numbers and a target number. Your job is to find two numbers in that list that add up the target number. you also need to tell wich positions (or indexes) those two numbers are in the list.

// Example

//  if the list is [2,7,11,15] and the target number is 9, then answer would be [0,1] because 2 (at index 0) plus 7 (at index 1) equals 9.




const twoSum = (arr: number[], target: number) => {

    // O(n^2)

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === target) {
                return [i, j];
            } else {
                return null;
            }
        }
    }
}


const test = [2, 7, 11, 15];

console.log(twoSum(test, 9));