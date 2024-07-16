
const twoSum = (nums, target) => {


    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in numMap && numMap[complement] !== i) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }

    return [];
};


const num = [2, 7666666666, 11, 15, 0, 99999999, 3200, 7];

const target = 9;

const result = twoSum(num, target);

console.log(result); // [0,1];