// Promises = An Object that manages asynchronous operations.
//            wrap a Promise object around {asynchronous code}
//            "I promise to return a value"
//            PEDNING -> RESOLVED OR REJECTED
//            new Promise({resolve, reject}) => {asynchronous code}

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLAN THE KITCHEN
// 3. TAKE OUT THE TRASH

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


walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("you Complete all the chores")})
        .catch(error => {console.error(error)});