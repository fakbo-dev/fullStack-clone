
const btn = document.querySelector('.off');
let originalText = true;

btn.addEventListener('click', () => {
    if (originalText) {
    btn.textContent = 'Machine is on';
    originalText = false;
    } else {
    btn.textContent = 'Machine is off';
    originalText = true;
    }
})