// .reduce() = reduce the elements of an array
//             to a single value

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total}`)

function sum(accumulator, element) {
    return accumulator + element;
}

//example

const grades = [75, 50, 90, 80, 65, 95];

const maximun = grades.reduce(maximunValue);

console.log(maximun)

function maximunValue( accumulator,element) {
    return Math.max(accumulator, element);
}

function minimunValue(accumulator, element) {
    return Math.min(accumulator, element);
}