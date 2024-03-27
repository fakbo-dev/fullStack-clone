//get Reference 

const btn = document.querySelector(".submitBtn");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("toggle");
})