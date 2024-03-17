// When we provide function as an (argument) to other function/argument that function is known as callback function.


function showCallFunc(fn) {
    const value = 10;
    return fn(value);
}


showCallFunc(function (value) {
    console.log(value);
});


function greet(name, cb) {
    console.log(`hello ${name}`);
    cb();
}


function cb() {
    console.log(`I am callback function`);
}

greet("jhon", cb);