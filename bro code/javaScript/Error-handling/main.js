// Error = An object that is created to represent a problem that occurs
//         after with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// cath { } = Cath and handle any thrown Errors from try { }
// finally { } = (optional) Alwais executes. Used mostly for clean up
//               ex, close files, close connections, release resources

try {
    console.log(x);
    // NEtWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error) {
    console.log(error);
}
finally {
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}




// example o for and malisious  input

try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a division: "));
    
    if (divisor === 0) {
        throw new Error("You can't divide by zero");
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number")
    }

    const result = dividend / divisor;
    console.log(result);
}

catch(error) {
console.error(error);
}



console.log("You have reached the end");