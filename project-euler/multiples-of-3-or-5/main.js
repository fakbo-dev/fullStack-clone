const para = document.getElementById("good");
const para2 = document.getElementById("even");
const para3 = document.getElementById("bad");
const good = [];
const rest = [];
let accumulate = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0  || i % 5 === 0) {
        accumulate += i;
        good.push(i);
    }
    else {
        rest.push(i);
    }
}

para.textContent = good;
para2.textContent = accumulate;
para3.textContent = rest;