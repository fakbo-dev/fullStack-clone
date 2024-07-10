// Two sum

// Imagine you have a list of numbers and a target number. Your job is to find two numbers in that list that add up the target number. you also need to tell wich positions (or indexes) those two numbers are in the list.

// Example

//  if the list is [2,7,11,15] and the target number is 9, then answer would be [0,1] because 2 (at index 0) plus 7 (at index 1) equals 9.



const test: number[] = [2, 7, 11, 15];
const test2: number[] = [5, 6, 7, 15, 80, 92, 7, 4, 5];
const twoSum = (arr: number[], target: number) => {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; i++) {

            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}

console.log(twoSum(test, 9));
console.log(twoSum(test2, 10));


// ? i need to study more

const twoSumBetter = (arr: number[], target: number) => {
    const map: Record<number, number> = {};
    for (let i = 0; i < arr.length; i++) {

        const complement = target - arr[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[arr[i]] = i;

    }
    return [];
}

console.log(twoSumBetter(test, 9));
console.log(twoSumBetter(test2, 10));
