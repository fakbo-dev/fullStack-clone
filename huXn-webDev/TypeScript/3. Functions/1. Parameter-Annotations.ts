function addOne(num: number) {
  return num + 1;
}

const result: number = addOne(20);
console.log(result);

// Arrow function

const double = (x: number, y: number) => x * y;

const rest = double(2, 10);

console.log(rest);