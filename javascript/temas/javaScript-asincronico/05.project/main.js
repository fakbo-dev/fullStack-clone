const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");



//Llamar a alice2 cuando termine alice 1 y llamar a alice3 cuando termine alice 2

//1. callbacks method

// const response = alice1.animate(aliceTumbling,



//1. callbacks


async function aliceAnimation() {
    try {
        await alice1.animate(aliceTumbling, aliceTiming).finished;
        await alice2.animate(aliceTumbling, aliceTiming).finished;
        await alice3.animate(aliceTumbling, aliceTiming).finished;
    } catch (error) {
        console.error(`Alice Animation Error: ${error}`);
    }
}

aliceAnimation();




//2. Then()

// response.finished.then(() => {
//     const response2 = alice2.animate(aliceTumbling, aliceTiming);
//     return response2.finished;
// }).then(() => {
//     alice3.animate(aliceTumbling, aliceTiming);
// });