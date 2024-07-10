// MaxProfit

// Imagine you're buying and selling stocks throughout the year. your job is to find the biggest profit you could make by buying low and selling high only once

// here's what you're given

// A list of stock prices for each day -> [7,1,5,3,6,4]

// Here's what you need to find:

// The difference between the cheapest price and could have bought the stock and the most expensive price you could have sold it later on

// steps

//  1. una funcion que tome un array como parametro.
//  2. una variable inicilizada en un array vacio para guardas nuestro valor mas bajo y mas alto
//      2.1 una variable para almacenar el valor mayor y el valor menor?
//  3. iterar a travez del array y evaluar cada indice para determinar el valor mas alto y el valor mas bajo
//  4. retornar un array que contengan los valores bajos y altos


interface Profit {
    min?: number;
    max?: number;
}
const maxProfit = (arr: number[]): void => {

    let profitArray: Profit = { min: 0, max: 0 };
    let minValue = 1;
    let maxValue: number = 0;


    for (let i = 0; i < arr.length; i++) {

        if (minValue > arr[i]) {
            minValue = arr[i];
        } else if (maxValue < arr[i]) {
            maxValue = arr[i];
        }
    }
    profitArray.min = minValue;
    profitArray.max = maxValue;
    return console.log(profitArray)
}

const test: number[] = [7, 1, 5, 3, 6, 4];
maxProfit(test); //Expected Ouput: {min: 1, max: 7}

// ? Better way

const maxProfitTwo = (prices: number[]): number => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}

console.log(maxProfitTwo(test)); //Expected Output: 5


// ? correct answer

const maxProfitBetter = (prices: number[]): number => {
    let minPrice = prices[0]; // Assume the first day is the cheapest to buy
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        // console.log(currentPrice);

        // Update minimum price if a lower price is found
        minPrice = Math.min(minPrice, currentPrice);
        // console.log(minPrice);

        // Calculate potential profit for selling today
        const potentialProfit = currentPrice - minPrice;
        // console.log(potentialProfit);

        // Update maxProfit if a higher profit is found
        maxProfit = Math.max(maxProfit, potentialProfit);
        // console.log(maxProfit);
    }

    return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfitBetter(prices);
console.log("Maximum profit:", profit);