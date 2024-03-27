const insert = document.querySelector("#insert");
const keyWord = document.querySelector(".key");
const para = document.createElement("p");


window.addEventListener("keydown", (e) => {
    insert.appendChild(para);
    para.classList.add("key");
    para.innerText = e.key;
});