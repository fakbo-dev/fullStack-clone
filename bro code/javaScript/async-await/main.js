// Async/await = Async = makes a function return a promise
//               await = makes an async function wait for a promise

//                       Allows you write asynchronous code in a synchronous manner
//                       Async doesn't have resolve or reject parameters
//                       Everything after Await is placed in an event qeue

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dog = true;

            if(dog) {
                resolve("You walk the dog 🐕");

            }
            else {
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    })
};

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {

            const kitchen = true;

            if(kitchen) {
                resolve("You clean the kitchen 🧹");
            }
            else {
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
};

function takeOutTrash() {


    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trash = true;

            if (trash) {
                resolve("You take out the trash 💩");
            }
            else {
                reject("You DIND'T take out the trash");
            }
        }, 500);
    })
};


async function doChores() {

    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores")
}


doChores();