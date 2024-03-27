// 1. Check the innerText of "first" element
// 2. Check the textContent of "second" element
// 3. Check the innerHTML of "third" element

const h1 = document.querySelector(".first");

console.log(h1.innerText);

const second = document.querySelector(".second");

console.log(h1.textContent);

const third = document.querySelector(".third");

console.log(third.innerHTML);
