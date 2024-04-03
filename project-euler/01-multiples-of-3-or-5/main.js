
function calc(number) {
    let result = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;

        }
    }
    return console.log(result);
}





calc(1000);
//Ouput Expected(233168);