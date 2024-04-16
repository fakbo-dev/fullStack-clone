const fixed = s.split("");
let result;
for (let i = 0; i <= fixed.length; i++) {
    let index = fixed[i];

    if (fixed[i].toLowerCase() && fixed[i + 1].toUpperCase()) {
        let first = fixed[i];
        let second = fixed[i + 1];

        second = first;
        first = index;
        //Maybe throw an error
        result = `${first}${second}*`;
        fixed[i + 2] = result;
    } else if (typeof fixed[i] === "number") {
        fixed[i] = 0;

    }
}