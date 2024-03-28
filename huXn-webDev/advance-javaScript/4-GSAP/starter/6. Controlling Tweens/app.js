//Get DOM Reference

const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const restartBtn = document.querySelector(".restart");
const tween = gsap.to(".box1", {
    y: -200,
    duration: 5,
    backgroundColor: "teal",
});


playBtn.addEventListener("click", () => tween.play());
pauseBtn.addEventListener("click", () => tween.pause());
restartBtn.addEventListener("click", () => tween.restart());