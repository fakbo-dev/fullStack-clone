//? Big O notation: helps us understand how long an algorithm will take to run or how much memory it will need as the amount of data it handles grows

//? o(n) = signifies that the execution time of the algorithm grows linearly in proportion to the size of the input data (n)

// Imagine you have a list of groceries. To find a specific item (like milk), you might need to scan through the entire list. If the list  has 5 term it'll take a relative short time. But if the list has 500 items, it'll take considerably longer. This is the essence of linear time complexity


const groceries: string[] = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];


const searchItems = <T>(item: T): void => {

    for (let i = 0; i < groceries.length; i++) {
        const currentIndex: string = groceries[i];

        if (currentIndex === item) {
            console.log(`Item Found: ${item}`);
        }
    }

    for (let j = 0; j < groceries.length; j++) {
        const currentIndex: string = groceries[j];

        if (currentIndex === item) {
            console.log(`Item Found: ${item}`);
        }

    }

    // n + n = 2n -> O(2n)

    // Drop the constant so it become O(n);
};

searchItems("sugar");


