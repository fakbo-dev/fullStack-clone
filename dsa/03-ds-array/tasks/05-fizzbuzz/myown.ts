// Here's a problem for FizzBuzz without providing the solution:

// Write a program that prints the numbers from 1 to 100, but for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz"


const fizzBuzz = (number: number): void => {

    let start = 1;
    let end = number;

    while (start <= end) {

        if (start % 3 === 0 && start % 5 === 0) {
            console.log("fizzBuzz");
        } else if (start % 3 === 0) {
            console.log("Fizz");
        } else if (start % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(start);
        }

        start++;
    }
}


fizzBuzz(100);