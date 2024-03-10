// Switch = Can be an efficient replacement to many else if statement

let day = 1;

switch(day) {
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("iT is Tuesday");
        break;
    case 3:
        console.log("It is wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
    default:
        console.log(`${day} is not a day`);
}


// Testscore 

let testScore = 92;
let letterGrade;

switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;

    case testScore >= 80:
        letterGrade = "B";
        break;

    case testScore >= 70:
        letterGrade = "C";
        break;

    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}