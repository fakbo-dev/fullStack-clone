
let season = 'summer';
let response;

// Add your code here
switch (season) {
    case 'summer':
    response = 'its Summer :D';
    break;
    case 'Winter':
    response = 'its Winter :D';
    break;
    default:
    response;
}
// Don't edit the code below here!

const section = document.querySelector('.preview');
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);


// otra manera
let season2 = 'summer';
let response2;

// Add your code here
if (season2 === 'summer') {
response = 'puta cerda';
} else if (season2 === 'winter') {
response = 'puta cerda con frio';
} else {
response = 'no hay na xd';
}
// Don't edit the code below here!

const section = document.querySelector('.preview');
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
    