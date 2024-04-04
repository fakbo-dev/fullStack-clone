//el pastel tendra una vela por cada year de su edad total
// solo se pueden apagar las velas mas altas (Numero)
// necesitamos contar las velas mas altas
// la altura maxima de la vela es 4 unidades, hay 2 asi que return 2



function birthdayCakeCandles(candles) {
    // Write your code here
    let largest = 0;
    let count = 0;
    for (let i = 0; i < candles.length; i++) {

        if (candles[i] > largest) {
            largest = candles[i];
            count = 1;
        } else if (largest === candles[i]) {
            count++
        }

    }
    return console.log(count);
}





const test = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];

birthdayCakeCandles(test);



function birthdayCakeCandles1(candles) {
    // Write your code here
    let index = 0;
    let count = 0;

    for (let i = 0; i < candles.length; i++) {
        if (index <= candles[i]) {
            index = candles[i];
            count = 1;
        } else if (index === candles[i]) {
            count++
        }
    }
    return count;
}


birthdayCakeCandles1(test);


