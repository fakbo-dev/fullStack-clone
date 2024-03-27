// Iterate over object & log the property and the value of that object using for in loop.


const object = { a: 1, b: 2, c: 3 };

for (values in object) {
    console.log(`${values}: ${object[values]}`);
}


// Exercise 2
// You are given an object representing a student's test scores. Each property of the object represents the subject name (e.g., "Math", "Science") and the value represents the score. Your task is to use the "for...in" loop to calculate and print the average score of the student.

// Write a function called calculateAverageScore that takes an object representing test scores as an argument and returns the average score of the student.

const testScores = {
    Math: 90,
    Science: 85,
    History: 78,
    English: 92,
    Geography: 88,
};

function calculateAverageScore(scores) {
    let total = 0;
    let numbers = 0;

    for (let subject in scores) {
        total += scores[subject];
        numbers++;
    }
    return total / numbers;
}

const averageScore = calculateAverageScore(testScores);

console.log(averageScore);