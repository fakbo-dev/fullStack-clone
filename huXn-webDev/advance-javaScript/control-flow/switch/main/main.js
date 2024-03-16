//Switch Statement

/* switch (expression) {
    case x:
        print
        break;
    case y:
        print
        break
}*/

let x = " ";
let text;

switch (x) {
    case 0:
        text = "off";
        break;
    case 1:
        text = "On"
        break;
    default:
        text = "no value found";
}

console.log(text);


let day = "Monday";

switch (day) {

    case "Sunday":
        console.log("Today is Sunday");
        break;
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    default:
        console.log("please enter a day of the week");


        console.log(day);
}