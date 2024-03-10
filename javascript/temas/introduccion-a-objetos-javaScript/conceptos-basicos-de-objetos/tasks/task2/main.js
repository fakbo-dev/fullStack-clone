let bandInfo;

// Put your code here

const myBand = {
name: 'Good Kid',
nationality: 'Canada',
genre: 'Pop',
members: 5,
formed: 2015,
split: false,
album: [{
name: 'Good kid',
release: 2018
}, {
name: 'Good Kid 2',
released: 2020
}]
};
bandInfo = `Hello! this is my little biography about my favorite band ${myBand.name} they are from ${myBand.nationality} they produce music from ${myBand.formed} they produce ${myBand.genre} music their first almbum is called ${myBand.album[0].name} and was released on ${myBand.album[0].release}`;
// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);