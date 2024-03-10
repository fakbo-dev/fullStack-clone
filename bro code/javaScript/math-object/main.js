// Math = built-in object that probides a collection of properties and methods
let r = 45;
let t = 10;
let b = 81;
let a = 3;
let x = 3.21;
let y = 2;
let z;
let v = -3.21;

//value of pi

Math.PI
console.log(Math.PI); //3.141592653589793

//value of Euler

Math.E
console.log(Math.E); //2.718281828459045


//round method

z = Math.round(x); // 3

//floor method, the same of round but always round down

z = Math.floor(x); // 3

//ceil method is the opposite of floor method

z = Math.ceil(x); // 4

//trunc method delete the decimals

z = Math.trunc(x); //3

//pow method for raise a base to a given power 

z = Math.pow(a, y) // 9
z = Math.pow(y, a) // 8

//square root method

z = Math.sqrt(b); //9

//Logarithm method used fot find the natural logarithm of a number

z = Math.log(t); // 2.302585092994046

//TRIGONOMETRIC METHODS

//sin method, this method use radiant

z = Math.sin(r); // 0.85

//cos method

z = Math.cos(r); //0.52

// tangent method

z = Math.tan(r); //1.61

//abs (absolute value)

z = Math.abs(v); //3.21

//sign method fo know the sign of a number (plus or minus)
z = Math.sign(v); //-1
z = Math.sign(y); //+1

//maximun or minimun value method
let max = Math.max(x, y, r); // 45

let min = Math.min(x, y, r); // 2

//Random method genere a random number between 0 and 1

let randomNum = Math.floor(Math.random() * 100) + 1; //generate a number between 1 and 100


//random number between a certain range

let max2 = 100;
let min2 = 50;
let randomNum2 = Math.floor(Math.random() * (max2 - min2) + min); //number should be between 50 and 100
