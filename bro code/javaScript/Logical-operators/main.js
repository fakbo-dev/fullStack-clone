// logical operator = used to combine of manipulate boolean values
//                    (true or false) 

//                    AND = && 
//                    OR  = ||
//                    NOT = !

const temp = 20;


if (temp > 0 && temp <= 30) {
    console.log("the weather is GOOD");
} else {
    console.log("the weather is BAD");
}


if (temp > 0 || temp <= 30) {
    console.log("the weather is GOOD");
} else {
    console.log("the weather is BAD");
}

const isSunny = true;

if (!(isSunny)) {
    console.log("It is cloudy")
} else {
    console.log("It is sunny")
}