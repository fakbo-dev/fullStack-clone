//Variable scope = where a variable is recognized
//                 and accessible (local vs global)


//supose we have a variable

let x1 = 1;

//each variable name has to be unique in this scope (global) we can't declare another variable with the same name but we can reuse the same name variable is they are in different scope

function function1() {
    let x = 1;
    console.log(x);


}function function2() {
    let x = 2;
    console.log(x);
}

function1();
function2();

// so we have 2 variable with the same name in this program that's legal as long they have different scopes  also function can't see inside in another function 


// example, let's say that a function  is a house we live in function1 and our neighbor lives in function two we can't see inside of our neighbor's house at function2 anything that's declared in the  global scope isn't found within any houses it's outside everybody  can plainly see it it's kind like a creppy stalker that's under a street light at 3:00 am, however it's not recommended to declare global variables in a large program just bacuase you can have naming conflicts in a large program i might accidentally reuse the variable x or change it somewhere, so in a large program i would stick with a loca variables but in small program like this is fine

