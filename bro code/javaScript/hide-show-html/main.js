const btn = document.querySelector(".btn");
const myImg = document.querySelector(".myImg");

btn.addEventListener("click", event => {
    if (myImg.style.display === "none") {
        myImg.style.display = "block";
        btn.textContent = "hide";
    }
    else {
        myImg.style.display = "none";
        btn.textContent = "Show";
    }
} );
