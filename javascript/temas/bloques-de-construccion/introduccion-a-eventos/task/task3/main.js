const buttonBar = document.querySelector('.button-bar');

// Add your code here
buttonBar.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
    const dataColor = e.target.getAttribute('data-color');
    if (dataColor) {
    buttonBar.style.backgroundColor = dataColor;
    }
    }
});
