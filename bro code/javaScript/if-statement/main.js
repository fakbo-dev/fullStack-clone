// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

let age = 25;

if (age >= 18) {
    console.log('you are old enough to enter this site');
} else {
    console.log('you must be 18+ to enter this site')
}

let time = 9;

if (time < 12) {
    console.log('Good morning');
} else {
    console.log('good afternoon');
}

// BOLEAN variable

const isStudent = false;

if (isStudent) {
    console.log('You are a student!');
} else {
    console.log('You are NOT a student');
}

//NESTED

const age2 = 25;
const hasLicense = false;

if (age >= 16) {
    console.log('You are old enough to drive');
    if (hasLicense) {
        console.log('you have your license!');
    } else {
        console.log('you do not have you license yet')
    }
} else {
    console.log('You must be 16+ to have a lincese');
}

