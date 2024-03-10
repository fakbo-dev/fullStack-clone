// arithmetic operators = operands (values, variables, etc.)
//                        operators (*, -, +, /)



let students = 30;

students = students + 1;  //32
students = students - 1;  //30
students = students * 2;  //62
students = students / 2;  //15
students = students ** 2; //900
students = students % 3; // 1 is te value of students is an odd number in this case (31)

//increment
students++;
++students;
//decrement
students--;
--students;

/* operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2; // 23

result = 12 % 5 + 8 / 2; // 6

result = 6 / 2 ** (2 + 5); // 0.046875

console.log(students)