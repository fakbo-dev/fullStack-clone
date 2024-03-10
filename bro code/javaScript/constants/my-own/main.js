const input = document.querySelector('input');
const btn = document.querySelector('button');
const myH3 = document.querySelector('h3');



btn.addEventListener('click', () => {
    const pi = 3.14159;
    const radius = input.value;
    const fixed = Number(radius);
    const circunference = 2 * pi * fixed;

    myH3.textContent = `${circunference} cm.`;
} )