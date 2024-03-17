// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

const car = {
    type: "Chevrolet",
    model: "camaro",
    color: "Green",
};

console.log(typeof car);


car.type = "Toyota";

car.wheels = "Circles";

console.log(car);