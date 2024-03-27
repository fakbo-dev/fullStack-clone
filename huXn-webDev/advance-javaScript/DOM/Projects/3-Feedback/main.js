//getting elements from the DOM

const ratingsCon = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

//Attach events

ratingsCon.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("rating")) {
        removeActive();
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
})


sendBtn.addEventListener("click", () => {
    panel.innerHTML = ` 
    <p class= "heart">💖</p>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback ${selectedRating}</strong>
    `
})


function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove("active");
    }
}