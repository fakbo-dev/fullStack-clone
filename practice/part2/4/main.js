const nearest = (num1,num2) => (100 - num1) < (100 - num2) ? num1 : num2;




console.log(nearest(99, 1));
console.log(nearest(49, 51));
console.log(nearest(50, 50));
