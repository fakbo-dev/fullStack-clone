// Fizzbuzz

// 1. print numbers from 1 to n
// 2. if numbers is divisible by 3, print "Fizz"
// 3. if numbers is divisible by 5, print "Buzz"
// 4. if numbers is divisible by 3 and 5, print "fizzbuzz"
// 5. else print the number


const fizzBuzzChecker = (int: number): void => {
    for (let i = 1; i <= int; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzzChecker(100);


fizzBuzzChecker(100);