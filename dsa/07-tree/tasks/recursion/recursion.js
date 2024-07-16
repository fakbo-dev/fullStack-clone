// Recursion

// is when a function calls itself. But it doesn't call itself exactly the same way each time.

// The function make the problem smaller by changing the input a bit. Like opening a smaller doll inside the bigger one.
// There's a simple case, that the functions can solve without calling itself again. this is called the base case. (The smallest Doll).
// As long as it's not the base case, the function calls itself with the smaller problem.



// #1 first example
function countDown(n) {

    if (n === 0) {
        console.log("And finally the stopping point");
        return;
    }

    console.log(n);
    countDown(n - 1);
};

countDown(10);


// #2 factorial

const factorial = (number) => number === 0 ? 1 : number * factorial(number - 1);


console.log(factorial(5));