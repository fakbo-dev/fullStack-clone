// type variableName (annotations/types) = {property:value}

// Define a person object

const person: { firstName: string; lastName: string; age: number; } = {

  firstName: "John",
  lastName: "Doe",
  age: 30,
}


console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);



//Function object


function prinUser(): { name: string; age: number; location: string; } {
  return {
    name: "fakbo",
    age: 21,
    location: "venezuela",
  }
}

const res = prinUser();

console.log(res);