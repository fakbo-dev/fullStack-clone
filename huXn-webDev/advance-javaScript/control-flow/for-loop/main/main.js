//For loop

//DRY -> Don't repeat yourself


// for (initialExpression; condition; incrementExpression) {...} 




for (let i = 0; i <= 5; i++) {
    console.log(`Hello world ${i}`);
}



for (let i = 0; i <= 10; i++) {
    console.log(" --- outer loop ---", i);
    // Nested Loop
    for (let j = 0; j <= 5; j++) {
        console.log("--- inner Loop ---", j);
    }
}