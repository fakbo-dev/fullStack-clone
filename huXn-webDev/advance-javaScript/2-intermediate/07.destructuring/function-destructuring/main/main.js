const person = {
    name: "John doe",
    age: 20,
    country: "USA",
};

function printPersonInfo({ name, age, country }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
}


printPersonInfo(person);



let options = {
    title: "My menus",
    items: ["imte1", "item2"],
};

function showMenu({
    title,
    width: w = 100,
    height: h = 200,
    items: [item1, item2]
}) {
    console.log(`${title} ${w}, ${h}`);
    console.log(item1);
    console.log(item2);
}

showMenu(options);