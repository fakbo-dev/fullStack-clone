// DICE ROLLER PROGRAM
const btn = document.querySelector(".submit");
function rollDice() {

    const numOfDice = document.querySelector(".numOfDice").value;
    const diceResult = document.querySelector(".diceResult");
    const diceImages = document.querySelector(".diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const randomN = Math.floor(Math.random() * 6) + 1;
        values.push(randomN);
        images.push(`<img src="image/${randomN}.png" alt="Dice ${randomN}">`)
    }

    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}


btn.addEventListener("click", rollDice)