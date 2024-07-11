// MaxProfit

// Imagine you're buying and selling stocks throughout the year. your job is to find the biggest profit you could make by buying low and selling high only once

// here's what you're given

// A list of stock prices for each day -> [7,1,5,3,6,4]

// Here's what you need to find:

// The difference between the cheapest price and could have bought the stock and the most expensive price you could have sold it later on


// O(n^2)?


const profitData: number[] = [7, 1, 5, 3, 6, 4];

const maxProfit = (stocks: number[]) => {
    let minPrice = stocks[0];
    let maxProfit = 0;

    let start = 0;
    let end = stocks.length - 1;

    while (start < end) {
        const currentPrice = stocks[start];
        minPrice = Math.min(minPrice, currentPrice);
        const potencialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potencialProfit);
        start++;
    }
    return console.log(maxProfit);
}

maxProfit(profitData);

