const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['./images/pic1.jpg', './images/pic2.jpg', './images/pic3.jpg', './images/pic4.jpg', './images/pic5.jpg'];
/* Declaring the alternative text for each image file */

const object = ['Human blue eyes', 'sorry i don\'t know what is this bullshiet', 'Purple flowers', 'hieroglyphs', 'a brown butterfly'];

/*const alts = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
}*/
/* Looping through images */

for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src',images[i]);
    newImage.setAttribute('alt', object[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e =>  {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}
/*for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src',`./images/${image}`);
    newImage.setAttribute('alt',alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}*/

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    btn.getAttribute('dark');
    if (btn.className === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = `rgba(0, 0, 0, 0.5)`;
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = `rgba(0, 0, 0, 0)`;
    }

});