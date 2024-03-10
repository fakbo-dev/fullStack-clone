//  closure = A function defined inside of another function,
//            the inner function has access to the variable
//            and scope of the outer function.
//            allow for private variables and state maintenance
//            Used frequently in JS frameworks: React, Vue, Angular

function outer() {

    let message = "Hello";
    function inner() {
    }
    console.log(message);
    
    inner();
}

message = "Goodbye";

outer();



///another example
function createCounter() {
    
    let count = 0;
    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }
    function getCount() {
        return count;
    }


    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`the current count is ${counter.getCount()}`);


// last example

function createGame() {

    let score = 0;

function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
}

function decreaseScored(points) {
    score -= points;
    console.log(`-${points}pts`);
}

function getScore() {
    return score;
}

return {increaseScore, decreaseScored, getScore};
}
const game = createGame();


game.increaseScore(5);
game.increaseScore(6);
game.decreaseScored(3);
console.log(`the final score is ${game.getScore()}pts.`)